---
title: "事件监听第三个参数"
category: "javascript"
---

原生的事件监听中的第三个参数 useCapture 决定了事件采用何种事件流。

当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件流。

useCapture 为 false 时采用事件冒泡，为 true 时采用事件捕获。

点击这里体验一下：[事件监听第三个参数]({{ site.baseurl }}/demos/funny/事件监听第三个参数/)

例子中 div 的父子关系是 div-1 > div-2 > div-3，当点击 div-3 时，随着 addEventListener 的第三个参数不同，执行结果会有所不同，测试如下：

1. 全为 false 时，事件流在冒泡阶段触发，即 div-3 → div-2 → div-1。
1. div-1 为 true 时，div-1 在捕获阶段触发，div-3 和 div-2 在冒泡阶段触发，所以 div-1 先于其它两个，即 div-1 → div-3 → div-2。
1. div-1 和 div-2 为 true 时，div-1 和 div-2 在捕获阶段触发，div-3 在冒泡阶段触发，即 div-1 → div-2 → div-3。

参考：
> [Event​Target​.add​Event​Listener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)