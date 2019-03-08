# JS 中的内置对象  （11个）
|对象|对象名称|
| ---- | ---- |
| Argunments    | 函数参数集合    |
| Array    | 数组    |
| Boolean    | 布尔对象    |
| Date    | 时期事件    |
| Error    | 异常对象    |
| Function    | 函数构造器    |
| Math    | 数字对象    |
| Number    | 数值对象    |
| Object    | 基础对象    |
| RegExp    | 正则表达式对象    |
| String    | 字符串对象    |

# null 与 undefined
## 相似性
`undefined == null // true `  
>在if语句中undefined和null 都会被自动转换为false
```
if (!undefined) {
	console.log("undefined is false")
}
if (!null) {
	console.log("null is false")
}
undefined == null //true
```
## 最初设计
### JavaScript的最初版本：null是一个表示“无”的对象，转为数值时为0
### undefined是一个表示“无”的原始值，转为数值时为NaN
```
Number(undefined)
5 + undefined //NaN
```
## 目前的用法
### null表示没有对象，即该处不应该有值
	1.作为函数的参数，表示该函数的参数不是对象
	2.作为对象原型链的终点
### undefined表示“缺少值”，就是此处应该有个值，但是还没有定义
	1.变量被申明了，但是没有赋值时，就等于undefined
	2.调用函数时，应该提供的参数没有提供，该参数等于undefined
	3.对象没有赋值的属性，该属性的值为undefined
	4.函数没有返回值时，默认返回undefined
# typeof 与 instanceof
## typeof
	1.typeof 除了 null 都可以显示正确的类型  typeof null 返回 Object 是个Bug(讲道理是返回null)
	2.typeof 除了函数返回 function 其余的都返回 Object，所以不能准确判断变量到底是什么类型
## instanceof
```
const Person = function(){}
const p1 = new Person
p1 instanceof Person //true

var str = 'hello world'
str instanceof String // false

var str1 = new String('hello world')
str1 instanceof String // true
```
1. instanceof 它判断的机制是通过原型链判断的
2. 对于原始类型并不能通过**instanceof**直接判断类型
```
class PrimitiveString {
  static [Symbol.hasInstance](x) {
    return typeof x === 'string'
  }
}
console.log('hello world' instanceof PrimitiveString) // true
```
* Symbol.hasInstance 是一个可以让我们自定义instanceof行为的东西。这从侧面反应一个问题，instanceof也不是百分百可信的

# this
![img](https://github.com/Too-Tao/Interview-question/blob/master/%E5%9B%BE%E8%A7%A3this%E6%8C%87%E5%90%91%E9%97%AE%E9%A2%98.png)
1. 寻找函数foo中的this
2. 判断函数类型
   * 箭头函数(包裹箭头函数的第一个普通函数中的this)
   * bind、call、apply(this是第一个参数)
   * 普通函数(函数是如何被调用的)
		1. new 的方式
			* this被固化在实例上
		2. 除了new 的方式
			* foo() 还是 obj.foo()
			1. foo() this为window
			2. this 为 obj
   
# '==' VS '==='
## == 和 === 有什么区别？
### 对于 '==' 来说，如果对比双方类型**不一样**的话，就会进行**类型转换**
**string、boolean都会转Number**  
**Object转基本类型**

# 浅拷贝
## 可以通过Object.assign来解决这个问题，Object.assign只会拷贝所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址。
```
let a = {
	age: 1
}
let b = Object.assign({},a)
a.age = 2
console.log(b.age) //1
```
## ...运算符来实现浅拷贝
```
let a = {
  age: 1
}
let b = { ...a }
a.age = 2
console.log(b.age) // 1
```
# 深拷贝
## 通常可以通过 ***JSON.parse(JSON.stringify(object))*** 来解决

# 原型
---
# ES6部分
# var、let、const 区别
	1.函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部
	2.var 存在提升，我们能在声明之前使用。let、const 因为暂时性死区的原因，不能在声明前使用
	3.var 在全局作用域下声明变量会导致变量挂载在 window 上，其他两者不会
	4.let 和 const 作用基本一致，但是后者声明的变量不能再次赋值
	5.前者的作用范围是块级作用域，而后者的作用范围是函数作用域

# 模块化
## 为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？
### 使用模块化可以给我们带来以下好处
	1.解决命名冲突
	2.提供复用性
	3.提高代码可维护性
### 立即执行函数
 	立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题
### AMD 和 CMD
### CommonJS
	最早在node中使用
#### require
### ES Module 与 CommonJS有几个区别
	1.CommonJS 支持动态导入，也就是 require(${path}/xx.js)，后者目前不支持，但是已有提案
	2.CommonJS 是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
	3.CommonJS 在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是 ES Module 采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
	4.ES Module 会编译成 require/exports 来执行的
# Ajax请求

1. 创建一个XMLHttpRequest 对象  
`
var xhr = new XMLHttpRequest()
`

2. 设置回调函数
```
xhr.onreadystatechange = function () {
      if ( xhr.readyState === 4 ) {
	if ( xhr.status === 200 ) {
		return success( xhr.responseText )
	} else {
	      return fail ( xhr.status )  
	   }
       } else {
          	// HTTP请求还未结束
          }
}
```

3. 使用open方法与服务器建立连接  
`
xhr.open('GET','url')
`
5. 使用send方法发送请求  
`xhr.send()`

# Event Loop
## 执行栈（5个关键点）
	1.单线程
	2.同步执行
	3.一个全局环境
	4.无限的函数环境
	5.函数被调用就会创建一个新的执行栈环境
## 宏任务与微任务
### 宏任务
优先级：主代码块>setImmediate>MessageChannel> serTimeout / setInterval
### 微任务
优先级：process.nextTick > Promise > MutationObserver

## Event Loop 执行顺序
	1.首先执行同步代码，这属于宏任务
	2.当执行所有同步代码后，执行栈为空，查询是否有异步代码需要执行
	3.执行所有微任务后，如有必要会渲染页面
	4.然后开始下轮Event Loop，执行宏任务中的异步代码，也就是 setTimeout 中的回调函数