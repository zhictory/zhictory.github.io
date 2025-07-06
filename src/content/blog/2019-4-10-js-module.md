---
title: 模块化编程
description: "模块化编程..."
date: 2019-04-10
tags: ["javascript"]
---

命名冲突和文件依赖复杂，是前端开发过程中的两个经典问题。解决方式就是模块化编程。

比如 [Sea.js][1]，一个文件就是一个模块，通过 exports 暴露模块，再通过 require 引入模块。这意味着不需要命名空间了，可以让模块依赖内置。开发者只需关心当前模块的依赖，其他事情 Sea.js 都会自动处理好。对模块开发者来说，这是一种很好的关注度分离。

模块化编程的优点是提高可维护性。

## 业界遵循的规范

1. Node.js 遵循 CommonJs 规范。
1. Sea.js 遵循 CMD 规范
1. require.js 遵循 AMD 规范。

## CommonJs、AMD、CMD、UMD 的区别

1. AMD 全称 Asynchronous Module Definition，CMD 全称 Common Module Definition，UMD 全称 Universal Module Definition。
1. CommonJs 是同步的，主要用在服务器端，因为模块都是放在服务器，读取速度不成问题。
1. AMD、CMD 是异步的，主要用在浏览器端，因为从服务器加载模块需要时间，所以采用异步。
1. AMD 输出模块兼容 CommonJs 。
1. 在编写模块时，AMD 的形式是依赖前置（默认）和依赖就近，CMD 的形式是依赖就近。
1. UMD 是 AMD 与 CommonJs 的结合。

## 四种规范的书写例子

CommonJs：
```javascript
// hello.js
var bye = require('./bye.js');
var a = 1;
function b() {
  console.log(a);
}
module.exports = {
  b: b;
};
exports.bye = bye;
```

AMD：
```javascript
define(['a', 'c'], function(a, c) {
    // ['a', 'c'] 是模块依赖前置
    a();
    b();

    var b = 1;
    // 输出模块有三种或者不输出
    // 1 直接 return
    return b;
    // 2 兼容 CommonJs
    module.exports = {
        a: a;
    };
    // 3 兼容 CommonJs
    exports.b = require('./hello.js').b;
});
```

CMD：
```javascript
define(function(require, exports, module) {
    var a = require('./hello.js'); // 模块依赖就近
    var b = require('./bye.js'); // 模块依赖就近
    a();
    b();
    // 输出模块有三种或者不输出
    // 1 直接 return
    return a;
    // 2 兼容 CommonJs
    module.exports = {
        a: a;
    };
    // 3 兼容 CommonJs
    exports.b = b;
})
```

UMD：
```javascript
(function(window, factory) {
    if (typeof exports === 'object') {
        // CommonJs
        module.exports = factory();
    } else if (typeof define === 'function' && defind.amd) {
        // AMD
        defind(factory);
    } else {
        // None
        window.eventUtil = factory();
    }
})(this, function() {
    // ...
})
```

## ES6 Module

最后说一下 ES6 Module，它应该是未来模块化的趋势，现在笔者在写代码也都是用 ES6 模块化语法，再用构建工具编译。

> ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。  

> ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。  
> CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。

上面提到运行时加载和编译时加载，ES6 Module 属于后者，即无需加载整个模块后再读取方法，而是在编译时就能指定方法。

ES6 Module 还有个特点是，不仅可以在 JavaScript 文件，也可以在浏览器里使用 Module。

在 JavaScript 使用：
```javascript
// 导出
export function doStuff() {}
// 引入
import "doStuff";
```

在浏览器里使用：
```
<script type="module" src="./main.js"></script>
// 或
<script type="module">
  import './main.js';
</script>
```

目前支持 ES6 Module 的浏览器：
- Safari 10.1+
- Chrome 61+
- Firefox 54 需要设置 dom.moduleScripts.enabled
- Edge 16+

使用 ES6 Module 需要注意的规范：
1. 注意引用的路径，不支持 main.js，支持 /main.js，./main.js，../main.js，**/main.js
1. 使用 nomodule 属性向后兼容
1. Modules 默认使用 Defer，即慢于同步的请求，但先于显式 Defer 的请求
1. 引用或内联的 Modules 都支持 Async
1. 多次引用同一个 Module，只执行一次
1. 通常需要 CORS，即需要 `Access-Control-Allow-Origin: *`
1. 发送请求默认不包括证书
1. Modules 需要设置可用的 MIME 类型，否则不会执行

最后再贴上一个优秀的 slides，方便读者理解模块化的来龙去脉：[JavaScript 模块化七日谈][2]

参考：
> [Javascript模块化编程（一）：模块的写法](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)  
> [Javascript模块化编程（二）：AMD规范](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)  
> [Javascript模块化编程（三）：require.js的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)  
> [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/module)  
> [关于 CommonJS AMD CMD UMD](https://my.oschina.net/felumanman/blog/263330?p=1)  
> [SeaJS 和 RequireJS 的异同](https://lifesinger.wordpress.com/2011/05/17/the-difference-between-seajs-and-requirejs/)  
> [AMD 和 CMD 的区别有哪些？](https://www.zhihu.com/question/20351507)  
> [ECMAScript modules in browsers](https://jakearchibald.com/2017/es-modules-in-browsers/)  

  [1]: https://seajs.github.io/seajs/docs/
  [2]: http://huangxuan.me/js-module-7day/