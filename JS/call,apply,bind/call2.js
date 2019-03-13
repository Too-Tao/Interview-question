//第一版call
Function.prototype.call2 = function(context) {
  context.fn = this
  context.fn()
  delete context.fn
}

var foo = {
  value: 1
}
function bar() {
  console.log(this.value)
}

bar.call2(foo)

// var foo = {
//   value: '1',
//   bar() {
//     console.log(this.value)
//   }
// }
// foo.bar()

// var foo = {
//   value: '1'
// }

// function bar () {
//   console.log(this.value)
// }

// bar.call(foo)