# 如何理解HTML语义化
* 首先，语义化，顾名思义，就是你写的HTML结构，是用相对应的有一定语义的英文字母（标签）表示的，标记的，因为HTML本身就是标记语言。

## 为什么要语义化
1. 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构
2. 用户体验
3. 有利于SEO（搜索引擎优化）：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
4. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以有意义的方式来渲染网页
5. 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
# HTML5新增的语义化标签
1. header元素
2.footer元素
3. hgroup元素
`hgroup元素代表“网页”或“section”的标题，当元素有多个层级时，该元素可以将h1到h6元素放在其内，譬如文章的主标题和副标题的组合`
4. nav元素
5. aside元素
6. article元素
# 私有自定义属性
1. data-*:属性用于存储页面或应用程序的私有自定义数据。
2. data-* 属性包括两部分：
* 属性名不应该包含任何大写字母
* 在前缀 "data-" 之后必须有至少一个字符属性值可以是任意字符串

## 获取attrubute里的值
使用dataset/getAttribute
```
<div id="myDiv" data-attribute="value">
在标签里设置H5新增的自定义属性
</div>
```
```
var myDiv = document.getElementByid('myDiv')
var value = myDiv.dataset.attribute
```
# 浏览器内核
    1.IE: trident 内核
    2.Firefox ： gecko 内
    3.Safari:webkit 内核
    4.Opera: 以前是 presto 内核， Opera 现已改用 Google Chrome 的 Blink 内核
    5.Chrome:Blink( 基于 webkit ， Google 与 Opera Software 共同开发 )
# HTML文件里开头都有个很重要的东西，Doctype
声明位于文档中的最前面的位置，处于标签之前。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范。（重点：告诉浏览器按照何种规范解析页面）
# 请你描述一下 cookies，sessionStorage 和 localStorage 的区别?
    1.sessionStorage 和 localStorage 是 HTML5 Web Storage API 提供的，可以方便的在 web 请求之间保存数据。有了本地数据，就可以避免数据在浏览器和服务器间不必要地来回传递。

    2.sessionStorage、 localStorage 、 cookie 都是在浏览器端存储的数据，其中 sessionStorage 的概念很特别，引入了一个“浏览器窗口”的概念。 sessionStorage 是在同源的同窗口（或 tab ）中，始终存在的数据。也就是说只要这个浏览器窗口没有关闭，即使刷新页面或进入同源另一页面，数据仍然存在。关闭窗口后， sessionStorage 即被销毁。同时“独立”打开的不同窗口，即使是同一页面， sessionStorage 对象也是不同的

    3.cookies会发送到服务器端。其余两个不会。

    4.Microsoft 指出 Internet Explorer 8 增加 cookie 限制为每个域名 50 个，但 IE7 似乎也允许每个域名 50 个 cookie 。 Firefox 每个域名 cookie 限制为 50 个。 Opera 每个域名 cookie 限制为 30 个。 Firefox 和 Safari 允许 cookie 多达 4097 个字节，包括名（ name ）、值（ value ）和等号。 Opera 许 cookie 多达 4096 个字节，包括：名（ name ）、值（ value ）和等号。 Internet Explorer 允许 cookie 多达 4095 个字节，包括：名（ name ）、值（ value ）和等号。

## 区别

### Cookie

+ 每个域名存储量比较小（各浏览器不同，大致 4K ）

+ 所有域名的存储量有限制（各浏览器不同，大致 4K ）

+ 有个数限制（各浏览器不同）

+ 会随请求发送到服务器

### LocalStorage

+ 永久存储

+ 单个域名存储量比较大（推荐 5MB ，各浏览器不同）

+ 总体数量无限制

### SessionStorage

+ 只在 Session 内有效

+ 存储量更大（推荐没有限制，但是实际上各浏览器也不同

# link 与 @import 间的区别
    两者都是外部引用CSS的方式，但是存在一定的区别：

    区别1： link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务； @import 属于 CSS 范畴，只能加载 CSS 。

    区别2： link 引用 CSS 时，在页面载入时同时加载； @import 需要页面网页完全载入以后加载。

    区别3： link 是 XHTML 标签，无兼容问题； @import 是在 CSS2.1 提出的，低版本的浏览器不支持。

    区别4： link 支持使用 Javascript 控制 DOM 去改变样式；而 @import 不支持。

# 什么是DOCTYPE，其作用是什么
### DOCTYPE是用来声明文档类型和DTD规范，主要用于文件的合法校验。如果文件代码不合法，浏览器解析时会出错
### DTD规范
```
DTD是一系列语法规则，用来定义XML或HTML的文件类型。浏览器会使用它来判断文档类型，决定使用何种协议来解析，以及切换浏览器模式
```
### 常见的DOCTYPE版本
* HTML5 <!DOCTYPE html>
* HTML 4.0.1 Strict (改DTD包含所有HTML元素，但不包括展示性和弃用的元素)
* HTML 4.0.1 Transitional

# 渲染机制类
## 重排Reflow
### DOM结构中的各个元素都有自己的盒子（模型），这些都需要浏览器根据各种样式来计算结果将元素放到它该出现的位置，这个过程称为reflow
### 触发条件
* 增加、删除、修改DOM节点时，会导致Reflow或者Repaint
* 移动DOM的位置，或者制作动画
* 修改CSS样式
* 改变窗口大小，或者滚动
* 修改网页默认字体
## 重绘Repaint
### 浏览器根据各个盒子的样式按照其各自的CSS特性绘制一边
### 触发条件
* DOM改动
* CSS改动