<template>
    <div>
        <div>
            <div class="detail-box">
                <div class="detail-img">
                    <img :src="MovieDetailModel.img" alt="">
                </div>
                <div class="detail-info">
                    <h2>{{MovieDetailModel.nm}}</h2>
                    <p>{{MovieDetailModel.sc}}分</p>
                    <p>{{MovieDetailModel.cat}}</p>
                    <p>{{MovieDetailModel.src}}/{{MovieDetailModel.pn}}</p>
                    <p>{{MovieDetailModel.rt}}</p>
                </div> 
            </div>
            <div class="detail-content">
                <h1>主演</h1>
                <p>{{MovieDetailModel.star}}</p>
            </div>
            <div class="detail-content">
                <h1>简介</h1>
                <div v-html="MovieDetailModel.dra"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                MovieDetailModel:{}
            }
        },
        mounted(){
            this.$store.commit("change",{bgColor:'rgb(29, 125, 204)',title:'Movie'});
            axios.get(API_BIRD+'http://m.maoyan.com/movie/'+this.$route.params.id+'.json').then((res)=>{
                this.MovieDetailModel=res.data.data.MovieDetailModel
            }).catch();
        }
    }
</script>

<style scoped>
    .detail-box{
        display: flex;
        margin: 0 0.2rem;
        border-bottom: 1px solid #ccc;
    }
    .detail-img{
        flex: 1;
        width: 0;
        margin-right: 0.2rem;
    }
    .detail-info{
        flex: 2;
        width: 0;
    }
    .detail-info h2{
        text-align: center;
        font-size:0.4rem;
        font-weight: bold;
    }
    .detail-info p{
        font-size: 0.28rem;
    }
    .detail-content{
        margin: 0.2rem;
        border-bottom: 1px solid #ccc;
    }
    .detail-content h1{
        text-align: center;
        font-size: 0.4rem;
    }
    .detail-content p,.detail-content div{
        font-size: 0.28rem;
    }
</style>