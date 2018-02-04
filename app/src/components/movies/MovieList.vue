<template>
    <div class="movieList ">
        <ul>
            <li v-for="(obj,index) in movies" :key="index" @click='detail(obj.id)'>
                <div class='img-box'>
                    <img :src="obj.img" alt="">
                </div>
                <div class="info-box">
                    <h3 class="title">{{obj.nm}}</h3>
                    <p>{{obj.ver}}</p>
                    <p>{{obj.star}}</p>
                    <p>{{obj.showInfo}}</p>
                </div>

            </li>
        </ul>
        <div class="loading" v-show="isLoad">
            <img src="@/assets/images/loading.gif" alt="">
        </div>
        <div class="nothing" v-show="isEnd">
            暂无更多信息
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                movies:[],
                isLoad:true,
                isEnd:false,
                flag:true //没有请求
            }
        },
        methods: {
            loaded(){
                if(this.flag){//当前没有请求的时候才发送
                    this.flag=false; //我正在发请求
                    axios.get(API_BIRD+'http://m.maoyan.com/movie/list.json?type=hot&offset='+this.movies.length+'&limit=10').then((res)=>{
                        if(res.data.data.movies.length<10){
                            // this.isLoad=false;
                            this.isEnd=true;
                        }
                        this.movies=[...this.movies,...res.data.data.movies];
                        // console.log(this.movies);
                        this.isLoad=false;
                        this.flag=true;
                    }).catch(()=>{
                        console.log('请求失败');
                    });
                }
            },
            detail(id){
                this.$router.push('/movieDetail/'+id);
            }
                
        },
        mounted:function(){
            //改变footer top 颜色 标题
            this.$store.commit("change",{bgColor:'rgb(29, 125, 204)',title:'Movie'});
            //axios请求
            // axios.get(API_BIRD+'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10').then((res)=>{
            //     this.movies=res.data.data.movies;
            //     // console.log(this.movies);
            // }).catch();
            this.loaded();
            window.onscroll= () =>{
                //滚动条滚动的高度
                var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
                //可视区高度
                var clientHeight=document.documentElement.clientHeight;
                //整个页面的高度
                var scrollHeight=document.documentElement.scrollHeight;
                if(scrollTop+clientHeight==scrollHeight){
                    //isEnd ==  true 数据加完完  判断到达底部 
                    if(!this.isEnd){ //数据没有加载完 再发请求 loading show
                        this.isLoad=true;
                        this.loaded();
                    }
                    
                }
            }
            
        },
        
    }
</script>

<style scoped>
    .movieList li{
        padding: 0.2rem;
        display: flex;
        border-bottom:0.02rem solid #ccc;
    }
    .img-box{
        flex-grow: 1;
        width: 0;
        margin-right: 0.2rem;
    }
    .img-box img{
        width: 100%;
    }
    .info-box{
        flex-grow: 2;
        width: 0;
    }
    .title{
        font-size: 0.3rem;
        font-weight: bold;
    }
    .info-box p{
        font-size: 0.25rem;
    }
    .loading{
        text-align: center;
    }
    .loading img{
        width: 50%;
        height: 50%;
    }
    .nothing{
        text-align: center;
        font-size: 0.25rem;
        color: #ccc;
    }
</style>