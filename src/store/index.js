import Vue from 'vue'
import Vuex from 'vuex'
import{
  IDINCREMENT, IDDECREMENT,ADDINFO,DELINFO
}from './mutation-types'

Vue.use(Vuex)

const state = {
  id:0,
  info: 
  {
    time: "",
    name: "",
    desc: ""
  },     
}

const getters = {
  tabledata(state){
    return JSON.parse(window.localStorage.getItem()||'[]')
  }
}

const mutations = {
  [IDINCREMENT](state){
    state.id = window.localStorage.getItem('id');
    state.id += 1;
    window.localStorage.setItem('id',state.id);
  },
  [IDDECREMENT](state){
    state.id = window.localStorage.getItem('id');
    state.id -= 1;
    window.localStorage.setItem('id',state.id);
  },
  [ADDINFO](state,items){
    state.info.push(this.state.info)
    this.state.info = {}
    window.localStorage.setItem('info',JSON.stringify(items))
  },
  [DELINFO](state,index){
    state.info.splice(index,1)
  }
}

const actions = {
  async addInfo(context){
    context.commit(ADDINFO,items)
  },
  async delInfo(context){
    context.commit(DELINFO,index)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store
