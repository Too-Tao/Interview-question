function draw(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
      let rand = Math.floor((i + 1) * Math.random());
      [arr[rand], arr[i]] = [arr[i], arr[rand]]
  }
  return arr;
}
const arr = [1, 2, 3, 4, 5, 6]
console.log(draw(arr))
