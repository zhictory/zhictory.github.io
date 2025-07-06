---
title: 理解“JavaScript 可能会不分配内存”
description: "理解“JavaScript 可能会不分配内存”..."
date: 2019-04-11
tags: ["javascript"]
---

最近在看内存管理相关的知识，看到 MDN 的[内存管理][1]上的例子提到，JavaScript 可能决定不分配内存：

```
var s = "azerty";
var s2 = s.substr(0, 3); // s2 是一个新的字符串
// 因为字符串是不变量，
// JavaScript 可能决定不分配内存，
// 只是存储了 [0-3] 的范围。

var a = ["ouais ouais", "nan nan"];
var a2 = ["generation", "nan nan"];
var a3 = a.concat(a2); 
// 新数组有四个元素，是 a 连接 a2 的结果
```

令我感到疑惑的是，为什么不用给变量 s2 分配内存？怎么理解只是存储 [0-3] 范围？

我查阅了一些资料，大概了解其中的原理。

例子中 s 和 s2 都是基本数据类型，是存放在栈内存中的，而栈内存有个特点就是数据共享。

JavaScript 首先会在栈中创建一个变量为 s 引用，然后查找栈中是否有 "azerty" 这个值，如果没有找到，就将 "azerty" 存放进来，然后将 s 指向 "azerty"。

接着创建一个变量为 s2 引用，查找栈中是否有 "aze" 这个值，因为此时栈中已经存在了 "azerty"，s2 只是指向了 azerty 的 [0-3] 的范围，也就是 s 和 s2 共享 azerty，所以例子才会说“JavaScript 可能决定不分配内存”。

基于此，JavaScript 会创建一个变量 s2，但不会再分配一个内存存放它的值 "aze"，而是让 s2 指向栈中现有的 "azerty" 的 0-3 范围。

> [JavaScript中内存使用规则--堆和栈][2]

  [1]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management
  [2]: https://www.cnblogs.com/jiangk1214/p/6650957.html