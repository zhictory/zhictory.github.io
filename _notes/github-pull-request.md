---
title: "Github Pull Request"
category: "mixin"
---

![](https://raw.githubusercontent.com/youngsterxyf/youngsterxyf.github.com/master/assets/uploads/pics/fork-pull-request.jpeg)

1. 先将 `astaxie/beego` 代码库 fork 一份到自己的名下（如我的 `youngsterxyf/beego`）。
1. 把 `youngsterxyf/beego` clone 到本地机器上做开发。因为 PR 要提到 `astaxie/beego` 的 develop 分支，所以最好对应地在你 fork 的代码库的 develop 分支做开发。在本地开发测试完成后，将 commit push 到 `youngsterxyf/beego` 。
1. 在 `youngsterxyf/beego` 页面点击 “New pull request”，会跳转到 `astaxie/beego` 创建一个新的 PR，在页面中需要选择 base fork 的目标分支（这里为 `astaxie/beego` 的 develop 分支）和 head fork 的目标分支（这里为 `youngsterxyf/beego` 的 develop 分支）。PR 提交后，等待 `astaxie/beego` 代码库的协作者来 review 我的 PR。
1. 如果其他人也给 `astaxie/beego` 提了 PR（或者直接在 develop 上做了变更），我会把 `youngsterxyf/beego` 的 develop 分支同步到最新状态，便于我进行新的开发，同步的流程为：
   1. 在本地代码库添加一个新的 remote，名为 beego ： git remote add beego https://github.com/astaxie/beego.git
   1. 在 develop 分支上执行 git pull beego develop，这会获取 `astaxie/beego` develop 分支最新的状态，并 merge 到本地代码库的 develop 分支
   1. 将本地代码库的 develop 分支 push 到 `youngsterxyf/beego` ：git push origin develop
1. 在发布新的版本时, `astaxie/beego` 的 develop 分支会先 merge 到其 master 分支，然后打上新的 tag 。这时我也会把 `youngsterxyf/beego` 的 master 分支同步到最新状态，流程与 develop 分支相同。

注意：在第 3 步中，如果发现 base fork 的目标分支和 head fork 的目标分支之间有代码冲突，则需要先在本地代码库对应的分支上解决这个冲突，然后 push 到 `youngsterxyf/beego` ，再提 PR。

参考：

> [基于 Github 的 pull request 流程做开源贡献](http://blog.xiayf.cn/2016/01/18/github-fork-pull-request/)
