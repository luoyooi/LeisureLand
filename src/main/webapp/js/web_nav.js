//二维码隐藏显示
function web_nav() {
    var web_nav_li = document.querySelector("#web_nav_li");

    var ul = web_nav_li.querySelector("ul");

    var web_nav_li_i = document.querySelector("#web_nav_li i");


    web_nav_li.onmouseover = function () {
        if (isHasClass(ul, "hidden"))
        {
            removeClass(ul, "hidden");
            web_nav_li_i.className = web_nav_li_i.className.replace("fa-caret-down","fa-caret-up");
        }
    }

    web_nav_li.onmouseout = function () {
        if (!isHasClass(ul, "hidden"))
        {
            addClass(ul, "hidden");
            web_nav_li_i.className = web_nav_li_i.className.replace("fa-caret-up","fa-caret-down");
        }
    }
}

web_nav();