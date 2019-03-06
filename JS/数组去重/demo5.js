// 思路：获取没重复的最右一值放入新数组
/*
* 推荐的方法
*
* 方法的实现代码相当酷炫，
* 实现思路：获取没重复的最右一值放入新数组。
* （检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）*/
function uniq(array){
  var temp = [];
  var index = [];
  var l = array.length;
  for(var i = 0; i < l; i++) {
      for(var j = i + 1; j < l; j++){
          if (array[i] === array[j]){
              i++;
              j = i;
          }
      }
      temp.push(array[i]);
      index.push(i);
  }
  console.log(index);
  return temp;
}

var aa = [1,2,2,3,5,3,6,5];
console.log(uniq(aa));