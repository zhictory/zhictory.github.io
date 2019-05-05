---
title: "事件冒泡"
---

这还得从事件流说起，事件流描述的是从页面中接收事件的顺序，事件冒泡是 IE 的事件流（Netscape 用的是事件捕获流）。

事件冒泡指的是，事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点。

所有现代浏览器都支持事件冒泡，但是 IE5.5 及更早版本会跳过 html 根元素，其他则一直冒泡到 window 对象。

事件冒泡的好处就是可以集中处理事件。

例子：

```html
<style>
  #outSide {
    width: 100px;
    height: 100px;
    background: #000;
    padding: 50px;
  }
  #inSide {
    width: 100px;
    height: 100px;
    background: #ccc;
  }
</style>

<div id="outSide">
  <div id="inSide"></div>
</div>

<script>
  let eventHandle = (e = window.event, obj = e.target || e.srcElement) => {
    e.stopPropagation();
    alert(obj.id);
  };
  document
    .getElementById("inSide")
    .addEventListener("click", eventHandle, false);
  document
    .getElementById("outSide")
    .addEventListener("click", eventHandle, false);
</script>
```

上面例子中，如果加上 `e.stopPropagation()`，点击 inSide 执行完 click 事件就会阻止事件继续冒泡，否则从 inSide 到 outSide 的 click 事件都执行一次。

集中处理事件体现在：如果不监听 inSide，只监听 outSide，点击 inSide 时，e.target 还是指 inSide，不会因为没监听它就不指向它，这就是事件冒泡决定的（由具体到不具体）。

参考：
> [addEventListener，jq.on以及事件委托](https://blog.csdn.net/xixi880928/article/details/69230076)
