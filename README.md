webui-aria2-cn
===========
*** 注：由于暂时未完全搞明白源代码，所以只是简单的做了某些界面上的汉化，使用时，可以把带有-zh的文件替代相应的原文件即可实现界面汉化。***

![Main interface](/screenshots/overview.png?raw=true)

本项目是从 [ziahamza/webui-aria2](https://github.com/ziahamza/webui-aria2) fork而来的一个用于汉化界面的一个小项目。

webui-aria2 的目标就是创建和 aria2 交互的世界上最好和最热门的界面。aria2 是世界上最好的文件下载器，但是有些时候命令行总是带来了比所需更强大的功能。项目最初创建是作为 GSOC 方案的一部分，尽管如此，它在来自 aria2 社区的强大的技术支持和反馈下，已经快速的成长并发生变化。。。

使用非常简单，无需构建脚本，无需安装脚本。首先在你的本地主机或者远端主机上后台启动 aria2，你可以如下这样做:
````bash
aria2c --enable-rpc --rpc-listen-all
````


如果 aria2 还未在你的本地机器上安装的话，那么转到 http://aria2.sourceforge.net/ 并按照其中的说明完成。

然后下载 webui，你可以通过下载本库并在浏览器中运行 index.html 来完成操作。或者你只需转到 http://ziahamza.github.io/webui-aria2/ 并开始下载文件!之后，你可以使用浏览器的页面另存为选项保存它以作离线使用。



提示
====
1. 在使用种子或 metalinks 的情况下，你总是可以选择要下载那些文件，只需暂停下载，那么应该就会有一个列表图标出现在设置按钮旁边。在开始下载前选择要下载那些文件，赋予标志 --pause-metadata 给 aria2。查看[链接](http://aria2.sourceforge.net/manual/en/html/aria2c.html#cmdoption--pause-metadata)

配置
=============
阅读并编辑 [configuration.js](configuration.js)。

DirectURL
---------
这个功能让用户可以直接从 webui 的仪表板下载它们从 aria2 下载的文件。如果你熟悉网络服务器的运作，设置一个指向配置的 aria2 下载目录的 http 服务器，勾选权限。然后在 webui 的 directURL 配置中指定一个完整的 URL: ```http://服务器:端口/```。

如果上面还表述不清楚，继续阅读在 [directurl.md](directurl.md) 中关于这方面的内容。

依赖关系
============
嗯，你需要 aria2。还有一个网络浏览器(如果这也算的话!)

Docker 支持
==============
你也可以在一个 Docker 沙盒中的你的 LAN 中尝试或使用 webui-aria2。

构建镜像

````bash
sudo docker build -t yourname/webui-aria2 .
````

..并运行它!它将可以这样访问: `http://localhost:9100`

````bash
sudo docker run -v /Downloads:/data -p 6800:6800 -p 9100:8080 --name="webui-aria2" yourname/webui-aria2
````

`/Downloads` 是你保存下载的文件所在的主机中的目录

技术支持
=======
由于本项目只是进行界面汉化，如果发现原项目可以使用而本项目无法实现的功能，请告知本人。但是如果要获得任何技术支持、功能请求和错误报告，请在原作的 github 项目中添加一个发问。[链接](https://github.com/ziahamza/webui-aria2/issues)

许可
=======
参考原项目的 LICENSE 文件(MIT License)。[链接](https://github.com/ziahamza/webui-aria2)
