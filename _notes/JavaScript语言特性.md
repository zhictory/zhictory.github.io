---
title: "JavaScript 语言特性"
---

这个笔记是翻译 stackoverflow 上一个问题 [What should every JavaScript programmer know?](https://stackoverflow.com/questions/2628672/what-should-every-javascript-programmer-know#) 的一个高分答案。

原文：

Not jQuery. Not YUI. Not (etc. etc.) 

Frameworks may be useful, but they are often hiding the sometimes-ugly details of how JavaScript and the DOM actually work from you. If your aim is to be able to say “I know JavaScript”, then investing a lot of time in a framework is opposed to that. 

Here are some JavaScript language features that you should know to grok what it's doing and not get caught out, but which aren't immediately obvious to many people: 

1. That object.prop and object['prop'] are the same thing (so can you please stop using eval, thanks); that object properties are always strings (even for arrays); what for...in is for (and what it isn't). 
2. Property-sniffing; what undefined is (and why it smells); why the seemingly-little-known in operator is beneficial and different from typeof/undefined checks; hasOwnProperty; the purpose of delete. 
3. That the Number datatype is really a float; the language-independent difficulties of using floats; avoiding the parseInt octal trap. 
4. Nested function scoping; the necessity of using var in the scope you want to avoid accidental globals; how scopes can be used for closures; the closure loop problem. 
5. How global variables and window properties collide; how global variables and document elements shouldn't collide but do in IE; the necessity of using var in global scope too to avoid this. 
6. How the function statement acts to ‘hoist’ a definition before code preceding it; the difference between function statements and function expressions; why named function expressions should not be used. 
7. How constructor functions, the prototype property and the new operator really work; methods of exploiting this to create the normal class/subclass/instance system you actually wanted; when you might want to use closure-based objects instead of prototyping. (Most JS tutorial material is absolutely terrible on this; it took me years to get it straight in my head.) 
8. How this is determined at call-time, not bound; how consequently method-passing doesn't work like you expect from other languages; how closures or Function#bind may be used to get around that. 
9. Other ECMAScript Fifth Edition features like indexOf, forEach and the functional-programming methods on Array; how to fix up older browsers to ensure you can use them; using them with inline anonymous function expressions to get compact, readable code. 
10. The flow of control between the browser and user code; synchronous and asynchronous execution; events that fire inside the flow of control (eg. focus) vs. events and timeouts that occur when control returns; how calling a supposedly-synchronous builtin like alert can end up causing potentially-disastrous re-entrancy. 
11. How cross-window scripting affects instanceof; how cross-window scripting affects the control flow across different documents; how postMessage will hopefully fix this. 

See this answer regarding the last two items. 

Most of all, you should be viewing JavaScript critically, acknowledging that it is for historical reasons an imperfect language (even more than most languages), and avoiding its worst troublespots. Crockford's work on this front is definitely worth reading (although I don't 100% agree with him on which the “Good Parts” are). 

翻译如下：

这里不说 jQuery、YUI 等等。

框架确实很有用，但是它们经常掩盖了关于 JavaScript 和 DOM 如何工作的细节。如果你的目标是想说“我懂 JavaScript”，那么花大量时间去调查框架却是与目标相反的做法。

这里有一些你应该知道的 JavaScript 语言特性，但是这些特性又不是大多数人一下就明了的。

1. `object.prop` 和 `object['prop']` 是同样的东西；对象的属性一般是字符串（数组的属性也是）；`for...in` 循环的是什么。
2. 属性嗅探；`undefined` 是什么；为什么鲜为人知的操作符是好的且不同于类型检查；`hasOwnProperty` 是什么；`delete` 的目的是什么。
3. `Number` 数据类型实际上是一个浮点数；使用浮点数的难点是在于语言依赖；避免 `parseInt` 的八进制陷阱。
4. 嵌套函数的作用域；在你想避免意外的全局变量的作用域里使用 `var` 的必要性；闭包里怎么用作用域；闭包循环问题。
5. 全局变量和全局属性怎么冲突；全局变量和文档元素在 IE 里怎么冲突；在全局作用域里使用 `var` 来避免这些。
6. 函数声明怎么提升到代码之前；函数声明和函数表达式之间的区别；为什么不能给函数表达式命名。
7. 构造函数，原型属性和new 操作符是怎么工作的；开发此方法以创建您真正想要的普通的 class/subclass/instance system。
8. 在调用时确实，而不是绑定；方法传递不能像你预期的其他语言那样工作；闭包和函数如何绕过绑定。
9. 其它 ES5 特性如数组的 `indexOf`、`forEach` 和函数式编程；如何兼容旧版浏览器；使用内联匿名函数表达式来达到代码兼容可读。
10. 浏览器和用户代码之间的控制流；同步和异步执行；控制流程中发生的事件和控制返回时发生的事件和超时之间的对比；如何调用同步内建如 `alert` 最终会导致潜在的灾难性重样进入。
11. 跨窗口脚本如何影响 `instanceof`；跨窗口脚本如何影响不同文档的控制流；`postMessage` 将如何解决这个问题。

看到最后两个问题的答案。

最重要的是，你应该辩证地看待 JavaScript，要知道由于历史原因，它是一门不完美的语言（更甚于其它语言），并且要避免最糟的情况发生。Crockford 为前端所贡献的东西值得学习的（虽然我不并不是 100% 同意他关于“Good Parts”的看法）。