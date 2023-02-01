import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    // messageAPI: null
  },
  getters: {
    getAllTasks(state) {
      return state.tasks;
    },
    getDoneTasks(state) {
      return state.tasks.filter((task)=> {
        return task.completed == true
      })
    },
    getRemainedTasks(state){
       return state.tasks.filter((task)=> {
        return task.completed == false
      })
    }
  },
  mutations: {
    setAllTasks(state, payload) {
      state.tasks = payload;
    },
    // setLogin(state,payload) {
    //   state.messageAPI = payload
    //   console.log(state.messageAPI, 'state.messageAPI');
    // }
  },
  actions: {
    // SendLoginInfo(context, payload){
    //   context.commit("setLogin", payload )
    // },
    getAllTasksfromAPI(context) {
      axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/todos",
      })
        .then((data) => {
          context.commit("setAllTasks", data.data);
        })
        .catch((error) => {});
    },
  },
  modules: {},
});
