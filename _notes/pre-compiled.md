---
title: "预编译"
category: "javascript"
---

脚本执行时 JavaScript 引擎做了几件事：

1. 语法分析
1. 预编译
1. 解释执行

预编译简单理解就是在内存中开辟空间存放变量和函数。

大部分预编译发生在函数执行前。

例如有脚本如下：

```javascript
<script>
    var a = 1; // 变量声明
    function b(y){ // 函数声明
        var x = 1;
    };
    var c = function(){ // 是变量声明 
    };
    b(100);
</script>
<script>
    var d = 0;
</script>
```

执行代码前先预编译，查找全局变量声明和函数声明：

```javascript
// 伪代码
Global Ojbect = {
    // 创建全局对象同时创建了 document、navigator、screen 等属性，此处省略
    a: undefined,
    c: undefined，
    b: function(y){
        var x = 1;
    }
}
```

然后执行代码，Global Object 得到了初始化：

```javascript
// 伪代码
Global Ojbect = {
    // 变量随着执行流得到初始化
    a: 1,
    c: function(){
        //...
    },
    b: function(y){
        var x = 1;
    }
}
```

接着执行 `b(100)` 时，重复预编译过程：

```javascript
// 伪代码
Active Object = {
    // 创建活动对象同时创建了 arguments 等属性，此处省略
    y: 100,
    x: undefined
}
```

然后执行函数 b 内的代码，Active Object 得到了初始化。

注意：预编译阶段发生变量声明和函数声明，没有初始化行为（赋值），匿名函数不参与预编译只有在解释执行阶段才会进行变量初始化。

参考：
> [JavaScript预编译原理分析](https://blog.csdn.net/q1056843325/article/details/52951114)