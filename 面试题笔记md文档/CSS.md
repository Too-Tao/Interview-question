# BFC
## 要聊BFC那就要先明白两个概念，**Box**和**formatting Context**
1. Box: 一个页面是由多个Box组成的，元素类型以及display的属性决定Box的类型
* block level 的box会参与BFC的形成，display:block,list-item,table
* inline level 的box会参与IFC的形成，display:inline-block,inline-table,inline
2. Formatting Context: 它是W3C CSS2.1规范中的一个概念，定义是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
3. 常用的Formatting Context 有，BFC（块级格式化上下文）和 IFC（行内格式化上下文）

## BFC布局规则
1. 内部的Box会在垂直方向是，一个接一个地放置；
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠；
3. Box的区域不会与float box重叠；
4. BFC就是页面上的一个独立容器，容器里面的子元素不会影响外界元素，反之亦然；
5. 计算BFC的高度时，浮动元素也参与计算

## BFC形成条件
1. 根元素或其他包含它的元素；
2. float不能为none;
3. 存在绝对定位元素，position:absolute/fixed ;
4. 非块级元素，display:inline-block/table-cell/table-caption/flex/inline-flex;
5. 块级元素具有overflow,且值不为visible

## BFC的作用
1. 清除浮动
2. 自适应两栏布局
3. 防止垂直margin重叠
---
# 居中问题
## 行内内容居中
1. text-align:center 水平居中。在块级父元素上设置text-align:center
2. inline-height垂直居中。将要居中的元素的line-height值与其块级父元素的height值一样
3. vertical-align:middle 垂直居中
## 块级元素居中
1. margin/padding 设置居中
2. clac计算数值。margin值为=父容器宽/高的20% - 自身宽/高的50%
```
{
  width: 20rem; 
  height: 20rem; 
  margin-left:calc(50% - 10rem); 
  margin-top:calc(50% - 10rem);
}
```	
3. margin： 0 auto
4. position: absolute
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
