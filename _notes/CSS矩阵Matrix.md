---
title: "CSS矩阵Matrix"
---

在 CSS3 的 transform 属性中，可以使用矩阵对元素进行变换：

```
transform: matrix(a, b, c, d, e, f);
```

各个参数在矩阵的对应位置如下图：

![]({{ site.baseurl }}/assets/img/matrix_1.jpg)

如果一个没有元素没有被缩放，默认 a=1，d=1。

 那么 matrix 的值与 transform 里面 rotate / scale / skew / translate 如何对应上呢？

**旋转 rotat**
```
transform: rotate(θdeg); // a=cosθ, b=sinθ, c=-sinθ, d=cosθ
```

**缩放 scale**
```
transform: scale(x, y); // a=x, d=y
```

**偏移 skew**
```
transform: skew(θdeg, βdeg); // b=tanβ, c=tanθ
```

**位移 translate**
```
transform: translate(x, y); // e=x, f=y
```

**旋转+缩放+偏移+位移**
要按照 transform 里面 rotate / scale / skew / translate 所写的顺序将矩阵相乘得到的矩阵才是 matrix 的参数，不能将 rotate / scale / skew / translate 的参数简单地与 matrix 参数对应上。

例如：

```
transform: translate(10px, 20px) rotate(37deg) scale(1.5, 2);
```

各自对应的矩阵是：

translate：

![]({{ site.baseurl }}/assets/img/matrix_2.jpg)

rotate：

![]({{ site.baseurl }}/assets/img/matrix_3.jpg)

scale：

![]({{ site.baseurl }}/assets/img/matrix_4.jpg)

经过矩阵相乘：

![]({{ site.baseurl }}/assets/img/matrix_5.jpg)

变为：

```
transform: matrix(1.2, 0.9, -1.2 1.6, 10, 20); // a=1.2, b=0.9, c=-1.2, d=1.6, e=10, f=20
```

如果要知道元素 transform 后的坐标，则需要坐标和矩阵互相变换，那么如何对一个坐标进行矩阵变换呢？

如下图，第一个是 matrix 矩阵，第二个矩阵是元素 transform 前的坐标矩阵，矩阵相乘后，获得元素 transform 后的坐标矩阵：

![]({{ site.baseurl }}/assets/img/matrix_6.jpg)

第一行是 transform 后的 x 值，第二行是 transform 后的 y 值，第三行是 transform 后的 z 值（2d 不考虑 z 值）。

另外要注意的是，transform 前后的坐标是基于元素的坐标系，如有需要，还要再手动转换为基于页面坐标系。

参考：

> [理解CSS3 transform中的Matrix(矩阵)](http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/)  
