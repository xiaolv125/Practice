/**
 * Created by Administrator on 2017/12/10.
 */
requirejs.config({
    paths:{
        jquery:"jquery-1.12.4"
    }
});

define(['jquery'],function ($) {
    return{
        open:function(){
            var html='<div id="mask">'
                            +'<div class="containner">'
                                    +'<div class="title">'
                                            +'<h2>aaaaa</h2>'
                                            +'<span class="close">x</span>'
                                    +'</div>'
                                    +'<div class="content">'
                                            +'dsfa'
                                    +'</div>'
                            +'</div>'
                        +'</div>';
            $('body').append(html);

        },
        close:function () {

        }
    }
});