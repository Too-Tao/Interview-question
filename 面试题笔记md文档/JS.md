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
# 函数的作用
## 功能函数
	1.把一块代码逻辑封装起来，以便于重复调用
	2.传入参数返回结果
	3.生命周期短，开始先创建一个内存空间，结束后释放内存空间。闭包是功能函数调用功能函数，生命周期长
## 构造器函数
# 如何面向对象的实现
	1.使用构造器函数实现(通常都是名词)
	2.调用的目的：拿到新开辟的内存的引用
	3.生命周期的长度取决与引用什么时候结束，后回收内存空间
```
function Car () {

}
Car.prototype = {
	start: function() {},
	run: function() {},
	move: function() {},
	close: function() {},
}
```
## 继承
```
Machine.prototype = {
	start: function () {},
	stop: function () {}
}
function Car(name,brand) {

}
Car.prototype = new Machine()
Car.prototype.open = function(){}
Car.prototype.close = function(){}

var m1 = new Machine()
console.log(m1)
var c1 = new Car()
c1.start()
console.log(c1)
```
## __proto__ object new XXX()
## prototype function 
构造器的属性
## constructor
代表构造器函数是哪个函数
# 闭包
## 为什么闭包不会消失
闭包他是通过函数调用，内外间持有数据的句柄，然而让里面的那块空间的生命周期不会消失，所有产生的这块独立的内存空间永远存在，并且这块空间多外是封闭的，所以我们称他为闭包
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
![img](https://github.com/Too-Tao/Interview-question/blob/master/images/%E5%9B%BE%E8%A7%A3this%E6%8C%87%E5%90%91%E9%97%AE%E9%A2%98.png)
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

# ES6 新增哪些新特性
	1.let和const命令
	2.变量的结构赋值
	3.字符串的扩展
	4.数值的扩展
	5.数组的扩展
	6.对象的扩展
	7.函数的扩展
	8.Set和Map数据结构
	9.遍历器
	10.Generator函数
	11.Promise对象
	12.Class
	13.Module
## let和const命令
### let
	1.let不会像var一样声明提前，只能在定义之后使用，之前使用会抛出ReferenceError；
	2.并且只要作用域内有let声明的变量，这个变量就会被绑定，不受原来变量声明规则的影响。即ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些命令，就会报错。这在语法上，称为“暂时性死区”
	3.函数的作用域是其声明时所在的作用域。
	4.不允许在相同作用域内，重复声明同一个变量。因此，不能在函数内部重新声明参数。
### const
	1.对常量重新赋值不会报错，只会默默地失败。
	2.与let命令相同，只在声明所在的块级作用域内有效。
	3.const命令也不存在提升，只能在声明的位置后面使用，提前使用同样会抛出ReferenceError。
	4.同样不可重复声明。
	5.const命令只是指向变量所在的地址，如果将const变量赋值为一个对象，则此常量储存的是一个地址，不可变的只是这个地址，但对象本身是可变的，依然可以为其添加新属性。如果真的想将对象冻结，应该使用Object.freeze方法。
## 变量的结构赋值
## 字符串的扩展
### 增加的处理方法
* codePointAt()：会正确返回四字节的UTF-16字符的码点，对于那些两个字节储存的常规字符，它的返回结果与charCodeAt方法相同。
* String.fromCodePoint()：正确返回编号大于0xFFFF的码点对应的字符，弥补了String.fromCharCode方法的不足。
* at()：返回字符串给定位置的字符，如果该字符的Unicode编号大于0xFFFF，可以返回正确的字符。而charAt()方法只能返回UTF-16编码的第一个字节，不能正确返回。
* 字符的Unicode表示法："\u{20BB7}"的形式可以正确表示超出\uFFFF的双字节字符。
* 正则表达式的u修饰符：对于正则表达式中的.字符、\u{20BB7}大括号字符、量词、\S、i修饰符等，如果需要正确识别码点编号大于0xFFFF的字符，必须添加了u修饰符。
* normalize()：ES6提供String.prototype.normalize()方法，用来将Unicode中字符的不同表示方法统一为同样的形式。（目前不能识别三个或三个以上字符的合成。）
* includes()：返回布尔值，表示是否找到了参数字符串。支持第二个参数，表示开始搜索的位置
* startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。支持第二个参数，表示开始搜索的位置。
* endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。支持第二个参数，表示对前n个字符进行搜索。
* repeat()：返回一个新字符串，表示将原字符串重复n次。
* “粘连”（sticky）修饰符y：全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始，y修饰符确保匹配必须从剩余的第一个位置开始。换而言之，y修饰符号隐含了头部匹配的标志ˆ。
### 字符串模板
	在模板字符串中嵌入变量，需要将变量名写在${}之中。
	如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
	大括号内部可以进行运算，以及引用对象属性，其中还能调用函数。
## 数值的扩展
### 扩展函数
* Number.isFinite()用来检查一个数值是否非无穷（infinity）；Number.isNaN()用来检查一个值是否为NaN。它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，非数值一律返回false。

* Number.parseInt(), Number.parseFloat()：ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。

* Number.isInteger()：用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。

* Number.isSafeInteger()则是用来判断一个整数是否落在Number.MAX_SAFE_INTEGER和		Number.MIN_SAFE_INTEGER这两个常量表示的上下限范围内
#### 提供了许多数学方法：
* Math.trunc(x)方法用于去除一个数的小数部分，返回整数部分；
* Math.sign(x)方法用来判断一个数到底是正数、负数、还是零；
* Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）；
* Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）；
* Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）；
* Math.cbrt(x) 返回x的立方根；
* Math.clz32(x) 返回x的32位二进制整数表示形式的前导0的个数；
* Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）；
* Math.expm1(x) 返回eˆx - 1；
* Math.fround(x) 返回x的单精度浮点数形式；
* Math.hypot(...values) 返回所有参数的平方和的平方根；
* Math.imul(x, y) 返回两个参数以32位整数形式相乘的结果；
* Math.log1p(x) 返回1 + x的自然对数；
* Math.log10(x) 返回以10为底的x的对数；
* Math.log2(x) 返回以2为底的x的对数；
* Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）。
## 数组的扩展
### 数组推导
	数组推导就是直接通过现有数组生成新数组的一种简化写法，通过for...of结构，允许多重循环。注：新数组会立即在内存中生成，这时如果原数组是一个很大的数组，将会非常耗费内存。
### 数组处理的扩展方法
	Array.from():
	用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象，其中包括ES6新增的Set和Map结构。Array.from()还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理。
	Array.of()方法
	用于将一组值，转换为数组。弥补数组构造函数Array()的不足。
## 对象的扩展
### 增强的对象的写法
### Object.is()和Object.assign()
	Object.is()：用来比较两个值是否严格相等。它与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身。

	Object.assign()：用来将源对象（source）的所有可枚举属性，复制到目标对象（target）。它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象。如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
### propt属性
	Proxy用于修改某些操作的默认行为，等于在目标对象之前，架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。而Proxy.revocable()方法则返回一个可取消的Proxy实例。
### Symbol
	Symbol是一种新的原始数据类型，表示独一无二的ID，它通过Symbol函数生成。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。Symbol函数可以接受一个字符串作为参数，表示Symbol实例的名称。
### Proxy
## 函数的扩展
### 箭头函数
### rest运算符(...)
### 函数参数的默认值
## Set和Map数据结构
### 数据结构set
Set结构有以下属性
	1.Set.prototype.constructor：构造函数，默认就是Set函数。
	2.Set.prototype.size：返回Set的成员总数。
Set数据结构有以下方法
	1.add(value):添加某个值，返回Set结构本身
	2.delete(value):删除某个值，返回一个布尔值，表示删除是否成功
	3.has(value):返回一个布尔值，表示该值是否为Set的成员
	4.clear():清除所有成员，没有返回值
### 数据结构Map
Map结构的属性和方法
	1.size:返回成员总数
	2.set(key,value):设置一个键值对
	3.get(key):读取一个键
	4.has(key):返回一个布尔值，表示某个键是否在Map数据结构中
	5.delete(key):删除某个键
	6.clear():清除所有成员
	7.keys():返回键名的遍历器
	8.values():返回键值的遍历器
	9.entries():返回所有成员的遍历器
## 遍历器
## Generator函数
	1.异步操作同步化
	2.控制流管理：yield语句是同步运行，所以多层回调函数可以改写为直线执行的形式
	3.在任意对象上部署iterator接口
## Promise对象
### Promise对象基本介绍
#### 每个任务都有三种状态：默认(pending)、完成(fulfilled)、失败(rejected)
#### Promise.all()、Promise.race()
	Promise.all()用于将多个Promise实例包装成一个新的Promise实例
	Promise.race()与Promise.all()形式类似，不同的是只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的返回值

## Class
## Module
### export命令、import命令、module命令

# 异步加载JS方式有哪些
## 1.Script Dom Element
使用DOM操作添加script
```
(funtion () {
	var scriptEle = document.createElement("script")
	scriptEle.type = "text/javasctipt"
	scriptEle.async = true
	scriptEle.src = "http://cdn.bootcss.com/jquery/3.0.0-beta1/jquery.min.js";
	var x = document.getElementsByTagName("head")[0];
	x.insertBefore(scriptEle, x.firstChild);
})()
```
## 2.onload时异步加载
将要插入的script方法放到一个函数里，然后放在window.onload()方法里执行
## 3.$(document).ready()
```
$(document).ready(function() {
        alert("加载完成！")
      })
```
## 4.<script>标签中添加 async="async"属性
```
<script type="text/javascript" src="xxx.js" async="async"></script>
```
## 5.<script>标签的defer="defer"属性

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