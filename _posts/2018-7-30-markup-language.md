---
layout: default
title: 标记语言及语义化
---

# 标记语言及语义化

本篇文章对标记语言和语义化作一下简单整理。

人们常说的 HTML 就是一种标记语言，它是一种用于创建网页的标准标记语言。像其它类似的 XHTML、XML、HTML5 等标记语言之间有什么关系呢？笔者画了一张图：

[标记语言的思维导图][4]

![标记语言的思维导图]({{ site.baseurl }}/img/markup-language/1.png)

首先解释一下这张图。

SGML（Standard Generalized Markup Language） 是一种定义电子文档结构和描述其内容的国际标准语言。

HTML4 是基于 SGML 的一个应用，而 HTML5 不是，它有自己完整的标准。

> HTML 4 is an SGML application conforming to International Standard ISO 8879 -- Standard Generalized Markup Language [ISO8879]

XHTML 是基于 HTML 的一个变种，使用 XML 的语法，语法更加严格。

> XHTML is a variant of HTML that uses the syntax of XML, the Extensible Markup Language. XHTML has all the same elements (for paragraphs, etc.) as the HTML variant, but the syntax is slightly different. Because XHTML is an XML application, you can use other XML tools with it (such as XSLT, a language for transforming XML content).

基于 SGML 的实例需要在文档中引用相关的 DTD（Document Type Definition），例如 HTML4：

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

而 HTML5 相对简洁，不需要引用 DTD：

```html
<!DOCTYPE html>
```

目前所有的浏览器都支持这种声明，而且 HTML5 兼容 HTML4，所以现在的网站没必要引用 DTD，这样显得更加简洁。

接下来说一下语义化。

HTML5 较之前版本有一个很重要的更新，就是在之前规范的基础上，将表现层的语义描述都进行了删改，并增加了不少表达更丰富语义的标签。那么什么是语义化呢？简单说来就是让机器可以读懂内容。

推广这个语义化有什么意义呢？以下列出几个优点：

1. 对于 SEO，有助于爬虫抓取更多的有效信息，比如 h1~h6、strong 用于不同权重的标题等等。
2. 对于用户，有助于提升用户体验，例如 title、alt 用于解释名词或解释图片信息等。
3. 对于开发人员，有助于提高代码可读性、便于维护、提高开发效率。

行业机构对语义化标签的扩展和浏览器厂商在技术上的支持力度逐渐提升，例如 web 标准化组织刚刚开始推广的 HTML5，其中新增了许多语义化的标签，例如 header、aside、nav、section 等等，在 Chrome、Opera、Safari、Firefox 等浏览器中均得到很好支持。

下面说一下语义化的用法。

这里先提一下 ARIA（Accessible Rich Internet Applications）。由于 HTML4 规范缺乏足够的语义化标签，开发人员通常会使用通用标签（如 div、span），加上一些可用的语义信息，来描述一个标签，这种做法就是 ARIA 存在的意义。

像 header、footer 等新标签其实可以通过定义一个添加了 ARIA 的角色、状态或属性的普通 div 来实现，例如：

```html
<div role="header" aria-hidden="true"></div>
<div role="footer" aria-hidden="false"></div>
```

但如果使用的标签本身具有语义化，应该使用这些标签，没必要再重新定义一个。例如以下代码 div 和 nav 具有同样语义，但优先使用 nav：

```html
<div role="navigation"></div>
<nav></nav>
```

除了 nav，常用的语义化标签有：

```html
<!-- article 可嵌套 article -->
<!-- section 可嵌套 header 和 footer -->
<!-- 有多个连续标题时才需要 hgroup -->
<article>
  <header>
    <hgroup>
      <h1></h1>
      <h2></h2>
    </hgroup>
  </header>
  <section>
    <div></div>
  </section>
  <aside></aside>
  <footer></footer>
</article>

<figure>
  <img src="" alt="">
  <figcaption></figcaption>
</figure>

<video src="">
  <source>
  <track></track>
</video>
<audio src="">
  <source>
  <track></track>
</audio>

<details>
  <summary></summary>
  <p></p>
</details>

<menu>
  <menuitem></menuitem>
</menu>

<canvas></canvas>
<svg></svg>
<embed src="" type="">
```

除了 HTML 标签语义化，还可以通过 CSS class 命名实现语义化，例如：

```html
<div class="header">
  <div class="title"></div>
</div>
```

这同样便于开发人员阅读和维护，但并不利于 SEO 和屏幕阅读器识别。

最后说一下笔者对语义化的看法。

网上的开发者对语义化其实有不同的声音，有的认为有必要推广语义化，因为有规范开发语言等意义，有的认为没必要，因为看起来它并不会影响功能实现。笔者认为前端人员有必要了解语义化，在页面重构和 SEO 时都需要考虑语义化，而且站在 SEO 的角度，语义化对网站推广来说也有好的作用。抛弃语义化来开发好像不会影响页面展示，但其实作为一个 Web 工作者，为语义化作贡献还是很有意义的。坚持使用语义化的方式开发，不仅自己写的代码看起来舒服，还符合语义网的理念。语义网是万维网创始人 [Tim Berners-Lee][12] 提出来的，要实现很困难，权且当作一种信仰吧，引用前端工程师[顾轶灵][11]的话就是：

> 让一切内容和包括对关系的描述都成为 Web 上的资源，都可以由唯一的 URI 定义，语义明确、机器可读。

参考：
> [What is XHTML?][1]  
> [SGML/HTML/XML之间的关系详情][2]  
> [HTML 4.01 Specification][3]  
> [如何理解 Web 语义化？ - 顾轶灵的回答 - 知乎][5]  
> [语义化标签的实战意义][6]  
> [快速理解web语义化][7]  
> [ARIA][8]  
> [HTML5 标签列表][9]  
> [快速理解web语义化][10]  

  [1]: https://www.w3.org/standards/webdesign/htmlcss  
  [2]: https://www.2cto.com/kf/201801/713962.html
  [3]: https://www.w3.org/TR/2018/SPSD-html401-20180327/
  [4]: https://mubu.com/edit/2DNEPceOHV
  [5]: https://www.zhihu.com/question/20455165/answer/15176745
  [6]: http://ued.sina.com.cn/?p=157
  [7]: https://juejin.im/entry/5ab5f229518825558a069304
  [8]: https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA
  [9]: https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list
  [10]: https://juejin.im/entry/5ab5f229518825558a069304
  [11]: https://www.zhihu.com/people/justineo/activities
  [12]: https://zh.wikipedia.org/wiki/蒂姆·伯纳斯-李