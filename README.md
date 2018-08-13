# Zhictory 的技术博客

环境：

- jekyll 3.7.3
- ruby 2.3.3
- gem 2.5.2

构建：

```shell
jekyll serve
```

移动端联调：

- PC 开户移动热点，移动端连接该热点。
- PC 开启本地服务器，使用 browser-sync 监听本地服务器，移动端访问指定 IP，如：
    ```shell
    browser-sync start --proxy '127.0.0.1:4000'
    ```

模板：

- [long-haul](https://github.com/brianmaierjr/long-haul)

文档：

- [Jekyll 文档](http://jekyll.bootcss.com/)