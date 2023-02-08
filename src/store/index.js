import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    getToken: null,
    bookmarksArray: [],
  },
  getters: {
    getAllTasks(state) {
      return state.tasks;
    },
    getDoneTasks(state) {
      return state.tasks.filter((task) => {
        return task.completed == true;
      });
    },
    getRemainedTasks(state) {
      return state.tasks.filter((task) => {
        return task.completed == false;
      });
    },
    getBookmarkTasks(state){
      return state.bookmarksArray
    }
  },
  mutations: {
    setAllTasks(state, payload) {
      state.tasks = payload;
    },
    setLogin(state, payload) {
      state.getToken = payload;
      localStorage.setItem("token", state.getToken);
      router.push({ name: "Home" });
    },
    logOut(state) {
      state.getToken = "";
      localStorage.clear("token");
      router.push({ name: "Login" });
    },
    removeTask(state, payload) {
      state.tasks = state.tasks.filter((task) => {
        return task.id != payload;
      });
    },
    bookmarkTask(state, payload){
     let result = state.bookmarksArray.find((task)=>{
          return task.id == payload.id;
      })
      console.log(result);
      if(!result){
        state.bookmarksArray.push(payload)
      }
      else{
        state.bookmarksArray = state.bookmarksArray.filter((task)=>{
          return task.id != result.id;
        })
      }
      console.log(state.bookmarksArray, 'this.bookmarksArray');
    }
  },
  actions: {
    SendLoginInfo(context, payload) {
      context.commit("setLogin", payload);
    },
    getAllTasksfromAPI(context) {
      axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/todos",
      })
        .then((data) => {
          // add bookmark to the array
          for (const element of data.data) {
            element.bookmark = false;
            element.bookmark
          }
          context.commit("setAllTasks", data.data);
        })
        .catch((error) => {});
    },
    removeTaskInAPI(context, payload) {
      context.commit("removeTask", payload);
    },
  
  },
  modules: {},
});
