---
title: "Web 字体"
---

- TrueType (.ttf)  
  Windows 和 Mac 系统最常用的字体格式，其最大的特点就是它是由一种数学模式来进行定义的基于轮廓技术的字体，这使得它们比基于矢量的字体更容易处理，保证了屏幕与打印输出的一致性。同时，这类字体和矢量字体一样可以随意缩放、旋转而不必担心会出现锯齿。

- EOT – Embedded Open Type (.eot)  
  嵌入字体格式（EOT）是微软开发的一种技术，允许 OpenType 字体嵌入到网页并可以下载至浏览器渲染，浏览器根据 CSS 中 @font-face 的定义，下载，渲染这种 .EOT 后缀的字体文件。

- OpenType (.otf)  
  OpenType 是一种可缩放字型（scalable font）电脑字体类型，采用 PostScript 格式，是美国微软公司与 Adobe 公司联合开发，用来替代 TrueType 字型的新字型。这类字体的文件扩展名为 .otf，类型代码是 OTTO，现行标准为 OpenType 1.4。OpenType 最初发表于1996年，并在 2000 年之后出现大量字体。它源于微软公司的 TrueType Open 字型，TrueType Open 字型又源于 TrueType 字型。OpenType font 包括了 Adobe CID-Keyed font 技术。Adobe 公司已经在 2002 年末将其字体库全部改用 OpenType 格式。

- WOFF – Web Open Font Format (.woff)  
  相对于 TrueType 和 OpenType ，WOFF（Web开发字体格式）是一种专门为了 Web 而设计的字体格式标准，它并不复杂，实际上只是对于 TrueType / OpenType 等字体格式的封装，并针对网络使用加以优化：每个字体文件中含有字体以及针对字体的元数据（Metadata），字体文件被压缩，以便于网络传输，并且不包含任何加密或者 DRM 措施。包括 Adobe、 Lino Type、Monotype 在内的几乎所有主要的字体供应商都加入到支持 WOFF 的行列中来。

- SVG (Scalable Vector Graphics) Fonts (.svg)  
  顾名思义，就是使用 SVG 技术来呈现字体，还有一种 gzip 压缩格式的 SVG 字体 .svgz。SVG 可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言（XML），用于描述二维矢量图形的一种图形格式。SVG 由 W3C 制定，是一个开放标准。SVG 严格遵从XML语法，并用文本格式的描述性语言来描述图像内容，因此是一种和图像分辨率无关的矢量图形格式。SVG 可以使你设计的网页可以更加精彩细致，使用简单的文本命令，SVG 可实现色彩线性变化、路径、自定义字体、透明效果、滤镜效果等各式常见的图形图像效果。
    
各大浏览器对不同字体的兼容性

![]({{ site.baseurl }}/assets/img/web-font.png)

参考：
> [Web字体格式介绍及浏览器兼容性一览](http://www.cnblogs.com/lhb25/archive/2011/02/10/1950473.html "Web字体格式介绍及浏览器兼容性一览")  
> [RF1001: 各浏览器对 '@font-face' 规则支持的字体格式不同，IE 支持 EOT 字体，Firefox Safari Opera 支持 TrueType 等字体](http://www.w3help.org/zh-cn/causes/RF1001)  