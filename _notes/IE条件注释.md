---
title: "IE 条件注释"
---

条件注释是 IE5.0 以上版本所特有的一种对注释的扩展，其它浏览器不支持。

```
<!--[if lte IE 9]><script src="js/html5.js"></script><![endif]-->
```

1. 对于 `<!--[if expression]> HTML <![endif]-->`，非 IE 浏览器会当作注释内容，不显示。

1. 对于 `<![if expression]> HTML <![endif]>`，非 IE 浏览器浏览器会当作普通代码段显示。

参考：
> [BT8004: 只有 IE 支持条件注释](http://www.w3help.org/zh-cn/causes/BT8004)