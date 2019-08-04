---
template: holy-grail.html
title: 圣杯布局
excerpt: 这是一个经典的 CSS 布局挑战，历史上出现的方案都没有完美解决。直到 Flexbox 布局的出现，终于成为可能。
---

[圣杯布局](<http://en.wikipedia.org/wiki/Holy_Grail_(web_design)>) 是典型的 CSS 布局问题，有着众多的解决方案。如果你不熟悉圣杯布局的历史，[这篇文章](http://alistapart.com/article/holygrail) 能够提供很好的总结，并给出了几个众所周知的解决方案。

<!-- The [Holy Grail Layout](http://en.wikipedia.org/wiki/Holy_Grail_(web_design)) is a classic CSS problem with various solutions presented over time. If you're unfamiliar with the history of the Holy Grail layout, this [A List Apart article](http://alistapart.com/article/holygrail) offers a pretty good summary and links to a few of the more well-known solutions. -->

圣杯布局由页头 (header)，中间部分 (center)，页脚 (footer)，和三栏组成。中间的一栏是主要内容，左边和右边提供如广告、导航的链接。

<!-- At its core, the Holy Grail Layout is a page with a header, footer, and three columns. The center column contains the main content, and the left and right columns contain supplemental content like ads or navigation. -->

大部分的 CSS 解决方案都是以下列为目标：

<!-- Most CSS solutions to this problem aim to meet a few goals: -->

-   边栏应流动居中，定宽。
-   中间一栏 (主要内容) 在 HTML 源码中应该首先元素出现。
-   所有栏同高，忽略实际高度。
-   使用的 HTML 标记尽量少。
-   当页面内容不够充满页面时，页脚应“粘”在底部。

<!-- - They should have a fluid center with fixed-width sidebars.
- The center column (main content) should appear first in the HTML source.
- All columns should be the same height, regardless of which column is actually the tallest.
- They should require minimal markup.
- The footer should "stick" to the bottom of the page when content is sparse. -->

不幸的是，这些自然的需求由于原生 CSS 的限制，当前经典的圣杯布局的解决方案都不能完美满足以上所有的要点。

<!-- Unfortunately, because of the nature of these goals and the original limitations of CSS, none of the classic solutions to this problem were ever able to satisfy all of them. -->

有了 Flexbox 布局，终极的解决方案终于成为可能。

<!-- With Flexbox, a complete solution is finally possible. -->

## HTML 代码

<!-- ## The HTML -->

```html
<body class="HolyGrail">
    <header>…</header>
    <div class="HolyGrail-body">
        <main class="HolyGrail-content">…</main>
        <nav class="HolyGrail-nav">…</nav>
        <aside class="HolyGrail-ads">…</aside>
    </div>
    <footer>…</footer>
</body>
```

## CSS 代码

<!-- ## The CSS -->

让中间部分撑开并让页脚粘在底部的方法使用了 [粘性页脚](../sticky-footer/) 中相同的技术。唯一的不同点是，圣杯布局的中间部分 (`.HolyGrail-body`) 需要指定 `display:flex` 来控制子元素的布局。

<!-- Getting the center content row to stretch and the footer to stick to the bottom is solved with the same technique shown in the [Sticky Footer](../sticky-footer/) example. The only difference is the center row of the Holy Grail layout (`.HolyGrail-body`) needs to be `display:flex` in order to properly arrange its children. -->

```css
.HolyGrail {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.HolyGrail-body {
    display: flex;
    flex: 1;
}
```

制造三个等高的，流式居中，定宽的边栏很简单：

<!-- Styling three equal-height columns with a fluid center and fixed-width sidebars is just as easy: -->

```css
.HolyGrail-content {
    flex: 1;
}

.HolyGrail-nav,
.HolyGrail-ads {
    /* 12em is the width of the columns */
    flex: 0 0 12em;
}

.HolyGrail-nav {
    /* put the nav on the left */
    order: -1;
}
```

<aside class="Notice"><strong>注意:</strong>&nbsp; 该 demo 的 CSS 代码需要轻微修改才能跨浏览器工作。参考 <a href="https://github.com/magic-akari/solved-by-flexbox/blob/master/assets/css/components/holy-grail.css">源代码的注释</a>。</aside>
<!-- <aside class="Notice"><strong>Note:</strong>&nbsp; the CSS required to make this demo work cross-browser is slightly different from the CSS shown in the examples above, which assume a fully spec-compliant browser. See the <a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/holy-grail.css">comments in the source</a> for more details.</aside> -->

### 响应式

<!-- ### Being Responsive -->

圣杯布局来自于每个人都使用个人计算机冲浪的互联网时期的网页设计，但是随着移动设备的激增，圣杯布局已渐渐没落。

<!-- The Holy Grail layout came from an era of Web design when pretty much everyone was browsing on a computer. But with the increasing number of mobile devices and the rising popularity of responsive design, the Holy Grail layout has gone mostly out of fashion. -->

另一方面，使用 Flexbox 布局，创建一个移动设备优先和移动设备友好版本的圣杯布局很简单。其主旨就是把中间的部分默认指定为 `flex-direction:column` ，然后为拥有更宽屏幕的设备指定 `flex-direction:row` 。

<!-- Either way, with Flexbox, creating a mobile-first and mobile-friendly version of the Holy Grail layout is easy. The gist is to simply make the center section `flex-direction:column` by default and then `flex-direction:row` for larger screens. -->

这里是一个完整版的移动式被优先响应式示例。你可以调整浏览器大小来查看效果。

<!-- Here's a complete example that is responsive and mobile-first. You can also resize this browser window to see it in action. -->

```css
.HolyGrail,
.HolyGrail-body {
    display: flex;
    flex-direction: column;
}

.HolyGrail-nav {
    order: -1;
}

@media (min-width: 768px) {
    .HolyGrail-body {
        flex-direction: row;
        flex: 1;
    }
    .HolyGrail-content {
        flex: 1;
    }
    .HolyGrail-nav,
    .HolyGrail-ads {
        /* 12em is the width of the columns */
        flex: 0 0 12em;
    }
}
```

在 Github 中查看这个 demo 中完整的圣杯组件 [源代码](https://github.com/magic-akari/solved-by-flexbox/blob/master/assets/css/components/holy-grail.css)

<!-- View the full [source](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/holy-grail.css) for the `HolyGrail` component used in this demo on Github. -->
