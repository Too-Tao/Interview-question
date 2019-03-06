/*
*
* 还是得调用“indexOf”性能跟方法1差不多，
* 实现思路：如果当前数组的第i项在当前数组中第一次出现的位置不是i，
* 那么表示第i项是重复的，忽略掉。否则存入结果数组。
* */
function uniq(array){
  var temp = [];
  for(var i = 0; i < array.length; i++) {
      //如果当前数组的第i项在当前数组中第一次出现的位置是i，才存入数组；否则代表是重复的
      if(array.indexOf(array[i]) == i){
          temp.push(array[i])
      }
  }
  return temp;
}

var aa = [1,2,"2",4,9,"a","a",2,3,5,6,5];
console.log(uniq(aa));