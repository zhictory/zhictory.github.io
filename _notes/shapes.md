---
title: "JavaScript 引擎的 Shapes"
category: "mixing"
---

在 JS 学习阶段，我们会执着于思考如下几种创建对象方式的异同：

```javascript
const a = {};
const b = new Object();
const c = new f1();
const d = Object.create(null);
```

站在 JS 引擎优化角度去考虑，JS 引擎更希望我们都通过 const a = {} 这种看似最没有难度的方式创建对象，因为可以共享 Shape。

![](https://user-gold-cdn.xitu.io/2018/6/25/1643482d21e3de57?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

> [精读《JS 引擎基础之 Shapes and Inline Caches》](https://juejin.im/post/5b30426c51882574e94f079a)
