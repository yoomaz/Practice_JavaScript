// dom 内置对象

// window  表示浏览器窗口
log(window.innerHeight + ";" + window.innerWidth); // 当前窗口的宽高

// screen 对象表示屏幕的信息
console.log('Screen size = ' + screen.width + ' x ' + screen.height);

// navigator 对象表示浏览器的信息
console.log('appName = ' + navigator.appName);
console.log('appVersion = ' + navigator.appVersion);
console.log('language = ' + navigator.language);
console.log('platform = ' + navigator.platform);
console.log('userAgent = ' + navigator.userAgent);

// location 对象表示当前页面的URL信息
log(location.protocol);
log(location.host);
log(location.port);
log(location.pathname);
log(location.search);
log(location.hash);

// document 对象表示当前页面
document.title = "hello";

// 用 document 对象提供的 getElementById() 和 getElementsByTagName() 可以按ID获得一个DOM节点和按Tag名称获得一组DOM节点
var drinks = document.getElementsByTagName("dt");
for (var i=0; i<drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}


function log(obj) {
    console.log(obj)
}
