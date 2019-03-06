function bubbleSort (arr) {
  var len = arr.length
  for (var i = 0; i < len; i++){
    for(var j = 0; j < len - 1 - i; j++){
      if(arr[j] > arr[j+1]) {
        var temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
        //[ arr[j+1], arr[j]] = [ arr[j], arr[j+1]]
      }
    }
  }
  return arr
}

console.log(bubbleSort([99,25,36,78,101]))