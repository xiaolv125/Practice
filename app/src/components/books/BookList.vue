<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"><img src="@/assets/images/xiaowangzi.jpg" alt=""></swipe-item>
            <swipe-item class="slide2"><img src="@/assets/images/touyingzi.jpg" alt=""></swipe-item>
            <swipe-item class="slide3"><img src="@/assets/images/zhuifengzheng.jpg" alt=""></swipe-item>
            <swipe-item class="slide4"><img src="@/assets/images/buweijianglai.jpg" alt=""></swipe-item>
            <!-- <swipe-item class="slide5"></swipe-item> -->
        </swipe>
    </div>
</template>

<script>
    import vueswipe from 'vue-swipe/dist/vue-swipe.css';
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        mounted:function(){
            this.$store.commit("change",{bgColor:"rgb(139, 121, 14)",title:"Book"});
        },
        components:{
            Swipe,
            SwipeItem
        }
        
    }
</script>

<style scoped>
.my-swipe {
height: 8rem;
}
 
/* .slide1 {
  background-image: url('./')
}
 
.slide2 {
  background-image:url('./');
}
 
.slide3 {
  background-image:url('./');
} */
/* .slide4 {
  background-image:url('./assets/images/buweijianglai.jpg');
} */
/* .slide5 {
  background-image:url('./../../assets/images/buweijianglai.jpg');
} */

</style>