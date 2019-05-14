---
title: "keydown 和 keypress"
category: "javascript"
---

1. 当按键被按下时, 发送 keydown 事件。
1. 如果该按键不是修饰键, 在 keydown 后还会发送 keypress 事件。
1. 当按键被释放时, 发送 keyup 事件。

点击[这里]({{ site.baseurl }}/demos/funny/keydown-keypress)体验一下。

注意这里的 keypress 的 which 和 keydown, keyup 的 which 有区别。

参考：
> [Keyboard​Event](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent)