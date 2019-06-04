// 基本数据类型
var a = 1;
var b = 1.1;
var c = NaN;
var d = Infinity;
var e = "string";
var f = [1, 1.1, "string"];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f[1]);

// 字符串
var str = "hello world";
console.log(str.length);
console.log(str.indexOf("hello"));
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.substr(0, 5));

var name = '小明';
var age = 20;
// 注意是反斜杠
console.log(`你好, ${name}, 你今年${age}岁了!`);


// 数组
var arr = [1, 2, 3.14, 'Hello', null, true];
log(arr.length);
// 通过下标修改数组
arr[1] = 3;
log(arr);
arr[9] = 'x'; // 其他元素为未定义 undefined，长度变成 10
log(arr);
// indexOf
log(arr.indexOf(1));
// slice()
log(arr.slice(0, 3));
log(arr.slice()); // 截取所有，相当于拷贝一份数组
// push 和 pop
var arr2 = [1, 2, 3];
arr2.push(4);
log(arr2);
arr2.pop();
log(arr2);
// unshift：头部添加元素 和 shift
log("unshift 和 shift");
arr2.unshift(0);
log(arr2);
arr2.shift();
log(arr2);
// sort
log("sort");
var arr3 = ['c', 'b', 'a'];
arr3.sort();
log(arr3);
// reverse
log("reverse");
arr3.reverse();
log(arr3);

// splice
log("splice");
var arr4 = [1, 2, 3, 4];
log(arr4);
arr4.splice(0, 2); // 从 0 截取 2 个，只截取不添加
log(arr4);
arr4.splice(0, 0, "add1"); // 只添加不截取
log(arr4);
arr4.splice(0, 1, "add2"); // 截取后添加
log(arr4);
// concat
log("concat");
log(arr3.concat(arr4));
// join
log("join");
log(arr3.join("-"));

// 对象
var person = {
    name: 'ming',
    age: 18
};
log(person.name);
// 动态添加属性
person.birth = 1993;
log(person.birth);
// 删除属性
delete person.birth;
// 判断对象是否拥有属性
log('name' in person); // 可能是继承得到的
log(person.hasOwnProperty('birth')); // 不是继承得到的

// 循环
log("for in");
for (var value in arr3) {
    log(value);
}

// Map
log("Map");
var map1 = new Map([['name1', 1], ['name2', 2]]);
log(map1);
map1.set('name3', 3);
log(map1);
log(map1.get('name3'));

// Set
log("Set");
var set1 = new Set([1, 2, 3]);
log(set1);
set1.add(4);
log(set1);

// for of
for (var value2 of set1) {
    log(value2);
}
// iterable 和 forEach
set1.forEach(function (element, sameElement, set) {
    console.log(element);
});

function log(obj) {
    console.log(obj)
}
