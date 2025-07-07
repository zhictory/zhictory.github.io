---
title: 教你如何使用 Jekyll
description: "教你如何使用 Jekyll..."
date: 2016-07-03
category: [javascript]
---

## 1. 引言

> Jekyll 是一个简单的博客形态的静态站点生产机器。它有一个模版目录，其中包含原始文本格式的文档，通过 Markdown （或者 Textile） 以及 Liquid 转化成一个完整的可发布的静态网站，你可以发布在任何你喜爱的服务器上。Jekyll 也可以运行在 GitHub Page 上，也就是说，你可以使用 GitHub 的服务来搭建你的项目页面、博客或者网站，而且是完全免费的。
>  
> Jeklly 的一个最好的特点是“关注 blog 本身”。这是指什么呢？简单的说就是写博客的过程被 铸造进了 Jekyll 的功能中。你只需简单的管理你电脑中的一个文件夹下的文本文件就 可以写文章并方便的在线上发布。与繁琐的配置和维护数据库和基于网站的内容管理系统（CMS）相比， 这是一个非常受欢迎的改变。

## 2. 参考资料

> [Jekyll 中文文档](http://jekyll.bootcss.com/docs/home/)
>  
> [阮一峰老师的指导](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)

## 3. 开始

1. 系统环境是 Windows 10 x64
2. 先安装[Ruby](http://www.ruby-lang.org/en/downloads/)
3. 再安装[RubyGems](http://rubygems.org/pages/download)
4. 借助RubyGems安装Jekyll

    ```shell
    gem install jekyll
    ```

5. 安装完Jekyll，生成默认的目录结构

    ```shell
    jekyll new myblog
    ```

    然后进入myblog文件夹执行：

    ```shell
    jekyll serve
    ```

    然后用浏览器打开 [http://localhost:4000/myblog/](http://localhost:4000/myblog/) 就可以看到博客啦（只是本地预览）！

6. 将博客发布到线上

    首先安装Git，然后在myblog里开分支（gh-pages），写完博客后将分支推到远程，就可以通过指定url访问了，比如 [https://zhictory.github.io/jekyll/](https://zhictory.github.io/jekyll/)

## 4. 进阶

怎么用jekyll写博客？

## 5. 结语

这是我第一次建立博客，只见雏形，仍有很长的路要走。

感谢朋友[Charles Qiu](https://github.com/QMonkey)不吝赐教，给我指明一个建立博客的方向。

感谢朋友[zhzhzh122333](https://github.com/zhzhzh122333)和我的主管小林哥的鼓励和分享。

感谢[long-haul](https://github.com/brianmaierjr/long-haul)的作者[Brian Maier Jr.](https://github.com/brianmaierjr)的开源分享，本博客采用此主题作为主题。

感谢[Jekyll文档](http://jekyll.bootcss.com/)和所有参考资料的开发人员。
