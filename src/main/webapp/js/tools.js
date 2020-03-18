/**
 *
 * @param obj：移动的对象
 * @param target：对象要去的目标位置，传number
 * @param how：对象移动的方式
 * @param speed：对象移动的速度，传正值
 * @param callback：回调函数
 */
function move(obj, target, how, speed, callback) {
    //取消上一次的定时器
    clearInterval(obj.time);

    //对象当前样式值
    var offset = parseInt(getStyle(obj, how));

    // 如果对象当前位置在目标右边，那么需要向左移动，速度为负
    if (offset > target)
        speed = -speed;

    //定时器，每隔10毫秒移动一次
    obj.time = setInterval(function () {

        offset += speed;

        if (speed > 0 && offset >= target || speed < 0 && offset <= target)
            offset = target;

        //设置对象新的偏移量
        obj.style[how] = offset + "px";

        //如果到达终点，则取消定时器
        if (offset == target)
        {
            clearInterval(obj.time);
            //执行结束，执行callback
            callback && callback();
        }

    },10);
}

function getStyle(obj, name) {
    if (window.getComputedStyle)
    {
        return window.getComputedStyle(obj,null)[name];
    }else if (obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
}


/**
 * 增加或删除类
 * @param obj
 * @param className
 * @returns {boolean}
 */
//如果元素有，返回true
function isHasClass(obj, className) {
    var re = new RegExp("\\b"+className+"\\b");
    return re.test(obj.className);
}

//添加css类
function addClass(obj , className) {
    //如果没有类的话，就加类，没有就不管
    if (!isHasClass(obj, className))
    {
        obj.className += " "+className;
    }
}

//删除类
function removeClass(obj, className) {
    if (isHasClass(obj, className))
    {
        obj.className = obj.className.replace(" "+className, "");
    }
}

//添加或删除类
function toggleClass(obj, className) {
    if (isHasClass(obj, className)){
        removeClass(obj, className);
    }
    else {
        addClass(obj, className);
    }
}