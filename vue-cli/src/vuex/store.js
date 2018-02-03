import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    num:1
}
const mutations={
    add(state){
        state.num++;
    },
    sub(state){
        state.num--;
    }
}
export default new Vuex.Store({
    state,
    mutations
})