---
title: "base64 图像特点"
category: "mixing"
---

一个图像是否要转化为 base64，应该具体问题具体分析。

但是要注意几点：

1. base64 存储在 JavaScript 或 CSS 文件中，会使文件增大
1. base64 可以减少 HTTP 请求
1. base64 可以跨域
1. base64 不能单独被缓存，除非 JavaScript 或 CSS 被缓存