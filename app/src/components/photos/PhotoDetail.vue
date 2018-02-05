<template>
    
    <v-touch @swipeleft='next' @swiperight='prev' class="photoDetail" :style={background:bg} v-if='isShow'>    
        <router-link to="/photoList" class="link"></router-link>
    </v-touch>
    
    
</template>

<script>
    import axios from 'axios';
    import VueTouch from 'vue-touch';
    import Vue from 'vue';
    Vue.use(VueTouch,{name:'v-touch'})
    export default {
        data() {
            return {
                photoData: [],
                isShow: false,
                idx:this.$route.params.idx
            }
        },
        methods:{
            next(){
                this.idx++;
                if(this.idx==this.photoData.length){
                    this.idx=0;
                }
                this.$router.push('/PhotoDetail/'+this.idx);
            },
            prev(){
                this.idx--;
                if(this.idx==-1){
                    this.idx=this.photoData.length-1;
                }
                this.$router.push('/PhotoDetail/'+this.idx);
            }
        },
        mounted(){
            this.$store.commit("change",{bgColor:"rgb(32, 200, 32)",title:"Photo"});
            axios.get('/static/data/photodata.json').then(res=>{
                this.photoData=res.data.photoData;
                this.isShow=true;
                
            }).catch();
        },
        computed:{
            bg(){
                 // background:#000 url(../jpg) no-repeat center/contain 
                return `#000 url(${this.photoData[this.idx].src}) no-repeat center/contain`
            }
        },
        components:{
            VueTouch
        }
        
    }
</script>

<style scoped>
    .photoDetail{
        position: absolute;
        left: 0;
        right: 0;
        top:1rem;
        bottom: 1rem;
        /* background: #000; */
    }
    .link{
        width: 100%;
        height: 100%;
        display: block;
        outline: none;
    }
</style>