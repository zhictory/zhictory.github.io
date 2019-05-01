---
title: "base64 图像特点"
---

一个图像是否要转化为base64，应该具体问题具体分析。

但是要注意几点：

1. base64存储在JavaScript或CSS文件中，会使文件增大
1. base64可以减少HTTP请求
1. base64可以跨域
1. base64不能单独被缓存，除非JavaScript或CSS被缓存