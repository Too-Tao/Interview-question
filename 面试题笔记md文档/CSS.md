# 选择器的分类
## 基本的
    1.id选择器(id="name")
    2.类选择器(class="head")
    3.标签选择器(body,div,ul,li)
    4.全局选择器(*)
## 复杂的
    1.组合选择器(.head,.head_logo)
    2.后代选择器(#head, .nav)
    3.群组选择器
    4.继承选择器
    5.伪类选择器
    6.子选择器
    7.CSS相邻兄弟选择器
# BFC
## 要聊BFC那就要先明白两个概念，**Box**和**formatting Context**
1. Box: 一个页面是由多个Box组成的，元素类型以及display的属性决定Box的类型
* block level 的box会参与BFC的形成，display:block,list-item,table
* inline level 的box会参与IFC的形成，display:inline-block,inline-table,inline
2. Formatting Context: 它是W3C CSS2.1规范中的一个概念，定义是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
3. 常用的Formatting Context 有，BFC（块级格式化上下文）和 IFC（行内格式化上下文）

## BFC布局规则
    1.内部的Box会在垂直方向上，一个接一个地放置；
    2.Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠；
    3.Box的区域不会与float box重叠；
    4.BFC就是页面上的一个独立容器，容器里面的子元素不会影响外界元素，反之亦然；
    5.计算BFC的高度时，浮动元素也参与计算

## BFC形成条件
    1.根元素或其他包含它的元素；
    2.float不能为none;
    3.存在绝对定位元素，position:absolute/fixed ;
    4.非块级元素，display:inline-block/table-cell/table-caption/flex/inline-flex;
    5.块级元素具有overflow,且值不为visible

## BFC的作用
    1.清除浮动
    2.自适应两栏布局
    3.防止垂直margin重叠
---
# 居中问题
## 行内内容居中
    1.text-align:center 水平居中。在块级父元素上设置text-align:center
    2.inline-height垂直居中。将要居中的元素的line-height值与其块级父元素的height值一样
    3.vertical-align:middle 垂直居中
## 块级元素居中
    1.margin/padding 设置居中
    2.clac计算数值。margin值为=父容器宽/高的50% - 自身宽/高的50%
```
{
  width: 20rem; 
  height: 20rem; 
  margin-left:calc(50% - 10rem); 
  margin-top:calc(50% - 10rem);
}
```	
1. ``margin： 0 auto``
2. ``position: absolute``
```
position: absolute;
width: 200px;
height: 200px;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
```
5. position + translate
```
position: absolute;
width: 500px;
height: 500px;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
```
6. flex弹性布局  
```  
  父级 {
      display:flex
    }  
  居中元素 {
    margin: auto
    }
```
# 一像素边框
## border-image 图片实现
````
.border-image-1px {
  border-width: 1px 0px;
  boder-image: url('...'2 0 stretch)
}
````
## background-image 渐变实现
```
.border {
      background-image:linear-gradient(180deg, red, red 50%, transparent 50%),
      linear-gradient(270deg, red, red 50%, transparent 50%),
      linear-gradient(0deg, red, red 50%, transparent 50%),
      linear-gradient(90deg, red, red 50%, transparent 50%);
      background-size: 100% 1px,1px 100% ,100% 1px, 1px 100%;
      background-repeat: no-repeat;
      background-position: top, right top,  bottom, left top;
      padding: 10px;
  }
```
## viewport + rem 实现
## box-shadow实现
```
div{
    -webkit-box-shadow:0 1px 1px -1px rgba(0, 0, 0, 0.5);
}
```
## transform:scale(0.5) 实现
1. 用**height: 1px**的div，然后根据媒体查询设置**transform:scaleY(0.5)**
```
div{
    height:1px;
    background:#000;
    -webkit-transform: scaleY(0.5);
    -webkit-transform-origin:0 0;
    overflow: hidden;
}
```
2. 用::after和::befor,设置border-bottom：1px solid #000,然后在缩放-webkit-transform: scaleY(0.5);可以实现两根边线的需求
3. 用::after设置border：1px solid #000; width:200%; height:200%,然后再缩放scaleY(0.5); 优点可以实现圆角，京东就是这么实现的，缺点是按钮添加active比较麻烦

# 隐藏元素的方法（8种）
    1.overflow:hidden
    2.opacity: 0
    3.visibility: hidden
    4.display: none
    5.position: aboslute (left:-99999;right:-99999)
    6.clip(clip-path): rect() / inset() / polygon()
    7.z-index: -1000
    8.transform: scaleY(0)

