---
template: default.html
title: 粘性页脚
excerpt: 让你的页脚粘在底部一直以来是一个技巧。如果页脚的高度未知，那么基本上就不可能了。现在不再如此。
---

<div class="Demo Demo--spaced">

点击下边的按钮来隐藏这个页面的内容，注意在页面内容无法填充整个页面时，页脚是如何粘在窗口底部的。
<!-- Click the button below to hide the contents of this page. Notice how the footer sticks to the bottom of the window even when there's not enough content to fill the page. -->

<button id="collapse-trigger" class="Button"><span class="icon-refresh u-spaceRS"></span> 显示/隐藏页面内容</button>

</div>

<div id="collapsable-content">

当页面内容稀少时，让页脚粘在页面底部，是每一个 Web 开发者在他的生涯中尝试解决过的问题。并且，可以说绝大多数情况，这是一个已被解决的问题。然而 [现存的解决方案](http://ryanfait.com/resources/footer-stick-to-bottom-of-page/) 有一个重大的缺陷 &mdash; 如果高度未知，就会失效。
<!-- Getting the footer to stick to the bottom of pages with sparse content is something just about every Web developer has tried to tackle at some point in his or her career. And, for the most part, it's a solved problem. Yet all the [existing solutions](http://ryanfait.com/resources/footer-stick-to-bottom-of-page/) have one significant shortcoming &mdash; they don't work if the height of your footer is unknown. -->

Flexbox 布局可以完美解决这类问题。众所周知， Flexbox 布局经常被用在水平布局中，然而在垂直布局中 Flexbox 布局也格外拿手。你所要做的就是把垂直部分包在 flex 容器中，并选择一个元素可以让它展开以高度自适应。它们会自动地利用容器所有可用空间。
<!-- Flexbox is a perfect fit for this type of problem. While mostly known for laying out content in the horizontal direction, Flexbox actually works just as well for vertical layout problems. All you have to do is wrap the vertical sections in a flex container and choose which ones you want to expand. They'll automatically take up all the available space in their container. -->

下边的示例中，容器被设置成窗口的高度，内容被设置成按需要扩展。*(注意：在垂直布局中你需要指定容器的高度，这一点和水平布局的自适应不同。)*
<!-- In the example below, the container is set to the height of the window, and the content area is told to expand as needed. *(Note: in the vertical direction you need to specify a height for the container. This is different from the horizontal direction, which automatically expands to fit.)* -->

## HTML 代码
<!-- ## The HTML -->

```html
<body class="Site">
  <header>…</header>
  <main class="Site-content">…</main>
  <footer>…</footer>
</body>
```

## CSS 代码
<!-- ## The CSS -->

```css
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}
```

在 Github 中查看这个 demo 中完整的粘性页脚组件 [源代码](https://github.com/magic-akari/solved-by-flexbox/blob/master/assets/css/components/site.css)
<!-- View the full [source](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/site.css) for the `Site` component used in this demo on Github. -->

<aside class="Notice"><strong>注意:</strong>&nbsp; 该 demo 的 CSS 代码需要轻微修改才能跨浏览器工作。参考 <a href="https://github.com/magic-akari/solved-by-flexbox/blob/master/assets/css/components/site.css">源代码的注释</a>。</aside>
<!-- <aside class="Notice"><strong>Note:</strong>&nbsp; the CSS required to make this demo work cross-browser is slightly different from the CSS shown in the example above, which assumes a fully spec-compliant browser. See the <a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/site.css">comments in the source</a> for more details.</aside> -->

</div>

<script class="js-allow-before-footer">
  (function() {
    var collapseTrigger = document.getElementById("collapse-trigger");
    var collapseableContent = document.getElementById("collapsable-content");
    var isCollapsed = false;
    collapseTrigger.addEventListener("click", function() {
      if (isCollapsed) {
        collapseableContent.classList.remove("u-hidden");
      } else {
        collapseableContent.classList.add("u-hidden");
      }
      isCollapsed = !isCollapsed;
    }, false);
  }());
</script>
