---
title: "V8 的 Hidden Class"
category: "mixing"
---

```
function Class(val) {
  this.prop = val;
}

var a = new Class('foo');
var b = new Class('bar');

b.prop2 = 'baz'; // 另外加的属性 prop2
```

Class 的私有属性应该在一开始就设置好，不要在使用过程中再添加，否则会降低 V8 执行 JavaScript 的性能。因为另外加的属性会使用 V8 重新设置 Hidden Classes

参考：
> [V8 Hidden class](https://engineering.linecorp.com/en/blog/v8-hidden-class/)  
> ~~https://segmentfault.com/l/1500000008618265/play~~  