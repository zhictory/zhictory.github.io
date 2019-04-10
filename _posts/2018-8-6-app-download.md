---
title: App 下载提示
---

[Github][3]

笔者之前接到一个需求，这个需求要求能在手机浏览器页面调起 App，调不起的要去下载，如下图：

![页面调起 App]({{ site.baseurl }}/assets/img/app-download/3.png)

笔者心想这个不是什么新鲜需求，很多网站有这种交互，于是做了一番调查，确定了要测试的浏览器和要参考的网站，总结出了下面一份思维导图：

[App 下载提示的思维导图][1]

![App 下载提示的思维导图]({{ site.baseurl }}/assets/img/app-download/1.png)

解释一下这张图：

1. 测试的系统包括：iOS 和 Android。
2. 测试的浏览器包括：微信内置浏览器、微博内置浏览器、QQ 内置浏览器、UC 浏览器、QQ 浏览器、Safari、Chrome、Opera。
3. 调起的方法包括：自定义协议、应用宝链接、下载链接、meta 标签。
4. 测试的结果包括：点击无反应、点击后跳转到应用宝或 App Store、点击后去官网下载。
5. 下载的链接包括：Android 应用市场（如应用宝）、App Store、官网下载。

这里要说明一下，使用自定义协议调起 App 的方法是要区分系统的，比如：

```javascript
'jinhaima://kinhomapp' // Android
'com.kinhom.JinHaiMa://com.kinhom.JinHaiMa' // iOS
```

而 meta 标签调起只对 iOS 中起作用。

调查之后还得实现代码，笔者总结了一个简易的流程图帮助实现：

[App 下载提示的流程图][2]

![App 下载提示的流程图]({{ site.baseurl }}/assets/img/app-download/2.jpg)

注意这个流程图中的红色字，分别有带参数和不带参数的情况，这个参数是用于调起 App 后做额外功能，如打开详情页，不过这个参数只对自定义协议方法起作用，而且需要后端配合。

这个解决方案还有两个要注意的地方：

1. 如何检测平台，包括系统和浏览器种类。
2. 怎么判断有没有调起 App。

平台检测可以借助 navigator 对象的 userAgent 和 platform 属性实现。

至于怎么判断有没有调起 App，暂时只能想到用计时器解决：

```javascript
// 超时未调起 App 则跳转到下载链接（调起 App 后尚不知如何取消跳转）
setTimeout(function () {
  location.href = downloadUrl;
}, 1000);
```

在一定时间后如果没有调起 App，页面就会跳转至下载页面。但是这样会导致就算调起 App 也会去下载，好在调起后用户并不用去理会下载页面。

  [1]: https://mubu.com/doc/QzUIdhlXU
  [2]: https://www.processon.com/view/link/58a552a8e4b0ba81d212ab41
  [3]: https://github.com/zhictory/appDownload