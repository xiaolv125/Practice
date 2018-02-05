<template>
    <div id="aplayer">
        <aplayer autoplay :music="musicData" v-if='isShow' theme="#B128CC" mode='random'></aplayer>
    </div>
</template>

<script>
    import axios from 'axios';
    import Aplayer from 'vue-aplayer';
    export default {
        data() {
            return {
                musicData:[],
                isShow:false
            }
        },
        mounted(){
            this.$store.commit("change",{bgColor:"rgb(177, 40, 204)",title:"Music"});
            axios.get('/static/data/musicdata.json').then(res=>{
                var arr=res.data.musicData;
                for(var i=0;i<arr.length;i++){
                    arr[i].lrc='/static/'+arr[i].lrc;
                    //解构
                    var {title,author,src:url,musicImgSrc:pic,lrc}=arr[i];
                    //属性简写
                    var obj={title,author,url,pic,lrc};
                    //将重新赋值后的数组推进musicData
                    this.musicData.push(obj);
                    console.log(this.musicData)
                }
                
                this.isShow=true;
            }).catch();
        },
        components:{
            Aplayer
        }
    }
</script>

<style scoped>

</style>