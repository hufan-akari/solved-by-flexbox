---
template: default.html
title: 更棒，更简洁的栅格系统
excerpt: Flexbox 满足了我们大部分对于栅格系统的需求。尺寸、对齐仅用一两个属性就能搞定。
---

现今大部分栅格系统都使用了两种布局方式中的一种：浮动 (`float`) 或者 內联块 (`inline-block`)。但是它们的初衷均不是真的用于布局 (layout)，也因此导致了诸多的问题和限制。
<!-- Most grid systems today use one of two layout methods: `float` or `inline-block`. But neither of these methods were really intended to be used for layout and as a result have pretty significant problems and limitations. -->

使用浮动 (float) 需要清除浮动，因此牵连出了一堆布局问题，最臭名昭著的是清除一个元素的浮动有时会强制它出现在一个不相关的页面部分的下边 (例如 [Bootstrap issue](https://github.com/twbs/bootstrap/issues/295#issuecomment-2282969) )。并且，使用清除浮动通常会同时使用 before 和 after 两个伪元素，导致你不能将该伪元素使用于其他用途。
<!-- Using floats requires clearing them which has a whole host of layout issues, most notoriously that clearing an element sometimes forces it below an unrelated part of the page (take this [Bootstrap issue](https://github.com/twbs/bootstrap/issues/295#issuecomment-2282969) for example). In addition, clearing floats usually requires using both before and after pseudo-elements, preventing you from using them for something else. -->

内联块布局最著名的问题是 [内联块之间空白问题](http://css-tricks.com/fighting-the-space-between-inline-block-elements/), 以及其所有 [解决方案](http://davidwalsh.name/remove-whitespace-inline-block) 都是 [奇技淫巧](https://github.com/suitcss/components-grid/blob/master/lib/grid.css#L30) 和 [恼人](https://twitter.com/thierrykoblentz/status/305152267374428160) 的。
<!-- Inline block layouts must address the problem of [white-space between inline-block items](http://css-tricks.com/fighting-the-space-between-inline-block-elements/), and all of the [solutions](http://davidwalsh.name/remove-whitespace-inline-block) to that problem are [hacky](https://github.com/suitcss/components-grid/blob/master/lib/grid.css#L30) and [annoying](https://twitter.com/thierrykoblentz/status/305152267374428160). -->

Flexbox 布局不仅结局了这些问题，还开启全新可能性的新世界的大门。
<!-- Flexbox not only eliminates these problems, it opens up an entirely new world of possibilities. -->

## Flexbox 栅格系统特性
<!-- ## Features of a Flexbox Grid System -->

栅格系统通常有数不清的尺寸选项，但是通常情况你仅仅想要一个两栏或三栏的栅格系统。既然如此，我们为什么一定要把尺寸属性 (sizing classes) 写到每一个格子 (cell) 里？
<!-- Grid systems usually come with a myriad of sizing options, but the vast majority of the time you just want two or three elements side-by-side. Given this, why should we be required to put sizing classes on every single cell? -->

下列是我对于一个理想的栅格系统的标准。幸运的是，Flexbox 布局满足了大部分特性。
<!-- Listed below are some of my criteria for an ideal grid system. Fortunately, with Flexbox we get most of these features for free. -->


- 每一行里的每一个栅格默认都是等宽等高。默认自适应。
- 为了足够灵活，能够添加尺寸属性到单独的栅格中。没有添加的，仍然简单地平分剩下的可用空间。
- 支持响应式布局，可以添加媒体查询到栅格中。
- 每一个栅格可以在垂直方向上置顶，置底，居中。
- 如果让所有栅格拥有一致的大小和对齐方式，在容器上添加属性，子元素能够继承，而不需要无意义的重复。
- 栅格能够任意的嵌套。
<!-- - By default, each grid cell is the same width and height as every other cell in the row. Basically they all size to fit by default.
- For finer control, you can add sizing classes to individual cells. Without these classes, the cells simply divide up the available space as usual.
- For responsive grids, you can add media query-specific classes to the cells.
- Individual cells can be aligned vertically to the top, bottom, or middle.
- When you want all of the cells in a grid to have the same sizing, media, or alignment values, you should be able to just add a single class to the container to avoid unnecessary repetition.
- Grids can be nested as many levels deep as needed. -->

### 基础栅格系统
<!-- ### Basic Grids -->

下面的栅格没有指定特定的宽度，它们自然的平分每一行的空间并撑满每一个行，并且高度默认都是相等的。
<!-- The grid cells below do not specify any widths, they just naturally space themselves equally and expand to fit the entire row. They're also equal height by default. -->

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">1/2</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/2</div>
  </div>
</div>

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">1/3</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/3</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/3</div>
  </div>
</div>

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">1/4</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/4</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/4</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">1/4</div>
  </div>
</div>

<div class="Grid Grid--gutters Grid--flexCells">
  <div class="Grid-cell">
    <div class="Demo">
      高度撑满，即使内容没有填满空间。
    </div>
  </div>

  <div class="Grid-cell">
    <div class="Demo">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit ultricies neque.
    </div>
  </div>
</div>

### 独立的尺寸
<!-- ### Individual Sizing -->

当你的需求不是等宽栅格的时候，可以添加尺寸属性到特定的栅格中。没有尺寸属性的栅格将简单地继续平分剩下的可用空间。
<!-- When equal widths aren't what you want, you can add sizing classes to individual cells. Cells without sizing classes simply divide up the remaining space as normal. -->

下边加了 "auto" 标签的栅格没有指定任何尺寸属性。
<!-- The cells below labeled "auto" do not have sizing classes specified. -->

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell u-1of2">
    <div class="Demo">1/2</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">auto</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">auto</div>
  </div>
</div>

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">auto</div>
  </div>
  <div class="Grid-cell u-1of3">
    <div class="Demo">1/3</div>
  </div>
</div>

<div class="Grid Grid--gutters u-textCenter">
  <div class="Grid-cell u-1of4">
    <div class="Demo">1/4</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">auto</div>
  </div>
  <div class="Grid-cell u-1of3">
    <div class="Demo">1/3</div>
  </div>
</div>

### 响应式
<!-- ### Responsive -->

响应式栅格系统通过添加媒体查询到栅格元素或栅格容器来实现。当满足媒体查询的条件时，栅格系统就能自动调整。
<!-- Responsive Grids work by adding media classes to the Grid cells or containers. When those media values are met, the grids automatically adjust accordingly. -->

下边的这些栅格应在低于 `48em` 时撑满一行，调整你的浏览器来查看效果。
<!-- The cells below should be full width by default and scaled to fit above `48em`. Resize your browser to see them in action. -->

<div class="Grid Grid--gutters Grid--full large-Grid--fit u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">Full / Halves</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">Full / Halves</div>
  </div>
</div>
<div class="Grid Grid--gutters Grid--full large-Grid--fit u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">Full / Thirds</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">Full / Thirds</div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">Full / Thirds</div>
  </div>
</div>

### 栅格嵌套
<!-- ### Grid-ception -->

栅格可以无限嵌套于另一个栅格中。
<!-- Grid components are infinitely nestable inside of other grid components. -->

<div class="Grid Grid--gutters Grid--flexCells u-textCenter">
  <div class="Grid-cell">
    <div class="Demo">
      <div class="Grid Grid--gutters u-textCenter">
        <div class="Grid-cell u-1of3">
          <div class="Demo">1/3</div>
        </div>
        <div class="Grid-cell">
          <div class="Demo">
            <div class="Grid Grid--gutters u-textCenter">
              <div class="Grid-cell">
                <div class="Demo">1/2</div>
              </div>
              <div class="Grid-cell">
                <div class="Demo">1/2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="Grid-cell u-1of3">
    <div class="Demo">1/3</div>
  </div>
</div>

## 对齐特性
<!-- ## Alignment Features -->

### 置顶对齐栅格
<!-- ### Top-aligned Grid Cells -->

<div class="Grid Grid--gutters Grid--top">
  <div class="Grid-cell">
    <div class="Demo">
      我应该置顶对齐。
    </div>
  </div>
  <div class="Grid-cell u-1of2">
    <div class="Demo">
      Pellentesque sagittis vel erat ac laoreet. Phasellus ac aliquet enim, eu aliquet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar porta leo, eu ultricies nunc sollicitudin vitae. Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh.
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">
      我应该置顶对齐。
    </div>
  </div>
</div>

### 置底对齐栅格
<!-- ### Bottom-aligned Grid Cells -->

<div class="Grid Grid--gutters Grid--bottom">
  <div class="Grid-cell">
    <div class="Demo">
      我应该置底对齐栅格。
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">
      Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in.
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">
    我应该置底对齐栅格。
    </div>
  </div>
</div>

### 垂直居中栅格
<!-- ### Vertically Centered Grid Cells -->

<div class="Grid Grid--gutters Grid--center">
  <div class="Grid-cell">
    <div class="Demo">
      我应该相对于我右边的格子垂直居中。
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">
      Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus. Nullam vel facilisis libero. Duis semper lobortis elit, vitae dictum erat.</div>
  </div>
</div>

### 混合垂直对齐
<!-- ### Mixed Vertical Alignment -->

<div class="Grid Grid--gutters">
  <div class="Grid-cell Grid-cell--top">
    <div class="Demo">
      我应该置顶对齐。
    </div>
  </div>
  <div class="Grid-cell">
    <div class="Demo">
      Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus.</div>
  </div>
  <div class="Grid-cell Grid-cell--center">
    <div class="Demo">
      我应该垂直居中。
    </div>
  </div>
  <div class="Grid-cell Grid-cell--bottom">
    <div class="Demo">
      我应该置底对齐。
    </div>
  </div>
</div>

## HTML 代码
<!-- ## The HTML -->

```html
<div class="Grid">
  <div class="Grid-cell">…</div>
  <div class="Grid-cell">…</div>
  <div class="Grid-cell">…</div>
</div>
```

## CSS 代码
<!-- ## The CSS -->

### 基础栅格系统
<!-- ### Basic Grid Styles -->

```css
.Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
}
```

### 栅格系统修饰属性
<!-- ### Grid Style Modifiers -->

```css
/* With gutters */
.Grid--gutters {
  margin: -1em 0 0 -1em;
}
.Grid--gutters > .Grid-cell {
  padding: 1em 0 0 1em;
}

/* Alignment per row */
.Grid--top {
  align-items: flex-start;
}
.Grid--bottom {
  align-items: flex-end;
}
.Grid--center {
  align-items: center;
}

/* Alignment per cell */
.Grid-cell--top {
  align-self: flex-start;
}
.Grid-cell--bottom {
  align-self: flex-end;
}
.Grid-cell--center {
  align-self: center;
}
```

### 响应式修饰属性 (移动设备优先)
<!-- ### Responsive Modifiers (a mobile-first approach) -->

```css
/* Base classes for all media */
.Grid--fit > .Grid-cell {
  flex: 1;
}
.Grid--full > .Grid-cell {
  flex: 0 0 100%;
}
.Grid--1of2 > .Grid-cell {
  flex: 0 0 50%
}
.Grid--1of3 > .Grid-cell {
  flex: 0 0 33.3333%
}
.Grid--1of4 > .Grid-cell {
  flex: 0 0 25%
}

/* Small to medium screens */
@media (min-width: 24em) {
  .small-Grid--fit > .Grid-cell {
    flex: 1;
  }
  .small-Grid--full > .Grid-cell {
    flex: 0 0 100%;
  }
  .small-Grid--1of2 > .Grid-cell {
    flex: 0 0 50%
  }
  .small-Grid--1of3 > .Grid-cell {
    flex: 0 0 33.3333%
  }
  .small-Grid--1of4 > .Grid-cell {
    flex: 0 0 25%
  }
}

/* Large screens */
@media (min-width: 48em) {
  .large-Grid--fit > .Grid-cell {
    flex: 1;
  }
  .large-Grid--full > .Grid-cell {
    flex: 0 0 100%;
  }
  .large-Grid--1of2 > .Grid-cell {
    flex: 0 0 50%
  }
  .large-Grid--1of3 > .Grid-cell {
    flex: 0 0 33.3333%
  }
  .large-Grid--1of4 > .Grid-cell {
    flex: 0 0 25%
  }
}
```

在 Github 中查看这个 demo 中完整的栅格组件 [源代码](https://github.com/magic-akari/solved-by-flexbox/blob/master/assets/css/components/grid.css)
<!-- View the full [source](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/grid.css) for the `Grid` component used in this demo on Github. -->
