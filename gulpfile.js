const connect = require("connect");
const cssnano = require("cssnano");
const fs = require("fs-extra");
const frontMatter = require("front-matter");
const globby = require("globby");
const gulp = require("gulp");
const he = require("he");
const hljs = require("highlight.js");
const htmlMinifier = require("html-minifier");
const MarkdownIt = require("markdown-it");
const nunjucks = require("nunjucks");
const path = require("path");
const postcss = require("postcss");
const atImport = require("postcss-import");
const cssnext = require("postcss-cssnext");
const serveStatic = require("serve-static");
const { argv } = require("yargs");

/**
 * The output directory for all the built files.
 */
const DEST = "./solved-by-flexbox";

/**
 * The base public path of the site.
 */
const PUBLIC_PATH = path.join("/", DEST, "/");

nunjucks.configure("templates", { autoescape: false, noCache: true });

/**
 * Renders markdown content as HTML with syntax highlighted code blocks.
 * @param {string} content A markdown string.
 * @return {string} The rendered HTML.
 */
const renderMarkdown = content => {
    const md = new MarkdownIt({
        html: true,
        typographer: true,
        highlight: (code, lang) => {
            code = lang
                ? hljs.highlight(lang, code).value
                : // Since we're not using highlight.js here, we need to
                  // espace the html, but we have to unescape first in order
                  // to avoid double escaping.
                  he.escape(he.unescape(code));

            return code;
        }
    });

    return md.render(content);
};

gulp.task("pages", async () => {
    const baseData = await fs.readJSON("./config.json");
    const overrides = {
        baseUrl: PUBLIC_PATH,
        env: process.env.NODE_ENV || "development"
    };
    const site = Object.assign({ demos: [] }, baseData, overrides);

    const processContent = async pagePath => {
        const slug = path.basename(pagePath, path.extname(pagePath));
        const permalink = site.baseUrl + (slug === "index" ? "" : "demos/" + slug + "/");

        const fileContents = await fs.readFile(pagePath, "utf-8");
        const { body, attributes } = frontMatter(fileContents);

        const data = {
            site,
            page: {
                content: body,
                slug,
                permalink,
                ...attributes
            }
        };

        if (path.extname(pagePath) == ".md") {
            data.page.content = renderMarkdown(data.page.content);
        }
        data.page.content = nunjucks.renderString(data.page.content, data);

        return data;
    };

    const renderPage = async data => {
        let html = nunjucks.render(data.page.template, data);
        if (process.env.NODE_ENV === "production") {
            html = htmlMinifier.minify(html, {
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                minifyJS: true,
                minifyCSS: true
            });
        }

        const outputPath = path.join(data.page.permalink.slice(1), "index.html");
        await fs.outputFile(outputPath, html);
    };

    const demoPaths = await globby("./demos/**/*");
    for (const demoPath of demoPaths) {
        const data = await processContent(demoPath);

        // Add the page data to the site demos.
        site.demos.push(data.page);

        await renderPage(data);
    }

    const pagePaths = await globby("*.html");
    for (const pagePath of pagePaths) {
        const data = await processContent(pagePath);
        await renderPage(data);
    }
});

gulp.task("images", () => {
    return gulp.src("./assets/images/**/*").pipe(gulp.dest(path.join(DEST, "images")));
});

gulp.task("css", async () => {
    const src = "./assets/css/main.css";
    const css = await fs.readFile(src, "utf-8");

    const plugins = [
        atImport(),
        cssnext({
            browsers: "> 1%, last 2 versions, Safari > 5, ie > 9, Firefox ESR"
        })
    ];
    if (process.env.NODE_ENV === "production") {
        plugins.push(
            cssnano({
                preset: ["default", { discardComments: { removeAll: true } }]
            })
        );
    }

    const result = await postcss(plugins).process(css, { from: src });
    await fs.outputFile(path.join(DEST, path.basename(src)), result.css);
});

gulp.task("default", gulp.parallel("css", "images", "pages"));

gulp.task(
    "serve",
    gulp.series("default", () => {
        let port = argv.port || argv.p || 4000;
        connect()
            .use(serveStatic("./"))
            .listen(port);

        gulp.watch("./assets/css/**/*.css", gulp.series("css"));
        gulp.watch("./assets/images/*", gulp.series("images"));
        gulp.watch(["*.html", "./demos/*", "./templates/*"], gulp.series("pages"));

        console.log(`serving on http://localhost:${port}/solved-by-flexbox`);
    })
);
