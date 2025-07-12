---
title: 代码片段
description: "代码片段..."
date: 2025-06-29
category: [javascript, shell]
---

### 将 ASCII 码转换为字符

```javascript
const numbersToText = (numbers) => {
  let text = "";
  for (let i = 0; i < numbers.length; i++) {
    text += String.fromCharCode(numbers[i]); // 将 ASCII 码转换为字符
  }
  return text;
};

console.log(numbersToText("104,101,108,108,111,32,119,111,114,108,100".split(",")));
// "hello world"
```

### 将字符转换为 ASCII 码

```javascript
const textToNumbers = (text) => {
  const numbers = [];
  for (let i = 0; i < text.length; i++) {
    numbers.push(text.charCodeAt(i)); // 将字符转换为 ASCII 码
  }
  return numbers;
};

console.log(textToNumbers("hello world").join(","));
// "104,101,108,108,111,32,119,111,114,108,100"
```

### MacOS 关闭自动睡眠

```shell
sudo pmset -a disablesleep  1
```

### 获取目录下文件

```javascript
const fs = require("fs");
const path = require("path");

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

const directoryPath = "~/Desktop"; // 换为你的目录路径
const allFiles = getAllFiles(directoryPath);

console.log(allFiles);
/**
[
  "/Users/username/Desktop/file1.txt",
  "/Users/username/Desktop/folder1/file2.txt",
  "/Users/username/Desktop/folder1/subfolder/file3.txt",
  "/Users/username/Desktop/folder2/file4.txt"
]
*/
```

### Fetch IP

```javascript
fetch('https://api.ipify.org?format=json')
  .then((response) => response.json())
  .then((data) => console.log('Your IP address is: ', data.ip))
  .catch((error) => console.error('Error fetching IP address: ', error));
// "Your IP address is: 1.1.1.1"
```