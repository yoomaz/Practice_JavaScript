// 错误处理
var r1;
var r2;
var s = null;

try {
    r1 = s.length;
    r2 = 100;
} catch (e) {
    log("error:" + e);
} finally {
    log("r1:" + r1);
    log("r2:" + r2);
}

function printDelay() {
    log("printDelay:111");
    setTimeout(printDelay, 1000);
}

setTimeout(printDelay, 1000);

function log(obj) {
    console.log(obj)
}
