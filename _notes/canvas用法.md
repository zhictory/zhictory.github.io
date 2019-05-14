---
title: "canvas 用法"
category: "javascript"
---

canvas 是一个需要 JavaScript 配合的 HTML5 标签。

1. 在支持 HTML5 的浏览器下（即除了 IE6、7、8）：

    HTML：

    ```html
    <canvas id="drawCanvas"></canvas>
    ```

    JavaScript：

    ```javascript
    var canvas = document.getElementById("drawCanvas"); // 获得 canvas 对象
    var context = canvas.getContext("2d"); // 获得 canvas 的 2d 对象
    context.moveTo(0, 0); // 起点
    context.lineTo(50, 50); // 终点
    context.stroke(); // 开始划
    ```

    CSS：

    canvas 可通过属性 width 和 height 设置宽高，也可以通过 css 设置，但是效果会区别。如果不设置，canvas 有默认的 width 和 height。

    ```html
    <canvas id="drawCanvas" width="100px" height="100px"></canvas>
    ```

1. 在不支持 HTML5 的浏览器下（即 IE6、7、8）

    目标是使浏览器支持 HTML5 标签并使得 canvas 的功能生效，然后就可以正常使用 canvas 了。
    
    HTML：
    
    ```html
    <!--[if lt IE 9]>
    <script>
        document.createElement("canvas"); // 使得 HTML5 标签生效
    </script>
    <![endif]-->
    <script src="../js/excanvas_r3/excanvas.compiled.js"></script> // 此处为HTML，引入 excanvas.compiled.js 使得 canvas 的功能（如 getContext）生效

    <canvas id="drawCanvas"></canvas>
    ```
    
    JavaScript：
    
    ```javascript
    var canvas = document.getElementById("drawCanvas"); // 获得 canvas 对象
    canvas.style.width = "100px"; // 行内 width
    canvas.style.height = "100px"; // 行内 height
    var context = canvas.getContext("2d"); // 获得 canvas 的 2d 对象
    context.moveTo(0, 0); // 起点
    context.lineTo(50, 50); // 终点
    context.stroke(); // 开始画
    ```
    
    CSS：
    
    这里的 CSS 已经通过 JS 添加了。如果不设置，canvas 有默认的 width 和 height。
    
    ```javascript
    canvas.style.width = "100px";
    canvas.style.height = "100px";
    ```