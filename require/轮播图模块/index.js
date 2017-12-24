/**
 * Created by Administrator on 2017/12/23.
 */
require(['Carousel'],function (Carousel) {
    var carousel1=new Carousel();

    carousel1.init({
        selector:'#content1',
        imgDate:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        buttonType:'square',//circle square
        btnPos:'bottom',//center bottom
        speed:'2000'
    });
    carousel2.init({
        selector:'#content2',
        imgDate:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        buttonType:'square',//circle square
        btnPos:'bottom',//center bottom
        speed:'1000'
    });

});