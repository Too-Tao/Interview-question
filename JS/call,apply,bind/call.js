var demo1 = {
  name: 'demo1',
  logSomething(p1,p2) {
    console.log(this.name,p1,p2)
  }
}
demo1.logSomething(1,2)

var demo2 = {
  name: 'demo2'
}
demo1.logSomething.call(demo2,3,4)