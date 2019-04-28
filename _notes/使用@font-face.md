---
title: "使用 @font-faces"
---

原理：先使用字体注册工具 @font-face 注册自定义字体，再通过规则使用自定义字体。

步骤：

1. 下载字体
1. 引入字体

    ```html
    <link rel="stylesheet" href="../font/..." />
    ```
1. 在 CSS 里引用该字体

    ```css
    @font-face {
      font-family: "gooddogregular"; /* 字体名 */
      src: url("GoodDog-webfont.eot"); /* IE 只支持 eot 格式 */
      src: local("gooddogregular"),
        /* 先读取本地的字体 */
        /* 其他浏览器支持 woff、truetype、svg 这三种，优先使用 woff 格式 */
        url("GoodDog-webfont.woff") format("woff"), url("GoodDog-webfont.ttf")
        format("truetype"), url("GoodDog-webfont.svg") format("svg");
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
    }
    body {
      font-family: "gooddogregular";
    }
    ```

注意：如果注册时用的名字（font-family）与系统的冲突，那么注册时的名字优先。
