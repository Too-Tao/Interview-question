# typeof 与 instanceof
1. typeof 除了 null 都可以显示正确的类型  typeof null 返回 Object 是个Bug(讲道理是返回null)
2. typeof 除了函数返回 function 其余的都返回 Object，所以不能准确判断变量到底是什么类型


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

