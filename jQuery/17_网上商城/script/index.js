/**
 * Created by Administrator on 2017/12/3.
 */
//输入框获取/失去焦点
    $(':input').on('focus',function () {
        if(this.value == this.defaultValue){
            this.value = '';
        }
    }).on('blur',function(){
        if(this.value == ''){
            this.value = this.defaultValue;
        }
    });

//网站换肤
    var $skin=getCookie('mySkin') || 'skin_0';
    $('#skin li').on('click',function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $skin=$(this).attr('id');
        $('#nav').attr('class','mainNav '+$skin);
        $('#jnCatalog h2').attr('class',$skin);

        setCookie('mySkin',$skin,10);
    });
    $('#'+$skin).trigger('click');
//子菜单显示
   /* $('.nav>li').on('hover',function () {
        $(this).find('.jnNav').show();
    },function () {
        $(this).find('.jnNav').hide();
    });*/

    $("#nav li").hover(function(){
        console.log(111);
        $(this).find(".jnNav").show();
    },function(){
        $(this).find(".jnNav").hide();
    });


//轮播图
    var prevIdx=0;
    var timer;
    $('#jnImageroll div a').on('mouseover',function(){
        $this=$(this);
        $(this).addClass('chos').siblings().removeClass('chos');
        if($this.index()>prevIdx){
            $('#JS_imgWrap img').eq($this.index()).show().siblings().hide();
        }else{
            $('#JS_imgWrap img').eq($this.index()).stop().fadeIn().siblings().stop().fadeOut();
        }
        prevIdx=$this.index();
    });
    run();
    function run() {
        timer=setInterval(function () {
            prevIdx++;
            if(prevIdx==$('#JS_imgWrap img').length){
                prevIdx=0;
            }
            $('#jnImageroll div a').eq(prevIdx).triggerHandler('mouseover');
        },3000);
    }
    $('#jnImageroll').on('mouseover',function(){
        clearInterval(timer);
    }).on('mouseout',function(){
        run();
    });
