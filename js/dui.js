$(function () {

    // 天气
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=XinHui&units=metric&appid=12eb771316e1d7bbeff00b2736244158&lang=zh_cn",
        type: "GET",
        success: function (res) {
            $("#weather").attr("src", "https://openweathermap.org/img/wn/" + res.weather[0].icon + ".png");
            $(".weather").prepend("今日天气：" + res.weather[0].description);
            // console.log(res);
            $(".tem").html(res.main.temp + "­°C");
            console.log(res);

        },
        error: function (error_data) {
            // console.log("error");
            $("#weather").attr("src", "https://openweathermap.org/img/wn/01d.png");
            $(".weather").prepend("暂无信息");
            // $(".tem").html("28.20℃");
        }
    })



    // 菜名
    var cai = ["炖汤总数：", "1.陈斛：", "2.益母：", "3.野弓：", "4.人参：",
        "5.野斛：", "6.淮杞：", "7.羊肚菌：", "8.玛卡：", "9.海参：", "10.花胶：",
        "11.猫爪：", "12.鸡骨：", "13.灵斛：", "14.洋鸡：", "15.护肝：", "16.洋斛：", "17.优选：",
        "18.玉竹：", "19.太斛：", "20.川贝：", "21.海参/条：", "22.花胶/条：", "23.官燕："];

    // 创建初始元素
    $.each(cai, function (i, ele) {
        $("form").append("<br><span>" + ele + "</span><input type='text' id=a" + i + " style='border-radius:5px;width:25px;height:15px;border:1px solid skyblue'><span>卖出:</span><input type='text' id=b" + i + " style='border-radius:5px;width:25px;height:15px;border:1px solid skyblue'><span>余数:</span><input type='text' id=c" + i + " style='border-radius:5px;width:25px;height:15px;border:1px solid skyblue'><br>");
    });
    // 备注
    $("form").append("<div style='margin-top: 15px'><span style='position:relative;top:-18px'>备注：</span><textarea id='beizhu' style='width:150px;height:40px;float:inherit;border:1px solid skyblue;border-radius:5px;resize:none'></textarea><br></div><br><input style='width: 70px;height: 40px;border:1px solid skyblue;border-radius:5px' type='button' value='提交' id='submit'>");

    // 提交按钮
    $("#submit").on("click", function () {
        $("form").hide();
        $(".tem").hide();
        $(".city").hide();
        $(".weather").hide();
        $("#hiee").css({ "padding-top": "15px", "border": "1px solid rgba(255, 255, 255, 0.5)" });
        $("#hiee").show();
        window.scrollTo(0, 0);
        // 追加头部和时间
        $("#hiee").append("<h style='font-size:18px'>每日对数炖汤：</h><br>");
        $("#hiee").append("<h style='font-size:18px'>日期：" + $("#date").val() + " " + $("#time").val() + "</h><br>");
        // 追加主元素
        $.each(cai, function (i, ele) {
            if (i == 21 || i == 22)
                $("#hiee").append("<h style='font-size:18px'>" + ele + $("#a" + i + "").val() + "条 " + $("#b" + i + "").val() + "条 " + $("#c" + i + "").val() + "条</h><br>");
            else if (i == 0)
                $("#hiee").append("<h style='font-size:18px'>" + ele + $("#a" + i + "").val() + "个，卖出：" + $("#b" + i + "").val() + "个，余数：" + $("#c" + i + "").val() + "个</h><br>");
            else
                $("#hiee").append("<h style='font-size:18px'>" + ele + $("#a" + i + "").val() + "个 " + $("#b" + i + "").val() + "个 " + $("#c" + i + "").val() + "个</h><br>");
        })
        // 追加备注
        $("#hiee").append("备注：<h>" + $("#beizhu").val() + "</h>");
        // 追加复制和返回按钮
        $("#hiee").append("<div style='width:140px;height:100px;margin: 0 auto'><div style='float: left'><input style='width: 70px;height: 40px' type='button' value='复制' id='fu'></div><div style='float:left'><input style='width: 70px;height: 40px' type='button' value='返回' id='fan'></div></div>");

    });

    // 复制和返回点击事件
    $("#hiee").on("click", "#fu", function () {
        document.execCommand("SelectAll");
        document.execCommand("Copy", "false", null);
    });
    $("#hiee").on("click", "#fan", function () {
        $("#hiee").css({ "padding-top": "", "border": "" });
        $("#hide").show();
        $(".tem").show();
        $(".city").show();
        $(".weather").show();
        $("#hiee").empty();
    });


})