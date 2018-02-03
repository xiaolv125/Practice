<template>
    <div>
        <button @click="$store.commit('sub')">-1</button>
        {{$store.state.num}}--
        <!-- {{count}}-- -->
        {{num}}
        --------
        {{count}}
        <button @click="$store.commit('add')">+1</button>
        <button @click="sub(10)">-1</button> 
        <button @click="actionsAdd()">actions +1</button>   
    </div>
    
</template>

<script>
    import store from "@/vuex/store";
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        store,
        // computed:{
        //     count(){
        //         return this.$store.state.num;
        //     }
        // }

        /*  computed:mapState({
            count:state=>state.count
        }) */
        // computed:mapState({
        //     count(state){
        //         return state.num
        //     }
        // })

    
        computed:{
            ...mapState(['num']),
            ...mapGetters(['count'])
            },
        methods:{
            ...mapMutations(['add','sub']),
            ...mapActions(['actionsAdd'])
        }
    }
</script>

<style scoped>

</style>