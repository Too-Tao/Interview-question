function arrSum(arr) {
  return arr.reduce(( a, b )=> a + b,0)
}

console.log(arrSum([1,2,3,4,5,6]))

// function arrSum(arr) {
//   return arr.reduce( function( accumulator,currentValue ){
//     return accumulator + currentValue
//   }, 0)
// }