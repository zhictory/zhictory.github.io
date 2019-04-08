---
layout: default
title: 《使用 webpack 定制前端开发环境》笔记
---

> 在线阅读：[使用 webpack 定制前端开发环境][11]
> 书籍作者：[teabyii][12]

在阅读这本小册之前，博主其实已经在用 webpack 开发了，但是公司的 webpack 工作流是领导配置的，博主对其了解不多。阅读这本小册之后，对 webpack 配置的整个流程有了更清晰的认识。

以下是阅读小册时有助于理解的笔记：

1. [配置参数 include 和 exclude][1]
2. [加载图片][2]
3. [webpack.config.js 的用法][3]
4. [splitChunks 的 test 字段][4]
5. [optimization][5]
6. [loader 执行顺序][6]
7. [HMR 样式不应用更新的问题][7]
8. [devServer before][8]
9. [DefinePlugin][9]
10. [webpack 配置一览][10]

附上阅读时练习的 webpack 配置：[webpack.config.js][13]

  [1]: http://d8480a24.wiz03.com/share/s/3oi0EA1grx7x2Lj00z1ZXVvc2auGts2XnkRb2Vz7Kw0ldDAg
  [2]: http://d8480a24.wiz03.com/share/s/3oi0EA1grx7x2Lj00z1ZXVvc2jAn-E3Wo4Vl2s4Lgl3nLo3f
  [3]: http://d8480a24.wiz03.com/share/s/3oi0EA1grx7x2Lj00z1ZXVvc1I-41F3fl4qP20RhDY1oyZC-
  [4]: http://d8480a24.wiz03.com/share/s/3oi0EA1grx7x2Lj00z1ZXVvc0pCTQJ0Uw45_20iZJK1JkLdL
  [5]: http://d8480a24.wiz03.com/share/s/3oi0EA1grx7x2Lj00z1ZXVvc3bBrWJ0EQk1Y2phq1z0SeGMI
  [6]: http://d8480a24.wiz03.com/share/s/3oi0EA1grx7x2Lj00z1ZXVvc1aXo-e0OmAZc2IVVp42JAY43
  [7]: http://d8480a24.wiz03.com/share/s/3oi0EA1grx7x2Lj00z1ZXVvc0ASqmz2-n4GC2Q3ilF2kRVeM
  [8]: http://d8480a24.wiz03.com/share/s/3oi0EA1grx7x2Lj00z1ZXVvc0pEGFH3XcQij2fCNx214S9Du
  [9]: http://d8480a24.wiz03.com/share/s/3oi0EA1grx7x2Lj00z1ZXVvc0F9b1w19fkg92dYBsx1i0ES1
  [10]: http://d8480a24.wiz03.com/share/s/3oi0EA1grx7x2Lj00z1ZXVvc3Xm0wm1Vc4dR200uQK3n92rl
  [11]: https://juejin.im/book/5a6abad5518825733c144469/section/5a6abad5518825732e2f8546
  [12]: https://juejin.im/user/57a2e06da3413100631c1fc7
  [13]: https://github.com/zhictory/zhDate/blob/master/webpack.config.js