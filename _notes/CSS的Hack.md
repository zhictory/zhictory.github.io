---
title: "CSS的Hack"
---

由于不同的浏览器，比如 IE6，IE7，IE8，Firefox 等，**对 CSS 解析的标准不同**，因此对于相同的 CSS 代码，可能会生成不同的页面效果，从而无法在所有浏览器中得到我们想要的效果。这时，我们就需要针对不同的浏览器去写不同的 CSS 代码，让它能够在所有浏览器中获得相同的效果。这个过程，就是 CSS hack 。也就是上面说到的： "写出只有个别浏览器或某些浏览器识别的 CSS 代码" 。

CSS hack 是因为现有浏览器对标准的解析不同，为了兼容各浏览器，所采用的一种补救方法。CSS hack 是 一种类似作弊的手段，以欺骗浏览器的方式达到兼容的目的，**是用浏览器的兼容性差异来解决浏览器的兼容性问题**。

因此，在设计之初，写 CSS hack 需要遵循以下三条原则：

- 有效： 能够通过 Web 标准的验证
- 只针对太古老的/不再开发的/已被抛弃的浏览器， 而不是目前的主流浏览器
- 代码要丑陋。让人记住这是一个不得已而为之的 Hack, 时刻记住要想办法去掉它

现在很多 hacks 已经抛弃了最初的原则。滥用 hack 会导致浏览器更新之后产生更多的兼容性问题。**因此，并不推荐使用 CSS hack 来解决兼容性问题。**

CSS hack 的实现方式

1. 利用浏览器对相同代码的解析和支持的不同实现的 hack
2. 以 Firefox 或 Webkit 特有的扩展样式实现的 hack
3. 利用 IE 对标准的支持缺陷写的 hack
4. 以 IE 特有的条件注释为基础的 hack

```css
*+selector {
    /* IE7 */
}
*selector {
    /* IE6 */
}
selector {
    _property: value; /* IE6 */
    -property: value; /* IE6 */
    *property: value; /* IE6、IE7 */
    property: value\9; /* IE6、IE7、IE8 */
}
```

参考：
> [RY8003: 各浏览器对 CSS 错误解析规则的差异及 CSS hack](http://w3help.org/zh-cn/causes/RY8003)