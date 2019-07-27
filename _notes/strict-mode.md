---
title: "严格模式"
category: "javascript"
---

ES5 引入了严格模式（strict mode）的概念。严格模式是为 JavaScript 定义了一种不同的解析与执行模型。

在严格模式下，ES3 中的一些不确定的行为将得到处理，而且对某些不安全的操作也会抛出错误。

要在整个脚本中启用严格模式，可以在顶部添加 `"use strict";`：

```javascript
"use strict";
// code
```

在 script 标签下也可以：

```html
<script>
  "use strict";
  // code

</script>
```

要在指定函数中启用严格模式，可以在函数内部的上方添加 `"use strict";`：

```javascript
function doSomething() {
  "use strict";
  // code
}
```

`"use strict";` 是一个编译指示（pragma），用于告诉支持的 JavaScript 引擎切换到严格模式。这是为不破坏 ES3 语法而特意选定的语法。

使用严格模式可以提高安全性，提高编译器效率，增加运行速度，但是加不加严格模式 JavaScript 的执行结果会有很大不同，所以要注意区别。支持严格模式的浏览器包括 IE10+ 和其它主流浏览器。

下面举一些严格模式下的例子：

1. 不允许使用未声明的变量
1. 不允许删除变量、对象、函数
1. 不允许变量重名
   ```javascript
   "use strict";
   function x(p1, p1) {};
   ```
1. 不允许对只读属性赋值
1. 不允许删除一个不允许删除的属性
   ```javascript
   "use strict";
   delete Object.prototype;
   ```
1. 不允许使用八进制
   ```javascript
   "use strict";
   var x = 010;
   ```
1. 在作用域 eval() 创建的变量不能被调用，如：
   ```javascript
   "use strict";
   eval("var x = 1;");
   alert(x);
   ```
1. 不允许非箭头函数的 this 指向 window 对象。：
   ```javascript
   "use strict";
   function f() {
     console.log(this);
   }
   f(); // undefined
   ```
1. 不允许使用保留关键字作为变量

参考：

> 《JavaScript 高级程序设计第三版》  
> [JavaScript 严格模式(use strict)](http://www.runoob.com/js/js-strict.html)  
