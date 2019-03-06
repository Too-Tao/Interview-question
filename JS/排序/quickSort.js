function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let left = 0
  let right = arr.length -1
  while(left < right) {
    const p = arr[0]
    while (arr[right] >= p && left < right) {
      right--
    }
    while (arr[left] <= p && left < right) {
      left++
    }
    if (left === right) {
      [arr[0], arr[left]] = [arr[left], arr[0]]
    }
    [arr[left], arr[right]] = [arr[right], arr[left]]
  }
  return quickSort(arr.slice(0, left))
  .concat(quickSort(arr.slice(left, right + 1)))
  .concat(quickSort(arr.slice(right + 1)))
}

const arr = [4, 2, 5, 7, 1, 9]
console.log(quickSort(arr));


// function quickSort(arr, left, right) {
//   var len = arr.length,
//             partitionindex,
//             left = typeof left != 'number' ? 0 : left,
//             right = typeof right != 'number' ? len - 1 : right
//   if (left < right) {
//     partitionIndex = partition(arr, left,right)
//     quickSort(arr, left, partitionindex-1)
//     quickSort(arr, partitionindex+1, right)
//   }
//   return arr
// }

// function partition(arr, left, right) {
//   var pivot = left,
//       index = pivot + 1
//   for (var i = index; i <= right; i++) {
//     if(arr[i] < arr[pivot]) {
//       swap(arr, i, index)
//       index++
//     }
//   }
//   swap(arr, pivot, index - 1)
//   return index-1
// }

// function swap(arr, i, j) {
//   var temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }