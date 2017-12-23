/**
 * Created by Administrator on 2017/12/23.
 */
define(function () {
    function Carousel() {
        this.$container=$('<div class="carousel-container"></div>');
        this.$imgBox=$('<div class="carousel-img-box"></div>');
        this.$tab=$('<ul class="carousel-tab"></ul>');
        this.$prev=$('<span class="carousel-prev">&lt;</span>');
        this.$next=$('<span class="carousel-next">&gt;</span>');
        this.defaultOption={
            buttonType:'square',
            btnPos:'bottom',
            speed:1000
        }
    }
    Carousel.prototype.init=function (option) {
        $.extend(this.defaultOption,option);
        console.log(this.defaultOption);
        this.$container.append(this.$imgBox).append(this.$tab)
            .append(this.$prev).append(this.$next);

        for(var i=0;i<this.defaultOption.imgDate.length;i++){
            var cls=(i==0)?"seleted":"";
            this.$imgBox.append($('<img class="'+cls+'" src="'+this.defaultOption.imgDate[i]+'"/>'));
            this.$tab.append($('<li class="'+cls+'">'+(i+1)+'</li>'))
        }
        $(this.defaultOption.selector).append(this.$container);
    }
    return Carousel;
})
