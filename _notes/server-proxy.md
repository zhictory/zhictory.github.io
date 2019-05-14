---
title: "服务端代理解决跨域"
category: "mixing"
---

> 我们不能在浏览器端直接使用 AJAX 来跨域访问资源，但是在服务器端是没有这种跨域安全限制的。所以，我们只需要让服务器端帮我们完成“跨域访问”的工作，然后在浏览器端用 AJAX 获取服务器端“跨域访问”的结果就可以了。这就是所谓的在服务器端创建一个 XmlHttpRequest 代理，通过这个代理来访问其他域名下的资源。

同域：

![](http://www.nowamagic.net/ajax/images/crossdomain1.gif)

不同域：

![](http://www.nowamagic.net/ajax/images/crossdomain2.gif)

服务端代理：

![](http://www.nowamagic.net/ajax/images/crossdomain3.gif)

参考：

> [跨域的理解与实现](http://www.nowamagic.net/ajax/ajax_KonwHowToCrossDomain.php)
