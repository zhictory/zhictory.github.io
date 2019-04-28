---
title: "HTML 标签细读"
---

1. **i、em、b 是基于内容的样式标签**

    - i 和 em 都是以斜体样式显示文本
    - b 是用来强调的
    - dl 与 dt、dd 构成定义列表，其中dt用于定义，dd用于描述。

1. **meta**

    - <meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。 
    - <meta> 标签位于文档的头部，不包含任何内容。
    - <meta> 标签的属性定义了与文档相关联的名称/值对。

1. **dl 的 dt 和 dd 怎么用？**

    参考：
    > http://blog.csdn.net/simaweier/article/details/41075801
    > https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl

1. **em 的理解**

    > The em element represents stress emphasis of its contents.

    `em` 用来强调内容的重点

    > The em element isn’t a generic "italics" element. Sometimes, text is intended to stand out from the rest of the paragraph, as if it was in a different mood or voice. For this, the i element is more appropriate.

    `i` 用来表示带有不同情绪或声调

    > The em element also isn’t intended to convey importance; for that purpose, the strong element is more appropriate.

    `strong` 用来传递事情的重要性
    
    参考：
    > [4.5.2. The em element](https://www.w3.org/TR/2017/REC-html52-20171214/textlevel-semantics.html#the-em-element "4.5.2. The em element")
1. **p 的理解**

    查看文档时留意了以下三点：

    > The `p` element should not be used when a more specific element is more appropriate.

    > List elements (in particular, ol and ul elements) cannot be children of `p` elements.

    > A paragraph, in HTML terms, is not a logical concept, but a structural one.

    笔者翻译：

    > 有更合适的特定标签代替 `p` 时，不应该再使用 `p`。

    > 列表元素（如 `o` 和 `ul`）不能是 `p` 的子元素。

    > 在 HTML 里，一个段落是一个结构性的概念，不是一个逻辑性的概念。

    来看一个例子：
    ```html
    <p>For instance, this fantastic sentence has bullets relating to</p>
    <ul>
      <li>wizards,</li>
      <li>faster-than-light travel, and</li>
      <li>telepathy,</li>
    </ul>
    <p>and is further discussed below.</p>
    ```
    使用 `div` 代替 `p` 更简洁：
    ```html
    <div>For instance, this fantastic sentence has bullets relating to
    <ul>
      <li>wizards,</li>
      <li>faster-than-light travel, and</li>
      <li>telepathy,</li>
    </ul>
    and is further discussed below.</div>
    ```
    再来看一段描述：

    > A `p` element's end tag may be omitted if the `p` element is immediately followed by an `address`, `article`, `aside`, `blockquote`, `div`, `dl`, `fieldset`, `footer`, `form`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `hgroup`, `hr`, `main`, `nav`, `ol`, `p`, `pre`, `section`, `table`, or `ul`, element, or if there is no more content in the parent element and the parent element is not an `a` element.

    这段描述总结出来就是：为了避免结构混乱，`p` 记得要闭合标签，`p` 不要嵌套以上列出的标签。因为 `p` 包含以上标签时会自动拆分为两个 `p`。

    参考：
    > [4.4.1. The p element](https://www.w3.org/TR/html5/grouping-content.html#the-p-element)
    > [HTML &lt;p&gt;元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p)
