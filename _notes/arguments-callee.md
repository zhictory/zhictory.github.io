---
title: "arguments.callee"
category: "javascript"
---

callee 表示当前正在执行的函数，这个在匿名函数调用自身时很有用。

但是如果有函数名，尽量不要用 arguments.callee。

举个匿名函数使用递归的例子：

```javascript
[1,2,3,4,5].map(function (n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

通过命名函数表达式替代 callee：

```javascript
[1,2,3,4,5].map(function factorial (n) {
    return !(n > 1) ? 1 : factorial(n-1) * n;
});
```

另外使用 callee 还有个问题，递归调用会获取到一个不同的 this 值，例如：

```javascript
  let global = this;

  let sayThis = function(recursed) {
    if (!recursed) {
      console.log('This is ' + this); // This is [object global]
      return arguments.callee(true);
    }
    if (this !== global) {
      console.log('This is ' + this); // This is [object Arguments]
    } else {
      console.log('This is global');
    }
  }

  sayThis();
```

从例子中可以看出，调用 arguments.callee 后的 this 不等于首次调用 sayThis 的对象 global。所以使用 callee 可能会混淆 this，导致功能可能会出现意外的情况。

不仅不推荐用 callee，甚至不推荐用 arguments，看 [arguments 的故事](http://note.youdao.com/noteshare?id=48fe11146f401f879e4c6f0740aa9be9)了解原因。

参考：
> [arguments.callee](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)