---
title: "enctype 和 Content-Type"
category: "mixin"
---

enctype 是 HTML 表单的属性，Content-Type 是 HTTP Header 里的属性。

enctype 决定了要提交的内容的编码算法，Content-Type 表示要传输的内容的类型。

它们的值如下：

1. **enctype：**  
   x-www-form-urlencoded：编码所有字符（当使用非法值或空值时默认这个值）  
   multipart/form-data：不编码字符（上传文件时使用）  
   text/plain：编码部分字符（只编码空格，不编码特殊字符）  

1. **Content-Type：**  
   x-www-form-urlencoded  
   multipart/form-data  
   application/json  
   ...

enctype 决定了 Content-Type，但用异步提交时，Content-Type 可能会有更多情况，如 application/json。

下面引用一个张展示用 enctype 编码后的请求头：

![](https://johnnycode.com/assets/posts/2013-10-30-form-content-type-differences-enctype/firebug-net-tab-post-data.png)

再举个例子说明它们的影响：

使用 axios 请求 Content-Type 为 "application/json" 时，PHP 方法 \$\_POST 接受不到 POST 数据。

一般 ajax 默认使用 x-www-form-urlencoded，\$\_POST 也默认接受这种编码后的数据，但 axios 默认使用 application/json。

这里有两个方法可以让 \$\_POST 接受得到 POST 数据：

1. 修改 \$\_POST

   ```php
   <?php

   header("Access-Control-Allow-Origin:*");
   header('Access-Control-Allow-Headers:x-requested-with,content-type');

   $rws_post = $GLOBALS['HTTP_RAW_POST_DATA'];
   $mypost = json_decode($rws_post);
   $newsid = (string)$mypost->newsid;

   exit($newsid);
   >
   ```

1. axios 发送请求前修改 Content-Type

   用插件 qs 将参数格式修改成 x-www-form-urlencoded 类型，请求头就会将 Content-Type 改为 x-www-form-urlencoded，那么 \$\_POST 不用做修改：

   ```javascript
   var qs = require("qs");
   axios.post("/foo", qs.stringify({ bar: 123 }));
   ```

参考：

> [PHP content-type为"application/json"的post过来的数据$_POST接受不到的问题](http://www.cnblogs.com/CyLee/p/7644380.html)  
> [The enctype and formenctype content attributes](https://www.w3.org/TR/html5/sec-forms.html#attr-valuedef-form-enctype-application-x-www-form-urlencoded)  
> [The Differences Between HTML Form Content Types (enctype)](https://johnnycode.com/2013/10/30/the-differences-between-html-form-content-types-enctype/)  
