/*  * xhr.readyState：XMLHttpRequest对象的状态，等于4表示数据已经接收完毕。

　　* xhr.status：服务器返回的状态码，等于200表示一切正常。

　　* xhr.responseText：服务器返回的文本数据

　　* xhr.responseXML：服务器返回的XML格式的数据

　　* xhr.statusText：服务器返回的状态文本。
*/
//1.创建一个XMLHTTPresquest对象
var xhr = new XMLHttpRequest()

//2. 创建回调函数

xhr.onreadystatechange = function () {
  if ( xhr.readyState == 4 && xhr.status == 200 ) {
    alert( xhr.responseText )
  } else {
    alert( xhr.statusText )
  }
}

//3. 打开与服务器端的连接

xhr.open('Get','/api/123')

//4. 发送请求

xhr.send(null)

//5. 在回调函数中收到服务器端返回的状态码，根据状态码来分析请求是否成功