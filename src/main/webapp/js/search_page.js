function search_page_loading() {
    var nods = document.querySelectorAll(".selectDiv");
    var more = document.querySelector(".expand");
    var more_i = document.querySelector(".expand i");

    more.onclick = function () {
        for (var i = nods.length-1; i >=nods.length-2 ; i--) {
            toggleClass(nods[i],"menu_hidden");
        }
        if (isHasClass(more_i, "fa-angle-down"))
        {
            removeClass(more_i, "fa-angle-down");
            addClass(more_i, "fa-angle-up");
        }
        else
        {
            removeClass(more_i, "fa-angle-up");
            addClass(more_i, "fa-angle-down");
        }
    }
}
search_page_loading();