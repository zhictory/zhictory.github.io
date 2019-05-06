---
title: "JSONP"
---

JSONP 全称 JSON with Padding。

> 由于同源策略，一般来说位于 server1.example.com 的网页无法与 server2.example.com 的服务器沟通，而 HTML 的 \<script\>元素是一个例外。利用 \<script\>元素的这个开放策略，网页可以得到从其他来源动态产生的 JSON 数据，而这种使用模式就是所谓的 JSONP。用 JSONP 抓到的数据并不是 JSON，而是任意的 JavaScript，用 JavaScript 解释器运行而不是用 JSON 解析器解析。

简单实现：

```javascript
function jsonp(req) {
  var script = document.createElement("script");
  var url = req.url + "?callback=" + req.callback.name;
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
```

点击[这里]({{ site.baseurl }}/demos/funny/jsonp/)体验一下。

缺点：
1. 因需使用 URL 引入资源，仅支持 get 请求
1. 通过脚本执行，可能会被注入恶意代码

参考：
> [jsonp 的原理与实现](https://zhangguixu.github.io/2016/12/02/jsonp/)  
> [JSONP](https://zh.wikipedia.org/wiki/JSONP)  
