---
title: "重绘与重排"
---

重绘是 repaint，重排是 reflow。

重绘与重排对页面性能有影响。

***

> Repaint is expensive in terms of performance, as it requires the engine to search through all elements to determine what is visible, and what should be displayed.  
> Reflows are very expensive in terms of performance, and is one of the main causes of slow DOM scripts, especially on devices with low processing power, such as phones.

翻译如下：

重绘对性能要求高，它需要引擎搜索所有元素，决定哪些可见，哪些要展示。

重排对性能的要求非常高，是拖慢 DOM 脚本主要因素之一，尤其是在低处理能力的设备（例如手机）上。

***

> what causes a reflow?
> 1. Resizing the window
> 1. Changing the font
> 1. Adding or removing a stylesheet
> 1. Content changes, such as a user typing text in an input box
> 1. Activation of CSS pseudo classes such as :hover (in IE the activation of the pseudo class of a sibling)
> 1. Manipulating the class attribute
> 1. A script manipulating the DOM
> 1. Calculating offsetWidth and offsetHeight
> 1. Setting a property of the style attribute

翻译如下：

什么导致重排？
1. 缩放窗口
1. 改变字体
1. 增删样式
1. 改变内容，如在一个输入框输入文本
1. 触发伪类，如 :hover（在 IE 里是触发相邻元素的伪类）
1. 操作 class 属性
1. 脚本操作 DOM
1. 计算 offsetWidth 和 offsetHeight
1. 设置 style 属性

***

> How to avoid reflows or at least minimize their impact on performance?
> 1. Change classes on the element you wish to style (as low in the dom tree as possible)
> 1. Avoid setting multiple inline styles
> 1. Apply animations to elements that are position fixed or absolute
> 1. Trade smoothness for speed
> 1. Avoid tables for layout
> 1. Avoid JavaScript expressions in the CSS (IE only)

翻译如下：

如何避免重绘或者说尽可能减少重绘对性能的影响？
1. 用类名来修改样式（减少 DOM 操作）
1. 避免设置多行内联样式
1. 将动画元素的定位设置为 fixed 和 absolute
1. 看不懂
1. 避免使用表格布局
1. 避免在 CSS 中使用 JavaScript（只有 IE）

***

> Here are some easy guidelines to help you minimize reflow in your web pages:
> 1. Reduce unnecessary DOM depth. Changes at one level in the DOM tree can cause changes at every level of the tree - all the way up to the root, and all the way down into the children of the modified node. This leads to more time being spent performing reflow.
> 1. Minimize CSS rules, and remove unused CSS rules.
> 1. If you make complex rendering changes such as animations, do so out of the flow. Use position-absolute or position-fixed to accomplish this.
> 1. Avoid unnecessary complex CSS selectors - descendant selectors in particular - which require more CPU power to do selector matching.

翻译如下：

这里有一些简单的指南帮助你最小化重排：
1. 减少不必要的 DOM 深度。改变某一级 DOM 会触发 DOM 树上每一级的 DOM 的改变。
1. 最小化样式，并删除未使用的样式。
1. 如果用了复杂的渲染（如 animation），请使用 absolute 或 fixed 定位来实现。
1. 避免没必要的复杂 CSS 选择器，特别是后代选择器，因为那样需要更多的 CPU 功率来匹配选择器。

参考：
> [REFLOWS & REPAINTS: CSS PERFORMANCE MAKING YOUR JAVASCRIPT SLOW?](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)  
> [Efficient JavaScript](https://dev.opera.com/articles/efficient-javascript/?page=3#reflow)  