---
title: "浏览器渲染机制"
---

下图展示了浏览器渲染页面的过程：

![]({{ site.baseurl }}/assets/img/render.png)

***

浏览器如何使用我们的 HTML、CSS 和 JavaScript 在屏幕上渲染像素：

> 1. Process HTML markup and build the DOM tree.
> 1. Process CSS markup and build the CSSOM tree.
> 1. Combine the DOM and CSSOM into a render tree.
> 1. Run layout on the render tree to compute geometry of each node.
> 1. Paint the individual nodes to the screen.

翻译：

> 1. 处理 HTML 标记并构建 DOM 树
> 1. 处理 CSS 并构建 CSSOM 树
> 1. 将 DOM 和 CSSOM 合并成一个渲染树
> 1. 根据渲染树来布局，以计算每个节点的几何信息
> 1. 将各个节点绘制到屏幕上

***

渲染树构建、布局及绘制：https://developers.google.cn/web/fundamentals/performance/critical-rendering-path/render-tree-construction

在理解上文的基础上再理解 Web 图片资源的加载与渲染时机：https://juejin.im/entry/5a1df059f265da430b7afc55

参考：
> [How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)
