# About My Blog

部分脚本是引用这个仓库 [snippet repo](https://github.com/zhictory/snippet).

Git 提交规范 Git Style Guide

- feat: add posts or update posts
- style: formatting, missing semi colons, etc; no post change
- chore: updating build tasks, package manager configs, etc

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