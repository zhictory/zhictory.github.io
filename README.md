# About My Blog

部分脚本是引用这个仓库 [snippet repo](https://github.com/zhictory/snippet).

Git Style Guide

- feat: add posts or update posts
- style: formatting, missing semi colons, etc; no post change
- chore: updating build tasks, package manager configs, etc

开发环境使用 \_config_dev.yml

```
bundle exec jekyll serve --config _config_dev.yml
```

区分环境

```shell
# 默认是 development
JEKYLL_ENV=production jekyll build
```

```liquid
{% if jekyll.environment == "production" %}
  {% include disqus.html %}
{% endif %}
```

## FAQ

* Invalid GBK character

  ```shell
  Conversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/main.scss':
  Invalid GBK character "\xE2" on line 54
  ```

  C:\Ruby26-x64\lib\ruby\gems\2.6.0\gems\sass-3.7.4\lib\sass.rb 在最下方添加

  ```ruby
  Encoding.default_external = Encoding.find('utf-8')
  ```