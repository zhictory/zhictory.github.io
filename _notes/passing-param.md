---
title: "传递参数"
category: "javascript"
---

引用类型的参考在传递时，到底是按值传递还是按引用传递呢？下面举个例子说明：

```javascript
var trie = {};

function add(newTrie, str) { // 构建一个newTrie
  for (var i = 0, len = str.length; i < len; i++) {
    var value = str[i];
    if (newTrie[value] == null) {
      newTrie[value] = {
        val: value,
        deep: i,
        appearCount: 1
      };
    } else {
      newTrie.appearCount++;
    }
    newTrie = newTrie[value];
  }
  newTrie = new Object();
  console.log(trie);
}
add(trie, "banana");
```

上面的例子中，将 trie 传递给函数 add，那么：

1. 按值传递的话，当 newTrie 修改属性时，trie 会有相同的变化，当 newTrie = new Object() ，trie 不会改变，因为 newTrie 指向新对象地址了。
2. 按引用传递的话，当 newTrie 修改属性时，trie 会有相同的变化，当 newTrie = new Object() 时，trie 会改变，因为修改了同个地址的对象。

结果是第一种情况，所以传递参数是按值传递（本质是复制）的。

下面用图解释两者的区别：

![]({{ site.baseurl }}/assets/img/params.png)

[传递参数](https://www.processon.com/view/link/579acecbe4b03e26b9144312)