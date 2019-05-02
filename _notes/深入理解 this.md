---
title: "深入理解 this"
---

这个笔记记录的是文章：《深入浅出 JavaScript 关键词 -- this》。

点这里看它的[思维导图](https://mubu.com/doc/1IYk_P9zGU)。

举文中四个例子理解 this：

1. 实现函数 set：

   ```javascript
   set.call({ a: 1 }, { b: 2 }, { c: 3 }); // return {a: 1, b: 2, c: 3}
   ```

   解法：

   ```javascript
   function set() {
     return Object.assign(this, ...arguments);
   }
   // 或者
   function set(...rest) {
     return Object.assign(this, ...rest);
   }
   // 或者
   function set() {
     for (let i = 0; i < arguments.length; i++) {
       for (let key in arguments[i]) {
         this[key] = arguments[i][key];
       }
     }
     return this;
   }
   ```

   this 指的是 `{ a: 1 }`，因为后面的参数不确定，所以用 ES6 的 rest parameter `...arguments`。

1. 完善函数 operate：

   ```javascript
   function operate() {
     if (arguments.length < 3) {
       throw new Error("至少要三个参数");
     }

     if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
       throw new Error("前两个参数必须是数字");
     }

     var args; // args 是一个数组存放函数，如 [sum, multiply]
     var result = 0;
     // operate start
     args = Array.prototype.slice.call(arguments, 2);

     result = args.reduce((prev, next) => {
       return prev + next(arguments[0], arguments[1]);
     }, result);

     return result;
     // operate end
   }

   function sum(a, b) {
     return a + b;
   }
   function multiply(a, b) {
     return a * b;
   }

   console.log(operate(10, 2, sum, multiply)); // 必须返回 32 -> (10 + 2) + (10 * 2) = 32
   ```

   因为 arguments 是类数组而非数组，所以用 `Array.prototype.slice.call(arguments, 2)` 先转化为数组，将 argument 对象设置为方法的 this，以此来将传进来参数加在一起。

1. use strict 模式下 this 不能指向全局对象 window：

   ```javascript
   (function() {
     this.a = 1;
     (function() {
       "use strict";
       console.log(this.a);
     })();
   })();
   ```

   严格模式下会报错：`Uncaught TypeError: Cannot read property 'a' of undefined`，可修改为：

   ```javascript
   (function() {
     this.a = 1;
     (function() {
       "use strict";
       console.log(this.a);
     }.call(this));
   })();
   ```

1. 箭头函数的 this：

   ```javascript
   var p = { a: 1 };

   function f() {
     return this;
   }
   p.f = f;
   p.f(); // {a: 1, f: f}

   var f = () => {
     return this;
   };
   p.f = f;
   p.f(); // window
   ```

   箭头函数从包含它的执行上下文中继承到了 this 的值，所以第二个 this 指向 window。
