/**
 * Created by Administrator on 2017/12/3.
 */
//放大镜
$('.color_change img').on('click',function () {
    $(this).addClass('hover').parent().siblings().find('img').removeClass('hover');
    var $src=$(this).attr('src');
    var i=$src.indexOf('.');
   // console.log($src);
    var $path=$src.substring(0,i);
    //console.log($path)
    var $format=$src.substring(i);
    $('#bigImg').attr('src',$path+"_one_small"+$format);

    var $i1=$path.split('/');
    var $color=$i1[2];
    $('.imgList_'+$color).removeClass('hide');
    $('.imglist li:not(.imgList_'+$color+')').addClass('hide');
});
$('.imgList li img').on('click',function () {
    var $src=$(this).attr()
})
