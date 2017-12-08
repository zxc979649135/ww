/**
 * Created by lenovo on 17/12/5 005.
 */
//<!-- Initialize Swiper -->
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    navigation: {
        prevEl: '.swiper-button-next',
    },
});




//音乐开始
var music = document.getElementById("music");
var musicimg = document.querySelectorAll(".musicimg")[0];
var musictu = document.querySelectorAll(".musictu")[0];
var audio = document.querySelectorAll("audio")[0];
var abc = 1;
music.onclick=function(){
if (abc==1){
    musicimg.style.display="none";
    musictu.style.animation="none";
    audio.pause();
    abc=0;
}else {
    musicimg.style.display="block";
    musictu.style.animation="run  linear infinite 1s";
    audio.play();
    abc=1;
}
};

