---
layout: single
title: 用 Node.js 搭建本地服务器
---

[Github](https://github.com/zhictory/node-server)

网友 [bottle_](https://segmentfault.com/u/bottle1125) 提供搭建一个简单本地服务器的思路为下：

> - 我们需要一个 HTTP 服务器
> - 对于不同的请求，根据请求的 URL，我们的服务器需要给予不同的响应，因此我们需要一个路由，用于把请求对应到请求处理程序（request handler）
> - 当请求被服务器接收并通过路由传递之后，需要可以对其进行处理，因此我们需要最终的请求处理程序
> - 我们需要从 HTML 文件里提取数据以及展示服务器传入的数据，因此需要将 HTML 和服务器结合起来

首先需要两个文件 index.js 和 index.html。

- index.js

    引用模块

    ```javascript
    const fs = require('fs'); // 系统文件及目录进行读写操作
    const http = require('http'); // 封装了高效的 HTTP 服务器和 HTTP 客户端
    const url = require('url'); // URL 处理
    ```

    路由

    ```javascript
    /**
    * 路由
    * @param {Function} handle 请求处理程序
    * @param {String} pathname 路径
    * @param {Object} response 响应数据
    * @param {Object} postData 请求参数
    */
    function route(handle, pathname, response, postData) {
      if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
      } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('404 Not Found');
        response.end();
      }
    }
    ```

    服务器

    ```javascript
    /**
    * 服务器
    * @param {Function} route 路由
    * @param {Function} handle 请求处理程序
    */
    function start(route, handle) {
      function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname;
        let postData = '';
        switch (request.method) {
          case 'GET':
            postData += url.parse(request.url).query;
            request.setEncoding('utf8');
            route(handle, pathname, response, postData);
            break;
          case 'POST':
            request.addListener('data', function (postDateChunk) {
              postData += postDateChunk;
            });
            request.addListener('end', function () {
              route(handle, pathname, response, postData);
            });
            break;
        };
      }

      http.createServer(onRequest).listen(8080);
      console.log('Server has started');
    }
    ```

    请求处理程序

    ```javascript
    // 请求处理程序
    const handle = {
      // index 接口
      '/public/index.html': function (response, postData) {
        const pathname = __dirname + '/public/index.html';
        fs.readFile(pathname, function (err, data) {
          response.end(data);
        });
      },
      // download 接口
      '/download': function (response, postData) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(JSON.stringify({
          code: 200,
          data: {
            'time': new Date().toLocaleString("en-US")
          }
        }));
        response.end();
      },
      // upload 接口
      '/upload': function (response, postData) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('You have sent: ' + JSON.parse(postData).value);
        response.end();
      }
    };
    ```

    启动服务器

    ```javascript
    // 启动服务器 = 路由处理 + 接口处理
    start(route, handle);
    ```

- index.html

    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>

    <body>
      <input type="text" name="input">
      <button value="submit" name="submit">submit</button>
      <p></p>
      <!-- submit demo -->
      <script>
        const btn = document.querySelector('button');
        btn.addEventListener('click', function () {
          const value = document.querySelector('input').value;
          ajax(value);
        }, true);

        function ajax(value) {
          const xmlhttp;
          if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
          } else {
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
          }

          xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
              document.querySelector('p').innerHTML = xmlhttp.responseText;
            }
          }

          xmlhttp.open('POST', '/upload', true);
          xmlhttp.send(JSON.stringify({
            value: value
          }));

          // xmlhttp.open('GET', '/upload?value='+value, true);
          // xmlhttp.send();
        }
      </script>
    </body>

    </html>
    ```

注意事项：

- 关于 GET 和 POST 方式的请求参数

    GET 的请求参数是以查询参数形式放在 URL 后面的，服务器可以从 URL 上获取参数：`url.parse(request.url).query`。

    POST 的请求参数则需要作为 `xhr.send()` 的参数并转换为字符串来传递，本文使用 `JSON.stringify()` 来转换，再在服务器端用 `JSON.parse()` 转换。

    服务器端在响应两种请求方式时，响应数据格式参考[官方文档](https://nodejs.org/docs/latest-v6.x/api/http.html#http_response_write_chunk_encoding_callback)。

- 关于服务器响应头中的 Content-Type

    一般网站的做法是：当返回 HTML 页面时为 text/html，当使用 JSONP 时为 text/javascript，当使用 CORS 时为 application/json。

- 关于跨域

    如果希望某个接口可以跨域，需要设置响应头的 `Access-Control-Allow-Origin` 为 `*`，比如允许 download 接口跨域，代码修改如下：

    ```shell
    response.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
    ```

    调试的话，只要启动两个不同端口的 index.js 即可，代码仓库里 server.1.js 和 server.2.js 就表示两个不同的 index.js。

- 关于 Node.js 热部署

    Node.js 启动服务器时是将脚本放入内存，以后都会直接访问内存，避免重复载入。这种设计虽然有利于提高性能，却不利于开发调试，导致修改 Node.js 代码后需要手动终止进程并重启才会生效。

    网友 [会奔跑的胖子](http://www.cnblogs.com/benpaodexiaopangzi/) 提出方案：  
    > 你只需要在修改文件后保存，它就能自动替你发布，这就是所谓的热部署。

    supervisor 就是一个 Node.js 的开源热部署工具：

    ```shell
    npm i supervisor -g
    supervisor server.js
    ```

    该网友中还提到另一个开源热部署工具 hotcode，但经测试 hotcode 若使用 express 4.x 则会报错，因为 hotcode 使用的 express.createServer() 已经被废弃。

参考：
> [学习笔记：用Nodejs搭建一个简单的本地服务器](https://segmentfault.com/a/1190000007617042)  
> [NodeJS”热部署“代码，实现动态调试(hotnode，可以实现热更新)](https://www.cnblogs.com/benpaodexiaopangzi/p/5856642.html)