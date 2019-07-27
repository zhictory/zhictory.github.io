---
title: "编写 npm package"
category: "mixin"
---

[官网教程][1]

新建一个项目，完成插件代码，然后在目录内并执行命令：

```shell
// 生成 package.json
npm init

// 在 https://www.npmjs.com 注册账号，并使用该账号 login
npm login

// 发布到 npm 社区
npm publish
```

注意：
1. login 之后可以使用 `npm whoami` 检测当前用户是哪个账号。
1. `npm publish` 时可能会遇到如下问题而无法 publish：
    1. package name 跟社区里现有的 package 重复了
    1. package 有版本控制但代码修改后未提交，使用 `git commit` 解决。
    1. package 有修改但未更新 version，使用 `npm version x.y.z` 解决。
    1. npm 未指定官方 [registry manager][2]，使用 `nrm use npm` 来指定。
1. 不建议使用 `npm unpublish --force` 来撤销发布，建议使用 `npm deprecate` 来表示不再维护。

实践：
1. 一般人把 npm package 当成模块来 import 或 require 的，所以插件的代码可以用 export 或 module.exports 导出且无需构建。
1. package 的目录一般含有：js 入口文件、package.json、README.md。

参考：
1. [How to create and publish NPM Packages?](https://www.youtube.com/watch?v=rTsz09zRuTU)
1. [利用npm安装/删除/发布/更新/撤销发布包](https://cloud.tencent.com/developer/article/1011975)
1. [npm publish 发布示例](https://lellansin.wordpress.com/2014/05/09/npm-publish-%E5%8F%91%E5%B8%83%E7%A4%BA%E4%BE%8B/)

  [1]: https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry
  [2]: https://registry.npmjs.org