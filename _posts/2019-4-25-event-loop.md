---
title: "Event Loop"
---

JavaScript 是单线程，但是 HTML5 提出新标准，允许 JavaScript 创建多个线程，子线程受主线程控制。主线程循环调用子线程，就形成了 Event Loop。由于是单线程，多个任务需要排队，JavaScript 需要主线程（负责同步任务）和任务队列（负责异步任务）。

## 主线程和任务队列

先了解一下什么是任务队列。

- 主线程  
  在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务，这也称之为同步任务。

- 任务队列  
  进入任务队列的任务，不进入主线程，只有任务队列通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行，这也称之为异步任务。

主线程和任务队列的示意图：

![](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100801.jpg)

示意图分为两部分，左边主线程和右边任务队列，主线程负责渲染页面并监听任务队列，任务队列负责监听各种事件。其中，任务队列可以放置异步任务事件和定时事件。

## Event Loop

接下来了解一下 Event Loop。

维基对 Event Loop 的定义是：

> In computer science, the **event loop**, **message dispatcher**, **message loop**, **message pump**, or **run loop** is a programming construct that waits for and dispatches events or messages in a program.

它是一种等待和分派事件的编程构造或程序中的消息，在 JavaScript 和 Nodejs 里有所不同。

JavaScript 中的 Event Loop 的定义是：

> 主线程从任务队列中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为 Event Loop（事件循环）。

其中，任务队列包含两个定时事件：setTimeout 和 setInterval。

JavaScript 中的 Event Loop 图解：

![](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png)

Nodejs 中的 Event Loop 定义是：

> 也是单线程的，但运行机制不同于浏览器环境。

其中，任务队列包含四个定时事件：setTimeout、setInterval、setImmediate 和 process.nextTick。

Nodejs 中的 Event Loop 图解：

![](https://image-static.segmentfault.com/368/292/3682929304-5aa673bf8fb10_articlex)

关于定时事件：

setImmediate 具有最高优先级，只要 poll 队列为空，代码被 setImmediate，无论是否有 timers 达到下限时间，setImmediate 的代码都先执行。

process.nextTick 可以理解成一个微任务。也就是说，它其实不属于 Event Loop 的一部分。不管在什么地方调用，他们都会在其所处的 Event Loop 最后，Event Loop 进入下一个循环的阶段前执行。

例子：

```javascript
setImmediate(function A() {
  console.log(1);
  setImmediate(function B(){console.log(2);});
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0);
```

参考：
> [JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)  
> [由 setTimeout 和 setImmediate 执行顺序的随机性窥探 Node 的事件循环机制](https://segmentfault.com/a/1190000013102056#articleHeader10)  
