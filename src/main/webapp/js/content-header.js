/**
 * 添加图片后ul宽度随着增加
 */
function Execution_animation() {
    /**
     * 添加图片后ul宽度随着增加
     */
    //获取li的个数
    var outer_ul = document.querySelector("#content_header_imgs");
    var outer_ul_lis = outer_ul.getElementsByTagName("li");
    outer_ul.style.width = outer_ul_lis.length * 1360 + "px";

    /**
     * 动态部署按钮的位置
     */
    var btns_ul = document.getElementById("btns");
    var addrs = btns_ul.getElementsByTagName("li");

    /**
     * 点击之后切换图片
     */
    //获取所有的按钮
    var as = btns_ul.getElementsByTagName("a");
    // 图片当前所在位置
    var index = 0;
    //把当前位置按钮设置为黑色
    as[index].style.backgroundColor = "#575757";
    //为按钮绑定事件
    for (let i = 0; i < as.length; i++) {
        as[i].num = i;

        as[i].onclick = function () {
            //设置当前位置
            index = this.num;

            //设置ul偏移
            move(outer_ul, 10 - 1360 * index, "left", 20, function () {
                setA();
            })


        }
    }


    function setA() {
        //当是最后一张的时候，把ul瞬间切换回到开始位置
        if (index == outer_ul_lis.length - 1) {
            index = 0;
            outer_ul.style.left = "10px";
        }
        //设置其他为红色
        changeColor();

        //设置当前按钮颜色
        as[index].style.backgroundColor = "#575757";
    }

    //将其他按钮设置为红色
    function changeColor() {
        for (var i = 0; i < as.length; i++) {
            as[i].style.backgroundColor = "";
        }
    }

    /**
     * 使图片滚动，每次向左边移动510px
     */
    //每隔一秒移动一次ul，每次向左移动510px
    setInterval(function () {
        //索引自增
        index++;

        //判断index
        index = index % outer_ul_lis.length;

        //移动ul
        move(outer_ul, 10 - 1360 * index, "left", 10, function () {
            setA();
        });

    }, 5000);
}

Execution_animation();
