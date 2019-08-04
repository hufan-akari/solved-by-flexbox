---
template: default.html
title: 输入附加组件
excerpt: 创建全宽度，流式的输入/按钮组在 CSS 的历史中几乎不可能。有了 Flexbox 布局，一切将会变得更简单。
---

因为输入组件 CSS 的工作方式，几乎不可能在一个元素之前或之后附加另一个元素，并让它宽度自适应地占满剩余空间。

<!-- Because of the way input sizing works in CSS, it's almost impossible to append or prepend another element to it and have the input field behave fluidly and take up the remaining space. -->

当前仅有的方法，要么知道输入组件的宽度，要么使用 `display:table-cell` ，后者有着自己的问题，尤其是绝对定位在跨浏览器时遭遇的困难。

<!-- The only existing way to do this is to either know the exact width of the input, or to use something like `display:table-cell`, which has its own set of problems, most notably the difficulty with positioning anything absolutely inside of the add-on in certain browsers. -->

有了 Flexbox 布局，所有的问题都烟消云散，并且代码也极其简单。此外，输入栏和输入附加组件默认同高。

<!-- With Flexbox, all these problems go away, and the code is trivially simple. In addition, you get the input field and the input add-on to be the same height for free. -->

<div class="Grid Grid--guttersLg Grid--full med-Grid--fit">
  <div class="Grid-cell">
    <h2>前置附加组件</h2>
    <div class="InputAddOn">
      <span class="InputAddOn-item">数量</span>
      <input class="InputAddOn-field">
    </div>
    <div class="InputAddOn">
      <button class="InputAddOn-item"><span class="icon icon-search"></span></button>
      <input class="InputAddOn-field">
    </div>
  </div>
  <div class="Grid-cell">
    <h2>后置附加组件</h2>
    <div class="InputAddOn">
      <input class="InputAddOn-field">
      <button class="InputAddOn-item">走你</button>
    </div>
    <div class="InputAddOn">
      <input class="InputAddOn-field">
      <button class="InputAddOn-item"><span class="icon icon-star"></span></button>
    </div>
  </div>
</div>

## 前置附加组件和后置附加组件

<!-- ## Appended and Prepended Add-ons -->

<div class="Grid Grid--guttersLg Grid--full med-Grid--fit">
  <div class="Grid-cell">
    <div class="InputAddOn">
      <span class="InputAddOn-item"><span class="icon icon-envelope"></span></span>
      <input class="InputAddOn-field" placeholder="Example One">
      <button class="InputAddOn-item">发送</button>
    </div>
  </div>
  <div class="Grid-cell">
    <div class="InputAddOn">
      <span class="InputAddOn-item"><span class="icon icon-lock"></span></span>
      <input class="InputAddOn-field" placeholder="Example One">
      <button class="InputAddOn-item">加密</button>
    </div>
  </div>
</div>

## HTML 代码

<!-- ## The HTML -->

```html
<!-- appending -->
<div class="InputAddOn">
    <input class="InputAddOn-field" />
    <button class="InputAddOn-item">…</button>
</div>

<!-- prepending -->
<div class="InputAddOn">
    <span class="InputAddOn-item">…</span>
    <input class="InputAddOn-field" />
</div>

<!-- both -->
<div class="InputAddOn">
    <span class="InputAddOn-item">…</span>
    <input class="InputAddOn-field" />
    <button class="InputAddOn-item">…</button>
</div>
```

## CSS 代码

<!-- ## The CSS -->

```css
.InputAddOn {
    display: flex;
}

.InputAddOn-field {
    flex: 1;
    /* field styles */
}

.InputAddOn-item {
    /* item styles */
}
```

在 Github 中查看这个 demo 中完整的输入附加组件 [源代码](https://github.com/magic-akari/solved-by-flexbox/blob/master/assets/css/components/input-add-on.css)

<!-- View the full [source](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/input-add-on.css) for the `InputAddOn` component used in this demo on Github. -->
