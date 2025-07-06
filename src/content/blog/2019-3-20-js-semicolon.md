---
title: JavaScript 可选的分号
description: "JavaScript 可选的分号..."
date: 2019-03-20
tags: ["javascript"]
---

JavaScript 的分号是可省略的，因为 JavaScript 会自动填补分号，但只有在 JavaScript 遇到因为省略分号而无法解析的语句时，才会自动填补分号。

下面这个例子就省略了分号，但 JavaScript 引擎依然能解析，引擎就不会自动给代码加分号：

```javascript
var a
a
=
3
console.log(a); // 3
```

有两种情况 JavaScript 引擎会自动填补：

1. break、return、continue 后接换行号会填补分号。
1. ++ 和 -- 前有换行号时，前面的语句会填补分号。

例如：

```javascript
function foo1() {
  return { bar: 0 };
}
function foo2() {
  return 
  { bar: 0 };
}
foo1() // { bar: 0 }
foo2() // undefined
```

在这个例子中，如果 `foo2` 的 `return` 之后省略分号，会导致引擎无法解析，所以会自动加上。

```javascript
var x=2,y=1;
x
++
y
console.log(x); // 2
console.log(y); // 2
```

在这个例子中，如果不加分号会变成 `x++y`，这种语句引擎无法解析，所以也会自动在 `x` 之后加上分号。

建议加分号的原因：

1. 避免代码执行效果不如意。
1. 避免代码压缩有错误。
1. 可以提高性能，因为解析器不用花时间去推测哪里应该加分号。

参考：
> [JavaScript 可选的分号](https://blog.csdn.net/lvff66/article/details/72844752)
