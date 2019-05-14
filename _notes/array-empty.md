---
title: "数组 empty 值"
category: "javascript"
---

有时会在数组中看到 empty 值，比如查看以下代码的输出：

```
let a = [0];
a[1] = undefined;
a[3] = 3;
console.log(a); // [0, undefined, empty, 3]
console.log(a[2]); // undefined
console.log(a[1] === a[2]); // true
```

其中 a[2] 是一个 empty，虽然输出的是 undefined，但是还是有区别的，比如使用 Array.map() 时 empty 不接受映射，即无法读取索引，例如：
```javascript
let arr = new Array(10).map((item, index) => index); // [empty x 10]
console.log(arr[0]); // undefined
```

想要它正常使用 map，可以改成：
```javascript
let arr = [...new Array(10)].map((item, index)=>index); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr[0]); // 0
```

另外生成 empty 项可以用另一种方式，将第一个例子改成：
```javascript
let a = [0, undefined, , 3];
```

但是不要这样定义，因为有兼容性问题，例如：
```javascript
let a = [,,]; // 有的浏览器下 a.length 为 2，有的浏览器下为 3
```

