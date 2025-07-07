---
title: "Event Loop"
description: "Event Loop..."
date: 2019-04-25
category: [javascript]
---

JavaScript 是单线程，不过 HTML5 提出新标准，允许 JavaScript 创建多个子线程，子线程还是受主线程控制。

由于主线程需要监听并多次调用子线程，就形成了 Event Loop。这么多个任务需要进入主线程，自然要排队执行，所以 JavaScript 除了主线程（负责同步任务），还需要一个任务队列（负责异步任务）。

## 主线程和任务队列

我们先了解一下主线程和任务队列。

- 主线程  
  在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务，这也称之为同步任务。

- 任务队列  
  进入任务队列的任务，不进入主线程，只有任务队列通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行，这也称之为异步任务。

主线程和任务队列的示意图：

![](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100801.jpg)

示意图分为两部分，左边主线程和右边任务队列，主线程负责渲染页面并监听任务队列，任务队列负责监听各种事件等候进入主线程。其中，任务队列可以放置异步任务事件和定时事件。

## Event Loop

接下来了解一下 Event Loop。

维基对 Event Loop 的定义是：

> In computer science, the **event loop**, **message dispatcher**, **message loop**, **message pump**, or **run loop** is a programming construct that waits for and dispatches events or messages in a program.

由此可见，Event Loop 是一种等待和分派事件的编程构造或程序消息，它在浏览器和 Nodejs 里的表现有所不同。

浏览器中的 Event Loop 示意图：

![](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png)

其中，任务队列包含两个定时事件：setTimeout 和 setInterval。

Nodejs 的 Event Loop 示意图：

![](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100803.png)

下图显示 Event Loop 操作顺序：

```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

其中，任务队列包含四个定时事件：setTimeout、setInterval、setImmediate 和 process.nextTick。

1. Event Loop 里有个 poll 阶段，Node 很多 API 都是基于事件订阅完成的，这些 API 的回调应该都在 poll 阶段完成。
1. 当 poll 阶段的回调执行完，setImmediate 具有最高优先级，只要 poll 队列为空，无论是否有 timers 达到下限时间，setImmediate 的回调都先执行。
1. process.nextTick 可以理解成一个微任务。也就是说，它其实不属于 Event Loop 的一部分。不管在什么地方调用，他们都会在其所处的 Event Loop 最后，Event Loop 进入下一个循环的阶段前执行。

下面看几个例子来理解 Event Loop：

```javascript
setImmediate(function A() {
  console.log(1);
  setImmediate(function B() {
    console.log(2);
  });
});

setTimeout(function timeout() {
  console.log("TIMEOUT FIRED");
}, 0);

// 1, TIMEOUT FIRED, 2
```

这个例子中：
1. 执行宏任务代码：1 TIMEOUT FIRED（这两个顺序可能交换）
1. 遇到的新的宏任务代码并执行：2

```javascript
process.nextTick(function A() {
  console.log(1);
  process.nextTick(function B() {
    console.log(2);
  });
});

setTimeout(function timeout() {
  console.log("TIMEOUT FIRED");
}, 0);
// 1, 2, TIMEOUT FIRED
```

这个例子说明如果有多个 process.nextTick 语句（不管它们是否嵌套），将全部在当前"执行栈"执行：
1. 先执行微任务代码：1
1. 遇到新的微任务代码并执行：2
1. 再执行剩下的宏任务代码：TIMEOUT FIRED

再来看两个稍难的例子：

```javascript
setTimeout(() => {
  console.log("timeout0");
  process.nextTick(() => {
    console.log("nextTick1");
    process.nextTick(() => {
      console.log("nextTick2");
    });
  });
  process.nextTick(() => {
    console.log("nextTick3");
  });
  console.log("sync");
  setTimeout(() => {
    console.log("timeout2");
  }, 0);
}, 0);
// timeout0, sync, nextTick1, nextTick3, nextTick2, timeout2
```

这个例子中：

1. 没有全局代码，直接执行宏任务代码：timeout0 sync
1. 接着执行微任务代码：nextTick1 nextTick3
1. 遇到一个新的微任务并执行：nextTick2
1. 最后执行剩下的宏任务代码：timeout2

```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
});

new Promise((resolve, reject) => {
  console.log(4);
  resolve(5);
}).then(data => {
  console.log(data);
});

setTimeout(() => {
  console.log(6);
});

console.log(7);

// 1, 4, 7, 5, 2, 3, 6
```

这个例子中：

1. 这个例子先执行全局代码：1 4 7
1. 然后执行微任务代码：5
1. 接着执行宏任务代码：2
1. 遇到一个新的微任务并执行：3
1. 最后执行剩下的宏任务代码：6

参考：

> [JavaScript 运行机制详解：再谈 Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)  
> [由 setTimeout 和 setImmediate 执行顺序的随机性窥探 Node 的事件循环机制](https://segmentfault.com/a/1190000013102056#articleHeader10)  
> [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/de/docs/guides/event-loop-timers-and-nexttick/)  
> [Event loops](https://www.w3.org/TR/html5/webappapis.html#event-loops)  
> [带你彻底弄懂 Event Loop](https://juejin.im/post/5b8f76675188255c7c653811)
