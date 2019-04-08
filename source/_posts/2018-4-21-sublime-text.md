---
layout: default
title: Sublime Text 3 使用技巧
---

- 安装 Package Control 的代码：

```shell
import urllib.request,os,hashlib; h = 'eb2297e1a458f27d836c04bb0cbaf282' + 'd0e7a3098092775ccb37ca9d6b2e4b7d'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

- 配置 JavaScript 代码编译：

1. 先安装 Node.js
1. 再在 ST3 里配置支持 JS 代码的编译（快捷键是 Ctrl+Shift+B）， 配置如下所示：

    在 ST3 中，点击 Tools > Build System > New build system，打开一个文件并编辑：

    ```json
    {"cmd": ["jsc", "$file"], "selector": "source.js"}
    ```

    这行配置指定了这个 build 使用的命令是 jsc 。

    所以如果你要使用 node，那么对应的这个文件应该写成：

    ```json
    {"cmd": ["node", "$file"], "selector": "source.js"}
    ```

- Markdown 插件

    ST3 有关于 Markdown 的两个插件：

    1. MarkDown Editing 语法高亮
    2. OmniMarkupPreviwer 实时预览

    参考：
    > [Sublime插件：Markdown篇](http://www.jianshu.com/p/aa30cc25c91b)

- Windows 右键菜单添加 ST3

    当使用的是免安装版的 ST3 时，需要手动添加到右键菜单。

    添加：把以下代码，复制到 ST3 的安装目录，然后重命名为：sublime_addright.inf，然后右键安装即可。

    ```shell
    [Version]
    Signature="$Windows NT$"

    [DefaultInstall]
    AddReg=SublimeText3

    [SublimeText3]
    hkcr,"*\\shell\\SublimeText3",,,"用 SublimeText3 打开"
    hkcr,"*\\shell\\SublimeText3\\command",,,"""%1%\sublime_text.exe"" ""%%1"" %%*"
    hkcr,"Directory\shell\SublimeText3",,,"用 SublimeText3 打开"
    hkcr,"*\\shell\\SublimeText3","Icon",0x20000,"%1%\sublime_text.exe, 0"
    hkcr,"Directory\shell\SublimeText3\command",,,"""%1%\sublime_text.exe"" ""%%1"""
    ```

    删除：把以下代码，复制到 ST3 的安装目录，然后重命名为：sublime_delright.reg，然后双击运行即可。

    ```shell
    Windows Registry Editor Version 5.00
    [-HKEY_CLASSES_ROOT\*\shell\SublimeText3]
    [-HKEY_CLASSES_ROOT\Directory\shell\SublimeText3]
    ```

    参考：
    > [将Sublime Text3添加到右键菜单中](http://my.oschina.net/adairs/blog/466777)

- 插件操作

    ```shell
    // 打开 Package Control
    Shift+Ctrl+p
    // 安装插件
    Install Package
    // 删除插件
    Remove Package
    ```

- 代码片段

    参考：
    > [手把手教你写Sublime中的Snippet](http://www.jianshu.com/p/356bd7b2ea8e)

- Emmet

    ST3 安装 Emmet 后，Emmet 快捷键可以在 Preferences > Package Settings > Emmet > Key Bindings-Default 里查看
