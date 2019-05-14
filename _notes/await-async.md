---
title: "await 和 async"
category: "javascript"
---

思考下面代码的输出：

```javascript
console.log(1);
let promiseDemo = new Promise((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    let random = Math.random();
    if (random >= 0.2) {
      resolve("success");
      console.log(3);
    } else {
      reject("failed");
      console.log(3);
    }
  }, 1000);
});

async function test() {
  console.log(4);
  let result = await promiseDemo;
  return result;
}

test()
  .then(result => {
    console.log(5);
  })
  .catch(result => {
    console.log(5);
  });

console.log(6);

// 1 2 4 6 3 5
```

async 和 await 使用场景：

1. 需要发送多个请求，而后面请求的发送总是需要依赖上一个请求返回的数据。
1. 在循环中使用 await。如果在是循环中使用 await，就需要牢记一条：必须在 async 函数中使用。

参考：

> [与 Promise 血脉相连的 async/await](https://juejin.im/post/5a9516885188257a6b061d72)
