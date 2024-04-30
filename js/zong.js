$(function () {
    // arr数组
    var arr = ["1.食物问题次数：", "2.服务问题次数：", "3.漏单次数：", "4.退单次数：", "5.没有及时沽清次数：", "6.客人催单出餐慢次数：", "7.客人表扬菜品次数：", "8.客人表扬服务次数：", "9.收银多出底数金额：", "10.问题解决方案："];

    // 创建元素
    $("#hide").append("<span>每日总结</span><br>");
    $.each(arr, function (i, ele) {
        if (i == 9) // 问题框
            $("#hide").append("<span style='position:relative;top:-10px;'>" + ele + "</span><textarea id=a" + i + " style='border-radius:5px;width:150px;height:40px;float:inherit;resize: none;position:relative;top:12px;;border:1px solid pink'></textarea><br>");
        else
            $("#hide").append("<span>" + ele + "</span><input style='border-radius:5px;width:50px;height:20px;position:relative;top:-2px;border:1px solid pink' id=a" + i + " type='text'><br>");
    })
    // 提交按钮
    $("#hide").append("<input style='border-radius:5px;width: 70px;height: 40px;border:1px solid pink;position:relative;top:15px' type='button' value='提交' id='submit'><br>");

    // 提交事件
    $("#submit").on("click", function () {
        $("#hide").hide();
        $("#hiee").css("padding-top", "15px");
        $("#hiee").show();
        // 追加头部
        $("#hiee").append("<h style='font-size:18px'>每日总结：</h><br>");
        // 追加主元素
        $.each(arr, function (i, ele) {
            $("#hiee").append("<h style='font-size:18px'>" + ele + $("#a" + i + "").val() + "</h><br>");
        })
        // 追加复制和返回按钮
        $("#hiee").append("<div style='width:140px;height:100px;margin: 0 auto'><div style='float: left'><input style='width: 70px;height: 40px' type='button' value='复制' id='fu'></div><div style='float:left'><input style='width: 70px;height: 40px' type='button' value='返回' id='fan'></div></div>");


    })

    // 复制和返回点击事件
    $("#hiee").on("click", "#fu", function () {
        document.execCommand("SelectAll");
        document.execCommand("Copy", "false", null);
    });
    $("#hiee").on("click", "#fan", function () {
        $("#hiee").css("padding-top", "");
        $("#hide").show();
        $("#hiee").empty();
    });
})