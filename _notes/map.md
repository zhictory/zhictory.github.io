---
title: "map"
category: "javascript"
---

使用 map 处理数组时，数组元素的范围是在 callback 方法第一次调用之前就已经确定了。

在 map 执行的过程中：
1. 原数组中新增加的元素将不会被 callback 访问到。
1. 若已经存在的元素被改变或删除了，则它们的传递到 callback 的值是 map 方法遍历到它们的那一时刻的值。
1. 被删除的元素将不会被访问到。

```javascript
var arr = ['a', 'b', 'c'];
arr.map(function(value, key, array) {
  array.pop();
  console.log(arr); // ['a', 'b'], ['a']
  console.log(value); // a, b
  console.log(key); // 0, 1
});
```

例子中虽然在读取 arr[1] 时，arr[1] 已经被移除了，但由于 map 函数已经访问 arr[1]（value）并拿到值了，所以打印 value 为 2。

同理可测试新增或删除数组元素。