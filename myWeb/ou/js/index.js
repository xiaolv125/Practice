/**
 * Created by lenovo on 2018/2/3.
 */
//轮播图部分
var oResumeContainer = getEleByClassName("resume-container")[0];
var aImg = oResumeContainer.getElementsByTagName("li");
var oResumeBtn = getEleByClassName("resume-btn")[0];
var aResumeBtn = oResumeBtn.getElementsByTagName("li");
for (var i = 0; i < aImg.length; i++){
    aImg[i].style.display = "none";
}
//让中间的图片显示
aImg[(aImg.length-1)/2].style.display = "block";
aResumeBtn[(aImg.length-1)/2].innerHTML = '<i class="iconfont icon-xin"></i>';
for (var j = 0; j < aResumeBtn.length; j++){
    aResumeBtn[j].index = j;
    aResumeBtn[j].onclick = function () {
        var index;
        for (var k = 0; k < aImg.length; k++){
            if (aImg[k].style.display == "block"){
                index = k;
            }
            aResumeBtn[k].innerHTML = '<i class="iconfont icon-gengduo-hengxiang"></i>';
        }
        aResumeBtn[this.index].innerHTML = '<i class="iconfont icon-xin"></i>';
        if (index != this.index){
            opacityAnimate(aImg,index,this.index);
        }
    };
}
//底部圆圆导航栏部分
var oFooterMiddle = getEleByClassName("footer-middle")[0];
var aMiddleI = oFooterMiddle.getElementsByTagName("i");
oFooterMiddle.flag = true;
var oFooterProfile = getEleByClassName("footer-profile")[0];
var oFooterSkills = getEleByClassName("footer-skills")[0];
var oFooterEducation = getEleByClassName("footer-education")[0];
var oFooterExperience = getEleByClassName("footer-experience")[0];
var oFooterHobby = getEleByClassName("footer-hobby")[0];
var oFooterContacts = getEleByClassName("footer-contacts")[0];
function animate(obj,bTop,bLeft,top,left) {
    if (obj.timer){

    }else{
        obj.timer = window.setInterval(function () {
            if (parseInt(obj.style.top) != top){
                top > bTop ? bTop++ : bTop--;
                obj.style.top = bTop + "%";
            }
            if (parseInt(obj.style.left) != left){
                left > bLeft ? bLeft++ : bLeft--;
                obj.style.left = bLeft + "%";
            }
            if (parseInt(obj.style.top) == top && parseInt(obj.style.left) == left){
                window.clearInterval(obj.timer);
                //不知道为什么定时器没有清掉
                obj.timer = 0;
            }
        },10);
    }
}
oFooterMiddle.onclick = function () {
    if (oFooterMiddle.flag == true){
        //打开
        aMiddleI[0].style.display = "none";
        aMiddleI[1].style.display = "block";
        animate(oFooterProfile,30,30,0,45);
        animate(oFooterSkills,30,30,30,60);
        animate(oFooterEducation,30,30,60,45);
        animate(oFooterExperience,30,30,60,15);
        animate(oFooterHobby,30,30,30,0);
        animate(oFooterContacts,30,30,0,15);
    }else {
        //关闭
        aMiddleI[0].style.display = "block";
        aMiddleI[1].style.display = "none";
        animate(oFooterProfile,0,45,30,30);
        animate(oFooterSkills,30,60,30,30);
        animate(oFooterEducation,60,45,30,30);
        animate(oFooterExperience,60,15,30,30);
        animate(oFooterHobby,30,0,30,30);
        animate(oFooterContacts,0,15,30,30);
    }
    oFooterMiddle.flag = !oFooterMiddle.flag;
};
//让滚动条滚动
var oProfile = getEleByClassName("profile")[0];
var oSkills = getEleByClassName("skills")[0];
var oEducation = getEleByClassName("education")[0];
var oExperience = getEleByClassName("experience")[0];
var oHobby = getEleByClassName("hobby")[0];
var oContacts = getEleByClassName("contacts")[0];
var oHeaderProfile = getEleByClassName("header-profile")[0];
var oHeaderSkills = getEleByClassName("header-skills")[0];
var oHeaderEducation = getEleByClassName("header-education")[0];
var oHeaderExperience = getEleByClassName("header-experience")[0];
var oHeaderHobby = getEleByClassName("header-hobby")[0];
var oHeaderContacts = getEleByClassName("header-contacts")[0];
function scroll(click,obj) {
    if (click.timer) {

    } else {
        //网页被卷起来的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //元素距离页面顶部的高度
        var top = obj.offsetTop;
        click.timer = window.setInterval(function () {
            if (Math.abs(scrollTop - top) > 1) {
                //加速运动
                scrollTop < top ? scrollTop += (top - scrollTop) / 30 : scrollTop -= (scrollTop - top) / 30;
                //使滚动条滑动
                window.scrollTo(0, scrollTop);
            } else {
                window.scrollTo(0, top);
                window.clearInterval(click.timer);
                click.timer = 0;
            }
        }, 1);
    }
}
oHeaderProfile.onclick = function(){
    scroll(oHeaderProfile,oProfile);
};
oHeaderSkills.onclick = function () {
    scroll(oHeaderSkills,oSkills);
};
oHeaderEducation.onclick = function () {
    scroll(oHeaderEducation,oEducation)
};
oHeaderExperience.onclick = function () {
    scroll(oHeaderExperience,oExperience);
};
oHeaderHobby.onclick = function () {
    scroll(oHeaderHobby,oHobby);
};
oHeaderContacts.onclick = function () {
    scroll(oHeaderContacts,oContacts);
};
oFooterProfile.onclick = function () {
    scroll(oFooterProfile,oProfile);
};
oFooterSkills.onclick = function () {
    scroll(oFooterSkills,oSkills);
};
oFooterEducation.onclick = function () {
    scroll(oFooterEducation,oEducation)
};
oFooterExperience.onclick = function () {
    scroll(oFooterExperience,oExperience);
};
oFooterHobby.onclick = function () {
    scroll(oFooterHobby,oHobby);
};
oFooterContacts.onclick = function () {
    scroll(oFooterContacts,oContacts);
};



















