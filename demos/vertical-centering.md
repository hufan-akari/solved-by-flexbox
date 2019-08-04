---
template: default.html
title: 垂直居中
excerpt: 这个经典的问题一直被 CSS hackers 挑战了很多年，历史的解决方案没有一个能够完整地解决。有了 Flexbox 布局，终于成为了可能。
---

一直以来缺乏好的垂直居中的方法，是 CSS 的黑点。
<!-- The lack of good ways to vertically center elements in CSS has been a dark blemish on its reputation for pretty much its entire existence. -->

更糟糕的是，目前的垂直居中的技术晦涩而又反直觉，最直接的选择(比如  `vertical-align:middle`) 从未起过作用。
<!-- What makes matters worse is the techniques that do work for vertical centering are obscure and unintuitive, while the obvious choices (like `vertical-align:middle`) never seem to work when you need them. -->

目前的[垂直解决方案](http://css-tricks.com/centering-in-the-unknown/) 使用了 从负外边距 到 `display:table-cell` 等荒谬的奇技淫巧，包括全高的伪元素。这些技术有时候能够生效，然而并不是所有情况都能如愿。如果你想垂直居中一个形状不确定，或者子元素不是父元素唯一的子元素呢？如果你能用伪元素居中这种奇技淫巧，但是你又想用伪元素做些其他的事呢？
<!-- The current landscape of [vertical centering options](http://css-tricks.com/centering-in-the-unknown/) ranges from negative margins to `display:table-cell` to ridiculous hacks involving full-height pseudo-elements. Yet even though these techniques sometimes get the job done, they don't work in every situation. What if the thing you want to center is of unknown dimensions and isn't the only child of its parent? What if you could use the pseudo-element hack, but you need those pseudo-elements for something else? -->

用了 Flexbox 布局，不再纠结这些麻烦。你可以任意对齐(垂直或者水平)，仅仅设置`align-items`, `align-self`, 和 `justify-content` 这些属性就好。
<!-- With Flexbox, you can stop worrying. You can align anything (vertically or horizontally) quite painlessly with the `align-items`, `align-self`, and `justify-content` properties. -->

<div class="Demo Demo--spaced u-ieMinHeightBugFix">
  <div class="Aligner">
    <div class="Aligner-item Aligner-item--fixed">
      <div class="Demo">
        <h3>我居中啦!</h3>
        <p contenteditable="true">This box is both vertically and horizontally centered. Even if the text in this box changes to make it wider or taller, the box will still be centered. Go ahead, give it a try. Just click to edit the text.</p>
      </div>
    </div>
  </div>
</div>

不像一些现存的垂直居中技术，Flexbox 垂直居中并不会影响其相邻元素的对齐方式。
<!-- Unlike some of the existing vertical alignment techniques, with Flexbox the presence of sibling elements doesn't affect their ability to be vertically aligned. -->

<div class="Demo Demo--spaced u-ieMinHeightBugFix">
  <div class="Aligner">
    <div class="Aligner-item Aligner-item--top">
      <div class="Demo"><strong>顶</strong></div>
    </div>
    <div class="Aligner-item">
      <div class="Demo"><strong>中</strong></div>
    </div>
    <div class="Aligner-item Aligner-item--bottom">
      <div class="Demo"><strong>底</strong></div>
    </div>
  </div>
</div>

## HTML 代码
<!-- ## The HTML -->

```html
<div class="Aligner">
  <div class="Aligner-item Aligner-item--top">…</div>
  <div class="Aligner-item">…</div>
  <div class="Aligner-item Aligner-item--bottom">…</div>
</div>
```

## CSS 代码
<!-- ## The CSS -->

```css
.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aligner-item {
  max-width: 50%;
}

.Aligner-item--top {
  align-self: flex-start;
}

.Aligner-item--bottom {
  align-self: flex-end;
}
```

在 Github 中查看这个 demo 中完整的垂直居中组件 [源代码](https://github.com/magic-akari/solved-by-flexbox/blob/master/assets/css/components/aligner.css)
<!-- View the full [source](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/aligner.css) for the `Aligner` component used in this demo on Github. -->

<aside class="Notice"><strong>注意:</strong>&nbsp; 该 demo 的 CSS 代码需要轻微修改才能跨浏览器工作。参考 <a href="https://github.com/magic-akari/solved-by-flexbox/blob/master/assets/css/utils/compat.css">源代码的注释</a>。</aside>
<!-- <aside class="Notice"><strong>Note:</strong>&nbsp; the markup and CSS required to make this demo work cross-browser is slightly different from what's shown in the examples above, which assume a fully spec-compliant browser. See the <a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/utils/compat.css">comments in the source</a> for more details.</aside> -->
