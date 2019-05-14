---
title: "CORS"
category: "mixing"
---

CORS，跨域资源共享，全称是 Cross-Origin Resource Sharing。

> 是一份浏览器技术的规范，提供了 Web 服务从不同网域传来沙盒脚本的方法，以避开浏览器的同源策略，是 JSONP 模式的现代版。

原理：

1. 当使用 XMLHttpRequest 发送请求时，如果浏览器发现该请求不符合同源策略，会给该请求加一个请求头：Origin；
1. 后台进行一系列处理，如果确定接受请求则在返回结果中加入一个响应头：Access-Control-Allow-Origin；
1. 浏览器判断该响应头中是否包含 Origin 的值：
1. 如果包含浏览器则会处理响应，前端就可以拿到响应数据；
1. 如果不包含浏览器直接驳回，此时前端无法拿到响应数据。

优点：

1. 除了 GET 还支持其它 HTTP 请求。

简单实现：

```javascript
// 服务端
res.header("Access-Control-Allow-Origin", "http://xxx");
```

参考：

> [跨域之二：JSONP 和 CORS](https://www.jianshu.com/p/94946ca90194)
