// ajax
import "js/jquery-3.3.1"

function fun() {
    // 完整写法
    $.ajax({
        url: "www.baidu.com",
        type: "GET",
        data: {username: "yooma", password: "pwd"},
        success: function (data) {
            alert(data)
        },
        error: function (data) {
            alert(data)
        },
        dataType: "text"

    });

    // 快捷写法
    // json 的 key 不用加双双引号
    // $.get("www", {username: "yooma", password: "pwd"}, function (data) {
    //     alert(data);
    // }, "text");

}

