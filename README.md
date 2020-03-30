# 关于博客

博客里的笔记部分是站内笔记，部分是引用有道云外链。主要以站内为主，因为有道云有时会因为敏感字汇无法通过审核，会影响知识分享。

Demo 里的部分脚本是引用我的另一个仓库 [snippet repo](https://github.com/zhictory/snippet).

# Git 提交规范 Git Style Guide

- feat: add posts or update posts
- style: formatting, missing semi colons, etc; no post change
- chore: updating build tasks, package manager configs, etc

# 开发

dev 环境使用 \_config_dev.yml

```
bundle exec jekyll serve --config _config_dev.yml
```

build 区分环境

```shell
# 默认是 development
JEKYLL_ENV=production jekyll build
```

```liquid
{% if jekyll.environment == "production" %}
  {% include disqus.html %}
{% endif %}
```