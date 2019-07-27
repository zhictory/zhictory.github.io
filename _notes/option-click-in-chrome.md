---
title: "Chrome option 点击"
category: "javascript"
---

在 Chrome 下， select 下的 option 标签不支持 onclick 事件（使用 jQuery 的 `on('click',function(){})` 也不行），不明白原因是什么，而在 Firefox 下是支持的。

目前是用 select 的 onchange 事件（jQuery 下的 `on('change',function(){}` 同理)）来兼容 Chrome。