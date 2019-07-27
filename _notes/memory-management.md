---
title: "内存管理"
category: "mixin"
---

1. 内存管理的生命周期
   1. 分配你所需要的内存
   1. 使用分配到的内存（读、写）
   1. 不需要时将其释放\归还
1. 什么是内存泄漏？
   1. 不再用到的内存没有及时释放，就叫做内存泄漏。
   1. 不及时释放不再用到的内存的话，内存占用越来越高，影响系统性能甚至导致崩溃。
1. 释放内存分为手动释放和自动释放。
   1. 手动释放：比如 C 语言，用 malloc 申请内存，用 free 释放内存，程序员进行内存管理。
   1. 自动释放：大多数语言提供自动内存管理，也叫做“垃圾回收机制（GC）”。
1. 垃圾回收机制：
   1. 垃圾回收算法主要依赖于引用的概念。在内存管理的环境中，一个对象如果有访问另一个对象的权限（隐式或者显式），叫做一个对象引用另一个对象。
   1. 引用计数垃圾收集，此算法无法处理循环引用。
   1. 标记-清除算法，此算法的限制是，那些无法从根对象查询到的对象都将被清除。
   1. 从 2012 年起，所有现代浏览器都使用了标记-清除垃圾回收算法。
1. 有了 GC 后，程序员就解放了？
   1. 不一定，对于很占空间的值，如果不再用到，需要检查是否对它们还有引用，如果是就要手动解除引用。
1. 怎么识别内存泄漏？
   1. 如果连续五次垃圾回收后，内存占用一次比一次大，就有内存泄漏。
   1. Chrome 的 ~~Timeline~~ Performance 面板：如果内存占用基本平稳，说明不存在内存泄漏，反之则是内存泄漏
   1. 命令行 process.messageUsage 返回包含内存占用信息的对象：判断内存泄漏以信息里的 heapUsed 为准
1. ES6 的 WeakMap
   1. 在新建引用的时候就声明，哪些引用必须手动清除，哪些引用可以忽略不计，当其他引用消失以后，垃圾回收机制就可以释放内存。这样就能大大减轻程序员的负担，你只要清除主要引用就可以了。
   1. ES6 考虑到了这一点，推出了两种新的数据结构：WeakSet 和 WeakMap。它们对于值的引用都是不计入垃圾回收机制的，所以名字里面才会有一个"Weak"，表示这是弱引用。

这里看一个内存泄漏的[例子]({{ site.baseurl }}/demos/funny/memory-leak/)

参考：
> [JavaScript 内存泄漏教程](http://www.ruanyifeng.com/blog/2017/04/memory-leak.html)  
> [js 晋级篇——前端内存泄漏探讨](https://www.cnblogs.com/chuaWeb/p/5196330.html)  
> [内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)  
> [JavaScript 是如何工作的：内存管理 + 如何处理 4 个常见的内存泄露](https://segmentfault.com/a/1190000011411121)  
> [Example 2: Watching the GC work.](https://developer.chrome.com/devtools/docs/demos/memory/example2)  
> [堆内存(heap)和栈内存(stack)区别](https://blog.csdn.net/qq_35923749/article/details/79517397)  
> [JavaScript 中内存使用规则--堆和栈](https://www.cnblogs.com/jiangk1214/p/6650957.html)  
> [前端基础进阶：详细图解 JavaScript 内存空间](https://juejin.im/entry/589c29a9b123db16a3c18adf)  
> [JavaScript 变量——栈内存 or 堆内存](https://blog.csdn.net/xdd19910505/article/details/41900693)
> [](https://developers.google.com/web/tools/chrome-devtools/memory-problems/?hl=zh-cn)
