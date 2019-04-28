---
title: BEM
---

BEM 是一种 CSS 的命名方法，解决了模块化命名的问题，它一般由块（block）、元素（element）、修饰符（modifier）组成。

```css
.block {} /* 代表了更高级别的抽象或组件 */
.block__element {} /* 代表 .block 的后代，用于形成一个完整的 .block 的整体 */
.block--modifier {} /* 代表 .block 的不同状态或不同版本 */
.block__element--modifier {} /* 代表 .block__element 的不同状态或不同版本 */
```

注意：
1. 关于后代选择器，尽可能避免，例如 c-card button => c-card_button
1. 约定名称作为命名空间：组件 c-com，质量 qa-quality
1. 跨组件的情况可以用 modifier 解决，例如 c-card__c-button => c-button--modifier
1. 差异不大的组件可以用 modifier 解决，例如 visible-card, hidden-card => c-card--visible, c-card--hidden
1. 处理状态可以用独立的状态（如 is-active）或 modifier（如 c-button--active）
1. class 数量过多时可以考虑 modifier，虽然比较长，但是表示明确，例如 card, card-black, card-visible => c-card--black c-card--visible

参考：
> [BEM —— 源自Yandex的CSS 命名方法论](https://segmentfault.com/a/1190000000391762 "BEM —— 源自Yandex的CSS 命名方法论")  
> [css命名管理混乱？不妨试试BEM](https://mp.weixin.qq.com/s?__biz=MzI3NTE2NjYxNw==&mid=2650600379&idx=1&sn=a56047a4383616d2d218ecc89edb6af0")  
> [关于BEM中常见的十个问题以及如何避免](https://www.w3cplus.com/css/battling-bem-extended-edition-common-problems-and-how-to-avoid-them.html)  