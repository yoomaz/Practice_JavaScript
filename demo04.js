// 函数式编程
var array = [1,4,9,16];
log(array);
var array2 = array.map(Math.sqrt);
log(array2);
var array3 = array2.filter((x) => x > 2);
log(array3);

log(array);
log(array2);




function log(obj) {
    console.log(obj)
}
