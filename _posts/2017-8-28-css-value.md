---

title: CSS 属性赋值
---

# CSS 属性赋值

文档树上的每个元素的 CSS 属性值会涉及到以下四种值：

1. Specified values 指定值
2. Computed values 计算值
3. Used values 应用值
4. Actual values 实际值

实际值应该就是我们平时看到的最终值，关于最终值的计算，文档是这么说明的：

> The final value of a property is the result of a four-step calculation: the value is determined through specification (the "specified value"), then resolved into a value that is used for inheritance (the "computed value"), then converted into an absolute value if necessary (the "used value"), and finally transformed according to the limitations of the local environment (the "actual value").
>  
> 属性的最终值是4步计算的结果：值通过指定来确定（specified value），接着处理得到一个用于继承的值（computed value），然后如果有必要的话转化为一个绝对值（used value），最后根据本地环境限制进行转换（actual value）。

我按自己的理解做了个实验来查看这四个值，其中为了证明 computed value 是用于继承的，将字体设为奇怪的 16.00005px。

```html
<style>
body {
  font-size: 16.00005px;
}
h1 {
  font-size: 10em;
  /* specified value(10em) */
  /* -> computed value(160.0005px)(inherit) */
  /* -> used value(160.0005px) */
  /* -> actual value(160px) */
  em {
    font-size: 50%;
    /* specified value(50%) */
    /* -> computed value(80.0002px)(inherit) */
    /* -> used value(80.0002px) */
    /* -> actual value(80.0002px) */
  }
}
</style>
<body>
  <h1>A <em>large</em> heading</h1>
</body>
```

如代码所示列出了计算的过程，其中要注意两点：

- 一般情况下，分不清是用 computed value 还是用 actual value 来继承，但这个例子中从 em 的 font-size 的 computed value 是 80.0002 可得出是用 h1 的 computed value 来继承的。
- 一般情况下，分不清最终值是 used value 还是 actual value，但这个例子中从 h1 的 font-size 就看到这两个值的不同了。

参考：
> [属性赋值的文档][1]

  [1]: http://www.ayqy.net/doc/css2-1/cascade.html#value-stages
