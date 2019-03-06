// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i)
//   },1000)
// }

//闭包解决办法
for( var i = 0;i<5;i++) {
  (function(i){
    setTimeout(function(){
      console.log(i)
    }, 1000)
  })(i)
}