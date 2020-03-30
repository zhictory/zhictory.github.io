---
title: "打印方案"
category: "mixin"
---

一般情况下，打印是直接调用 `window.print` 即可，但这样打印的是页面的全部内容，有时人们只想要打印指定的内容，这时可以借助 iframe。

[点击这里体验用 iframe 打印](/demos/funny/print)

如果用 iframe 要注意：
1. 需要把 iframe 插入到 body 中才会生成属于 iframe 的 window 和 document
1. iframe 可以设置 display 为 none，但 iframe 的子元素不要设置为 none

如果打印页面需要加样式，注意要把样式放在 iframe 里渲染。注意要用特定媒体查询设置打印页面的样式：

```css
@page { }
@media print { }
```

## 回调

有时用 iframe 打印没反应，有可能是 Chrome 使用的某些插件阻止了页面内 iframe 的打印行为，需要停用这些插件生效。

由于浏览器打印行为异常时没有回调，只能通过判断浏览器有没有触发 `afterprint` 事件来判断有没有异常，没有触发就是有异常，有触发就是能正常打印，从而来判断是否有插件阻止打印行为。

```javascript
window.addEventListener('beforeprint', () => {}));
window.addEventListener('afterprint', () => {}));
```

当然这个方法不严谨，因为有可能不是 Chrome 插件阻止了打印行为，是否使用这个方法要视情况而定。

另外，虽然关闭打印窗口后能触发回调，但无法具体到是打印还是取消。

## 分页

一般情况下，浏览器会自动分页，但也可以人为控制，在需要分页的地方设置：

```css
div {
  page-break-before: always;
  page-break-after: always;
}
```

这个方法在给过长表格分页时就很有用，但要注意的是，这两个样式只作用在块级元素上。

有人提出下面这个方案来显示页码：

```css
@page {
  @bottom-right {
    content: counter(page) " of " counter(pages);
  }
}
```

但测试后并没有生效，还是只能人为计算。

## 页头页尾

浏览器打印默认会在页头页尾打印出一些自带信息，浏览器没有提供 API 隐藏它们，但可以使用样式去掉它们。去掉之后可以用 HTML 自定义信息，包括页码、日期等。

参考：
> [Web打印探秘](https://juejin.im/post/5c90d8085188252db75694dc)