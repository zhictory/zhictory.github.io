---
title: "PC 跳转移动端"
category: "javascript"
---

- navigator.userAgent

  ```javascript
  navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))
  location.href = url;
  ```

- navigator.platform

  ```javascript
  var thisOS = navigator.platform;
  var os = new Array(
    "iPhone",
    "iPod",
    "iPad",
    "android",
    "Nokia",
    "SymbianOS",
    "Symbian",
    "Windows Phone",
    "Phone",
    "Linux armv71",
    "MAUI",
    "UNTRUSTED/1.0",
    "Windows CE",
    "BlackBerry",
    "IEMobile"
  );
  for (var i = 0; i < os.length; i++) {
    if (thisOS.match(os[i])) location.href = url;
  }
  ```

- screen.width

  ```javascript
  if (screen.width <= "1024") location.href = url;
  ```

- php

  ```php
  $agent = $_SERVER['HTTP_USER_AGENT'];
  if(strpos($agent,"comFront")  strpos($agent,"iPhone")  strpos($agent,"MIDP-2.0")  strpos($agent,"Opera Mini")  strpos($agent,"UCWEB")  strpos($agent,"Android")  strpos($agent,"Windows CE")  strpos($agent,"SymbianOS"))
  header("Location:http://chinahoby");
  ```

参考：
> [手机访问pc网站自动跳转手机端网站PHP代码](http://www.cnblogs.com/zgzy/p/4054624.html)  
> [如何自动从pc端跳转至移动端](http://jingyan.baidu.com/article/6dad5075f00867a123e36ef7.html)  
> [前端js判断访问站点设备(手机还是PC)实现自动跳转代码](http://www.thinkphp.cn/topic/23703.html)  
