---

title: ConEmu使用场景
---
# ConEmu使用场景

## 1. 认识ConEmu

ConEmu是一个强化版的 **Windows** 命令行工具，它的特点之一就是集中管理多个命令行，笔者准备用它来替代 **cmd** 和 **Git Bash**。读者请自行下载并安装（本文示例的系统环境是Win10，ConEmu版本是160619）。

[ConEmu下载地址](http://conemu.github.io/)

![]({{ site.baseurl }}/assets/img/conemu-tutorial/conemu_install.png)

## 2. ConEmu替代cmd

设置打开cmd时变成打开ConEmu（下图中红框打勾，其他不变）：

![]({{ site.baseurl }}/assets/img/conemu-tutorial/force_cmd.png)

## 3. ConEmu替代Git Bash

目标是给右键菜单添加“ConEmu Here”选项：

![]({{ site.baseurl }}/assets/img/conemu-tutorial/right_menu.png)

为此，需要进行以下设置（[参考链接](http://superuser.com/questions/454380/git-bash-here-in-conemu)）：

1. 新建任务并设置要启动程序的路径：

    ![]({{ site.baseurl }}/assets/img/conemu-tutorial/conemu_here_1.png)

1. 添加右键菜单：

    ![]({{ site.baseurl }}/assets/img/conemu-tutorial/conemu_here_2.png)

1. 在本地仓库内像使用 git bash 那样使用 ConEmu 了，效果图如下：  

    ![]({{ site.baseurl }}/assets/img/conemu-tutorial/gitbash_conemu.png)

## 4. 其他

### 4.1 快捷键  

- 全屏 Alt+Enter
- 显示/隐藏 Ctrl+`
- 分屏 Ctrl+Shift+O 或者 Ctrl+Shift+E
- 新建Tab Win+W
- 关闭Tab Win+Delete
- 切换Tab Win+Q
- 粘贴 右键
- 复制 选中文本  

更多快捷键请参考ConEmu的设置