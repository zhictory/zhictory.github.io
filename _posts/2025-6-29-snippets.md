---
title: 代码片段
---

numbersToText

```javascript
const numbersToText = (numbers) => {
  let text = "";
  for (let i = 0; i < numbers.length; i++) {
    text += String.fromCharCode(numbers[i]); // 将 ASCII 码转换为字符
  }
  return text;
};

console.log(numbersToText(process.argv[2].split(",")));
```

textToNumbers

```javascript
const textToNumbers = (text) => {
  const numbers = [];
  for (let i = 0; i < text.length; i++) {
    numbers.push(text.charCodeAt(i)); // 将字符转换为 ASCII 码
  }
  return numbers;
};

console.log(textToNumbers(process.argv[2]).join(","));
```

macos 关闭自动睡眠

```shell
sudo pmset -a disablesleep  1
```

getAllFiles

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

const directoryPath = process.argv[2]; // 换为你的目录路径
const allFiles = getAllFiles(directoryPath);

console.log(allFiles);
```

fetch ip

```javascript
fetch('https://api.ipify.org?format=json')
  .then((response) => response.json())
  .then((data) => console.log('Your IP address is: ', data.ip))
  .catch((error) => console.error('Error fetching IP address: ', error));
```