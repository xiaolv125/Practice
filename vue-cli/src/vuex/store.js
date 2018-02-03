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
const getters={
    count(state){
        return state.num+100;
    }
}
const actions={
    actionsAdd({commit}){
        setTimeout(() => {
            commit('add')
        }, 1000);
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})