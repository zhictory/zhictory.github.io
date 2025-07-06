---
title: Git 实践问答
description: "Git 实践问答..."
date: 2018-06-17
tags: ["javascript"]
---

Git 是分布式版本控制系统（Distributed Version Control System，简称 DVCS），DVCS 的特点是：

> 在分布式版本控制系统中，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。

![]({{ site.baseurl }}/assets/img/git-practice/remote.png)

以下是笔者在使用 Git 过程中遇到的问题和解决方法。

### 1. HttpRequestException encountered

GitHub 从 2018 年 2 月 1 日起禁用 TLSv1 和 TLSv1.1，必须更新 windows 的 Git 凭证管理器，[详情点击](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/tag/v1.14.0)

TLS 是 Transport Layer Security，中文是安全传输层协议，包括 TLS 记录协议和 TLS 握手协议，用于在两个通信应用程序之间提供保密性和数据完整性。Github 正是将 TLSv1 和 TLSv1.1 应用于 HTTPS 链接，包括 [https://github.com](https://github.com) 和 [https://api.github.com](https://api.github.com) 的 WEB， API，和 Git。安全攻击不断出现，促使社区开发更强大的加密标准来应对，TLSv1 和 TLSv1.1 已不足以应对，所以 Github 宣布禁用了它们。

### 2. 如何暂存 untracked 文件

```shell
git stash save --include-untracked
```

### 3. gitk 中文乱码问题解决方法

在 .gitconfig 里写

```shell
[gui]
encoding = utf-8
```

### 4. 合并一半时又不想合并了

```shell
git merge --abort
```

### 5. 跟远程仓库相关的命令

比如公司换了 Git 托管服务商，我 push 不上去，有可能是因为被修改了 remote，解决如下：

```shell
git remote set-url origin URL
```

比如报错：`fatal: remote origin already exists`，解决如下：

```shell
git remote rm origin
git remote add origin URL
```

### 6. 我在 `git add` 时使用 ctrl+c 强制取消后，再 `git reset` 时报错：`fatal: Unable to create 'XXX/.git/index.lock’: File exists.`

[What does the .git/index.lock file actually do?](https://stackoverflow.com/questions/20268300/what-does-the-git-index-lock-file-actually-do)

在 .git 同级目录删除 index.lock。

```shell
rm -f .git/index.lock
```

### 7. 怎么文件从缓存里清除？

删除文件然后在 .gitignore 里添加该文件。

```shell
git rm --cached <file>
```

### 8. 我开发的分支 task 落后 dev 好多，怎么办？

正常的做法应该是将 task 合并到 dev 后再 checkout 出来，但是 task 开发一半，不能合并，所以使用 cherry-pick 将 dev 上想要的 commit 合并到 task 上：

```shell
git cherry-pick sha-1_value
```

> `git cherry-pick` 命令用来获得在单个提交中引入的变更，然后尝试将作为一个新的提交引入到你当前分支上。 从一个分支单独一个或者两个提交而不是合并整个分支的所有变更是非常有用的。

### 9. 某个文件改了不想推，也不想写在 .gitignore，怎么办？

```shell
git update-index --assume-unchanged <path> // 忽略跟踪
git update-index --no-assume-unchange <path> // 恢复跟踪
```

### 10. 提交信息写错了怎么办？

```shell
git commit --amend -m <message> // 修改最后一次提交
git rebase -i HEAD~3 // 修改多个提交信息
```

使用第二条时要注意：
> 再次记住这是一个变基命令，在 HEAD~3..HEAD 范围内的每一个提交都会被重写，无论你是否修改信息。不要涉及任何已经推送到中央服务器的提交，这样做会产生一次变更的两个版本，因而使他人困惑。

### 11. 跟本地分支有关的命令

比如本地分支名写错了：

```shell
git branch -m <old_branch_name> <new_branch_name>
```

### 12. 跟远程分支有关的命令

比如如何删除远程分支：

```shell
git push origin --delete <branch_name>
```

### 13. 怎么解决多个 Git 托管服务商帐号的 SSH-key 同时存在于一台计算机

[http://www.cnblogs.com/BeginMan/p/3548139.html](http://www.cnblogs.com/BeginMan/p/3548139.html)

```shell
# 添加第二个帐号时的操作
cd ~/.ssh
ssh-keygen -t rsa -C "xxx@mail.com"
Enter file in which to save the key (/c/Users/Administrator/.ssh/id_rsa): id_rsa_work

# 括号内非必须
(eval $(ssh-agent))
(ssh-agent bash)
(ssh-agent -s)
ssh-add ~/.ssh/id_rsa_work

# 检测是否添加成功
ssh -T git@github.com
ssh -T gogs@src.jiaju888.com
```

config：

```shell
# 在~/.ssh目录下找到config文件，如果没有就创建
# 该文件用于配置私钥对应的服务器
# first user(first@mail.com)
Host github.com
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa

# second user(second@mail.com)
# 建一个github别名，新建的帐号使用这个别名做克隆和更新
Host src.jiaju888.com
HostName src.jiaju888.com
User gogs
IdentityFile ~/.ssh/id_rsa_work
```

### 14. `git merge --no-ff` 和 `git merge -ff` 的区别是什么？

`git merge -ff`：

> When the merge resolves as a fast-forward, only update the branch pointer, without creating a merge commit. This is the default behavior.

`git merge --no-ff`：

> Create a merge commit even when the merge resolves as a fast-forward. This is the default behaviour when merging an annotated (and possibly signed) tag.

![]({{ site.baseurl }}/assets/img/git-practice/14.png)

### 15. `git push -u origin master` 中的 `-u` 有什么作用？

如果当前分支与多个主机存在追踪关系，则可以使用 `-u` 选项指定一个默认主机，这样后面就可以不加任何参数使用 Github。

上面命令将本地的 master 分支推送到 origin 主机，同时指定 origin 为默认主机，后面就可以不加任何参数使用 `git push` 了。

另外也可以显示设置：

> 设置已有的本地分支跟踪一个刚刚拉取下来的远程分支，或者想要修改正在跟踪的上游分支，你可以在任意时间使用 `-u` 或 `--set-upstream-to` 选项运行 `git branch` 来显式地设置。

### 16. `git clone` 的本质

> `git clone` 实际上是一个封装了其他几个命令的命令。 它创建了一个新目录，切换到新的目录，然后 `git init` 来初始化一个空的 Git 仓库， 然后为你指定的 URL 添加一个（默认名称为 origin 的）远程仓库（`git remote add`），再针对远程仓库执行 `git fetch`，最后通过 `git checkout` 将远程仓库的最新提交检出到本地的工作目录。

### 17. 企业级的 Git 工作流长什么样？

[http://www.jianshu.com/p/104fa8b15d1e](http://www.jianshu.com/p/104fa8b15d1e)

![]({{ site.baseurl }}/assets/img/git-practice/17.png)

### 18. `git rm` 和 `rm` 的区别

> git rm - Remove files from the working tree and from the index

用 `git rm` 删除物理文件和 index 中的文件；用 `rm` 仅仅是删除了物理文件，没有删除 index 中的文件，所以在操作上会有所区别。

```shell
git rm <file>
git commit -m <message>
```

```shell
rm <file>
git commit -am <message>
```

### 19. 删除 untracked 的文件

删除 untracked files
```shell
git clean -f
```

连 untracked 的目录也一起删掉
```shell
git clean -fd
```

加上 -n 参数来先看看会删掉哪些文件
```shell
git clean -nf
git clean -nfd
```

### 20. 想去掉 `add` 和 `commit` 之后的改动怎么办？

撤销 commit：
```shell
git reset --soft HEAD~
```

撤销 add：
```shell
git reset <file>
```

回退到上个版本（相当于同时操作撤销commit和撤销add）
```shell
git reset --hard HEAD~
```

### 21. git rebase 有什么用？

rebase 译为变基，即改变基底，一般操作：

```shell
git checkout dev
git rebase master
```

> 变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。
>
> 一般我们这样做的目的是为了确保在向远程分支推送时能保持提交历史的整洁——例如向某个其他人维护的项目贡献代码时。 在这种情况下，你首先在自己的分支里进行开发，当开发完成时你需要先将你的代码变基到 origin/master 上，然后再向主项目提交修改。 这样的话，该项目的维护者就不再需要进行整合工作，只需要快进合并便可。
>
> 总的原则是，只对尚未推送或分享给别人的本地修改执行变基操作清理历史，从不对已推送至别处的提交执行变基操作。

### 22. `push` 到 Github 时，怎么才不用每次都要输入用户名和密码

将 https 方式换为 ssh 方式：

```shell
git remote -v
git remote rm origin
git remote add origin <URL>
```

### 23. 修复 bug 的代码与自己开发新功能有冲突怎么办？

使用 `git stash` 储藏与清理。

> 有时，当你在项目的一部分上已经工作一段时间后，所有东西都进入了混乱的状态，而这时你想要切换到另一个分支做一点别的事情。 问题是，你不想仅仅因为过会儿回到这一点而为做了一半的工作创建一次提交。 针对这个问题的答案是 `git stash` 命令。

### 24. git stash 只想暂存部分文件怎么办？

1. add 那些你不想备份的文件（例如： git add file1.js, file2.js）
1. 调用 git stash –keep-index。只会备份那些没有被 add 的文件
1. 调用 git reset 取消已经 add 的文件的备份，继续自己的工作

### 25. 两个不同项目的合并

在 Github 远程新建一个仓库并在远程提交了更改，然后想把本地同名仓库上传。

于是想先 pull，但因为两个仓库不同，出现 `fatal: refusing to merge unrelated histories`，无法 pull。

因为他们是两个不同的项目，要把两个不同的项目合并，需要添加 --allow-unrelated-histories：

```shell
git pull origin master ----allow-unrelated-histories
```

两个仓库虽然同名，也有相同的分支，但由于没有共同祖先，所以结果是 `merge by recursive strategy`。

如果希望提交历史更简洁的，还是勤快点把远程仓库 clone 下来，再把本地仓库覆盖到远程仓库。

### 26. 找回丢失的 commit

```shell
git fsck --lost-found
```

删了 commit 后，并不是真正的删除，而是 Git 把它变成了悬空对象（dangling commit）。我们只要把这悬空对象找出来，用 git rebase 也好，用 git merge 也好，就能把它们给恢复。

### 27. 警告 LF 变为 CRLF

文本文件所使用的换行符，在不同的系统平台上是不一样的。UNIX/Linux 使用的是 0x0A（LF），DOS/Windows 使用的是 0x0D0A（CRLF）。

跨平台协作开发是常有的，不统一的换行符确实对跨平台的文件交换带来了麻烦。在不同平台上，换行符发生改变时，Git 会认为整个文件被修改，不能正确反映本次的修改。

还好 Git 在设计时就考虑了这一点，提供了一个 autocrlf 的配置项，用于在提交和检出时自动转换换行符。

> [Git 多平台换行符问题(LF or CRLF)](http://blog.konghy.cn/2017/03/19/git-lf-or-crlf/)

### 26. 想知道我在提交前本地都做了什么操作

git reflog 显示了已完成的所有事情的列表。然后它允许你使用 Git 的神奇时间旅行技能回到过去的任何一点。

```shell
git reflog
git reset HEAD@{index}
```