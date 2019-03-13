# 对于Vue是一套渐进式框架的理解
## vue.js的两个核心是什么
### 数据驱动，也叫双向数据绑定  
    Vue.js数据观测原理在技术实现上，利用的是ES5
    Object.defineProperty和存储器属性：getter和setter
    可称为基于依赖收集的观测机制。  
    核心是VM，即  ViewModel，保证数据和视图的一致性
### 组件系统
    1、模板（template）：模板声明了数据和最终展现给用户的DOM之间的映射关系。
    2、初始数据（data）：一个组件的初始数据状态。对于可复用的组件来说，这通常是私有的状态。
    3、接受的外部参数(props)：组件之间通过参数来进行数据的传递和共享。
    4、方法（methods）：对数据的改动操作一般都在组件的方法内进行。
    5、生命周期钩子函数（lifecycle hooks）：一个组件会触发多个生命周期钩子函数，最新2.0版本对于生命周期函数名称改动很大。
    6、私有资源（assets）：Vue.js当中将用户自定义的指令、过滤器、组件等统称为资源。一个组件可以声明自己的私有资源。私有资源只有该组件和它的子组件可以调用。
# MVVM
在JS底层API通过Object.defineProperty()监控模型对象里面的属性变化  
window.onload = function() {
  function mv(obj,prop,value) {
      var h1 = app.querySelector('h1')
      h1.innerHTML = value
      Object.defineProperty(model,title, {
        enumerable: true, // 是否可以迭代
        configurable: true 
        get: function () {
          return value
        }, //当属性被获取值的时候
        set: function (nvalue) {
          if( nvalue != value) {
            value = nvalue
          }
          app.querySelect(h1).innerHTML = value
        }, //当属性被赋值的时候
    }) 
  }
}
 