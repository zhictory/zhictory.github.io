---
title: "分享到朋友圈"
category: "mixin"
---

方法：
1. 获取页面第一张不小于 300x300 的图片 `<div style="display:none"><img src="/assets/favicon.jpg" alt=""></div>`
1. 获取 title `<title>Randolf's Blog</title>`

测试发现：
1. 第 1 点在更换图片时，是有缓存影响的。
1. 从外部浏览器分享到微信时，获取的是第一张图片，但是从微信内置浏览器分享到微信，获取的图片为空。

参考：
> [分享网页到微信朋友圈，怎样才能带缩略图？](https://www.zhihu.com/question/21668601)