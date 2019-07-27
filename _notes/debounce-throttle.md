---
title: "防抖和节流"
category: "javascript"
---

防抖是 debounce，节流是 throttle。

throttle 和 debounce 是解决请求和响应速度不匹配问题的两个方案。

两者都是在规定时间内多次触发只触发一次，但区别是防抖多次触发会重新计算时间，而节流是按周期触发。

点击这里体验一下：[防抖和节流]({{ site.baseurl }}/demos/funny/%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81/)

防抖的简单实现：

```javascript
function debounce(method, context) {
  clearTimeout(method.tId);
  method.tId = setTimeout(function() {
    method.call(context);
  }, 1000);
}
```

节流的简单实现：

```javascript
function throttle(method, context) {
  var now = Date.now();
  var remain = now - method.previous;
  if (remain >= 1000) {
    method.call(context);
    method.previous = now;
  }
}
```

场景：

- 游戏射击，keydown 事件
- 文本输入、自动完成，keyup 事件
- 鼠标移动，mousemove 事件
- DOM 元素动态定位，window 对象的 resize 和 scroll 事件

参考：
> [underscore 函数节流的实现](https://github.com/hanzichi/underscore-analysis/issues/22)  
> [underscore 函数去抖的实现](https://github.com/lessfish/underscore-analysis/issues/21)  