---
title: "水平和垂直居中"
category: "css"
---

水平居中

```css
div {
  width: 750px; /* 需要固定宽度 */
  margin: 0 auto;
}
```

```css
div {
  text-align: center; /* 其子元素为 inline 或 inline-block 元素 */
}
```

完全居中

```css
div {
  position: absolute; /* 需要 absolute 定位 */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px; /* 需要固定宽度 */
  height: 100px; /* 需要固定高度 */
}
```

```css
div {
  position: absolute; /* 需要 absolute 定位 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 无需固定宽度 */
}
```

```css
div {
  display: flex; /* 需要 Flex 布局 */
  justify-content: center;
  align-content: middle;
}
```

```html
<!-- 借用 Table 特性 -->
<table><tbody><tr style="text-align: center;"><td>content</td></tr></tbody></table>
```