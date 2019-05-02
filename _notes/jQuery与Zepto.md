---
title: "jQuery 与 Zepto"
---

> Zepto 的设计目的是提供与 jQuery 兼容的 API，但并不是 100% 覆盖 jQuery API。Zepto 设计的目的是提供一个 5-10k 的通用库、下载并快速执行、有一套大家熟悉且稳定的 API， 所以你能把你可以把主要的精力放到应用开发上。

1. Zepto 是 jQuery 的子集。
1. Zepto 针对移动端去除了大量 jQuery 的兼容代码。
1. Zepto 不支持 IE。
1. width() 与 height()的区别：zepto由盒模型（box-sizing）决定，用.width()返回赋值的width，用.css('width')返回border等的结果；jquery会忽略盒模型，始终返回内容区域的宽/高（不包含padding、border）。
1. offset() 的区别：Zepto 返回 { top, left, width, height }；jQuery 返回 { width, height }。Zepto 无法获取隐藏元素宽高，jquery可以。
1. Zepto 中没有为原型定义 extend 方法而 jQuery 有。

参考：
> [zepto和jquery的区别?](https://www.zhihu.com/question/25379207)