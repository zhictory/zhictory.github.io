---
title: "异步加载 script"
category: "javascript"
---

默认情况 JavaScript 是同步加载的，JavaScript 的加载时阻塞的，后面的元素要等待 JavaScript 加载完毕后才能进行再加载。

1. defer，页面加载完就会执行，只支持 IE

   ```html
   <script type="text/javascript" defer="defer">
     alert(document.getElementById("p1").firstChild.nodeValue);
   </script>
   ```

1. async，一旦脚本可用就会执行

   ```html
   <script type="text/javascript" src="demo.js" async="async"></script>
   ```

1. 操作 DOM，使用 script 元素

   ```javascript
   function loadScript(url, callback) {
     const script = document.createElement("script");
     script.type = `text/javascript`;
     if (script.readyState) {
       // IE
       script.onreadystatechange = function() {
         if (
           script.readyState === "loaded" ||
           script.readyState === "complete"
         ) {
           script.onreadystatechange = null;
           callback();
         }
       };
     } else {
       // 其它
       script.onload = function() {
         callback();
       };
     }
     script.src = url;
     document.body.appendChild(script);
   }
   ```

参考：

> [js 异步加载的三种解决方案](https://www.jb51.net/article/34491.htm)  
> [Javascript 是单线程的深入分析](https://www.cnblogs.com/Mainz/p/3552717.html)
