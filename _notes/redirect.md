---
title: "跳转页面的方式"
category: "javascript"
---

- window.location 对象，在当前页面打开
```
location.assign(url);
location.href = url;
location = url;
```

- window 对象，新开一个页面
```
window.open(url);
top.open(url);
self.open(url);
```