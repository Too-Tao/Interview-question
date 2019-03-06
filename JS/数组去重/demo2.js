/*
* 速度最快， 占空间最多（空间换时间）
*
* 该方法执行的速度比其他任何方法都快， 就是占用的内存大一些。
* 现思路：新建一js对象以及新数组，遍历传入数组时，判断值是否为js对象的键，
* 不是的话给对象新增该键并放入新数组。
* 注意点：判断是否为js对象键时，会自动对传入的键执行“toString()”，
* 不同的键可能会被误认为一样，例如n[val]-- n[1]、n["1"]；
* 解决上述问题还是得调用“indexOf”。*/
function uniq(array){
  var temp = {}, r = [], len = array.length, val, type;
  for (var i = 0; i < len; i++) {
      val = array[i];
      type = typeof val;
      if (!temp[val]) {
          temp[val] = [type];
          r.push(val);
      } else if (temp[val].indexOf(type) < 0) {
          temp[val].push(type);
          r.push(val);
      }
  }
  return r;
}

var aa = [1,2,"2",4,9,"a","a",2,3,5,6,5];
console.log(uniq(aa));