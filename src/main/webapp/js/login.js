$(".txtb input").on("focus",function () {
    $(this).addClass("focus");
});

$(".txtb input").on("blur",function () {
    if($(this).val() == "")
        $(this).removeClass("focus");
});

function postAction() {
    var sigup =document.querySelector(".sigup");
    var sigup_span =sigup.querySelector("span");

    var sigin =document.querySelector(".sigin");
    var sigin_span =sigin.querySelector("span");

    var poster = sigup.parentElement;

    //隐藏提示语
    function hidden_span() {
        setTimeout(function () {
            //隐藏注册提示语
            toggleClass(sigup, "hidden");
            //显示登陆提示语
            toggleClass(sigin, "hidden");
        },750);
    }

    //左翻
    sigup_span.onclick = function () {
        //执行动画
        toggleClass(poster, "poster_active")

        //隐藏
        hidden_span();
    };

    sigin_span.onclick = sigup_span.onclick;
}

postAction();