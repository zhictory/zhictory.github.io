---
title: 登录改造
date: 2025-07-13
category: [业务, Hybrid]
---

**用 sessionStorage 还是 localStorage 来存储 user info？**

为了多个 tab 共享同个 user info，所以用 localStorage。

**用 localStorage 是否影响其他系统的 localhost？**

有可能，会影响相同字段。

**当用 localStorage 存储 user info 和 session id 时需要注意的点：**

1. App 只能打开一个 webView tab，所以用 localStorage 切换路由的效果与使用 sessionStorage 一样。
2. 重启 App 会清空 sessionStorage 但不会清空 localStorage，所以用 localStorage 会保留 session id，不需要重新登录。
3. 清除缓存或重装 App 会同时清空 sessionStorage 或 localStorage，不保留 session id，这种情况就需要重新登录。
4. session id 是会一直存在 localStorage 里，因为登录注册也会保留一个。

测试要点

1. pc 多 tab 测试
2. 真机测试（重启、重装、登录退出、跳转浏览器等）
