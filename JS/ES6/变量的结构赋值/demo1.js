let [ , , third ] = ['foo', 'bar', 'baz']
console.log(third)

let [head, ...tail] = [1,2,3,4]
console.log(head,tail)

let [foo,bar] = [ , '123']
console.log(bar)

let [x=1,y=2] = [undefined,undefined]
console.log(x,y)