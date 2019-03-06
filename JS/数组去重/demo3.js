/*
* 给传入数组排序，排序后相同值相邻，
* 然后遍历时,新数组只加入不与前一值重复的值。
* 会打乱原来数组的顺序
* */
function uniq(array){
  array.sort();
  var temp=[array[0]];
  for(var i = 1; i < array.length; i++){
      if( array[i] !== temp[temp.length-1]){
          temp.push(array[i]);
      }
  }
  return temp;
}

var aa = [1,2,"2",4,9,"a","a",2,3,5,6,5];
console.log(uniq(aa));