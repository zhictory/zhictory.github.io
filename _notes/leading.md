---
permalink: /note/CSS的leading
title: "CSS的leading"
---

学 line-height 时经常提到的 leading 是什么呢？

我们可以将它翻译为行间距或者行距，[文档](http://www.w3.org/TR/CSS21/visudet.html#leading "文档")解释如下：

> Still for each glyph, determine the leading L to add, where L = 'line-height' - AD.

其中，L 是 leading，A 是 ascender，D 是 descender，AD 就是 font-size，也就是：leading = line-height - font-size。

为了更直观了解 leading，再来看看来自《[你未必知道的CSS故事：揭开leading的面纱](http://www.ituring.com.cn/article/18076)》的一张图。

![](index_files/986794c4-2397-452c-a736-6c4b9f7e60d6.png)
