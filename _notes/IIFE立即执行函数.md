---
title: "IIFE 立即执行函数"
category: "javascript"
---

每一个函数在被调用的时候都会创建一个执行上下文，在该函数内部定义的变量和函数只能在该函数内部被使用，而正是因为这个上下文，使得我们在调用函数的时候能创建一些私有变量。例如：

```
function makeCounter() {
  // `i` is only accessible inside `makeCounter`.
  var i = 0;

  return function() {
    console.log( ++i );
  };
}

var counter = makeCounter();
counter(); // logs: 1
counter(); // logs: 2

console.log(i); // i is not defined
```

但是这种写法需要定义一个函数，而 IIFE 不需要定义函数可以达到同样效果：

```
var counter = (function(){
  // `i` is only accessible inside `makeCounter`.
  var i = 0;

  return function() {
    console.log( ++i );
  };
}());

counter(); // logs: 1
counter(); // logs: 2

console.log(i); // i is not defined
```

其它写法：

```
// 最常用的两种写法
(function(){ /* code */ }());
(function(){ /* code */ })();

// 括号和一些操作符（如 = && || 等）可以在函数表达式和函数声明上消除歧义
// 如下代码中，解析器已经知道一个是表达式了
// 但是两者交换则会报错
var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();

// 一元运算符
!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();

// new 操作符
new function(){ /* code */ }
new function(){ /* code */ }() // 带参数
```

参考：
> [详解javascript立即执行函数表达式（IIFE）](http://web.jobbole.com/82520/)