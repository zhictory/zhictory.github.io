---
title: "toLocaleString"
category: "mixin"
---

toLocaleString 是一个根据特定语言环境（中文、日文等）而实现的 API，有很多浏览器（包括移动端）在实现带参数的 toLocaleString 的时候有兼容性问题，笔者感觉在实际项目中使用这个不太靠谱。

1. Object.prototype.toLocaleString()
1. Array.prototype.toLocaleString()
1. Number.prototype.toLocaleString()
1. Date.prototype.toLocaleString()
1. TypeArray.prototype.toLocaleString()

其中，对 Number.toLocaleString() 的用法举几个例子：

```javascript
num = 111111111;
num.toLocaleString('zh', { style: 'decimal'})
// "111,111,111"
// 这种方案可以代替正则表达式的方案 

num = 0.1
num.toLocaleString('zh', { style: 'percent'})
// "10%"

num = 100
num.toLocaleString('zh', { style: 'currency', currency: 'CNY'})
// "￥100.00"
```

参考：
> [Object.prototype.toLocaleString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)
