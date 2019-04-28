---
title: "iframe"
---

- 概念

  HTML 内联框架元素 <iframe> 代表一个嵌套的浏览上下文，有效地将另一个 HTML 页面嵌入当前页面。在 HTML4.01 中，一个文档可能包含一个 head 和一个 body，或者一个 head 和一个 frameset，但不会同时包含 body 和 frameset。然而，<iframe> 可以在一个正常的文档 body 中使用。每一个浏览上下文有它自己的会话历史和活动文档。那些包含内嵌内容的浏览上下文叫做父级浏览上下文。顶层（top-level）浏览上下文（也就是没有父级）一般就是浏览器窗口。

- 属性

  longdesc \| name \| sandbox \| src

- 访问 iframe

  window.frames  
  window.frames[0].contentWindow  
  window.frames[0].contentDocument  

- 脚本

  脚本试图访问的框架内容必须遵守同源策略。

笔者注：

- 可同时存在的元素：

  head + frameset  
  head + body  
  head + body + iframe  

- 不可同时存在的元素：

  head + frameset + body

参考：

> [HTML 内联框架元素 iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe "HTML内联框架元素 iframe")
