---
title: "自适应方案"
category: "mixin"
---

这里的自适应是指 PC 端和移动端共用一套代码，页面随着屏幕的缩放展示相应的效果。

方案：[自适应网页设计（Responsive Web Design）](http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html)

注意：
1. document.documentElement.clientWidth 与 rem 所指的宽度不一样，后者使用 width 作为媒体查询条件，是包含滚动条在内的。
1. rem 是兼容 IE9 以上的单位。
1. 移动端点击会触发 :hover 伪类，且一直处于 hover 的状态，点击其它地方才会取消 hover。


