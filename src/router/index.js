import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";
import Login from "../components/Login.vue";
import Home from "../views/Home.vue";
import CompletedTasks from "../views/CompletedTasks.vue"
import RemainedTasks from "../views/RemainedTasks.vue"
import BookmarkTasks from "../views/Bookmarks.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter:function(to , from , next){
        if (localStorage.getItem('token')) {
          // console.log('home');
          next()
        }
          else {
            // console.log('login');
            next({
              name:'Login'
            })
          }
        }
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/login",
    name: "Login",
    component: Login, 
    },
  {
    path: "/remainedtasks",
    name: "RemainedTasks",
    component: RemainedTasks,
  },
  {
    path: "/donetasks",
    name: "completedtasks",
    component: CompletedTasks,
  },
  {
    path: "/bookmark",
    name: "BookmarkTasks",
    component: BookmarkTasks, 
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
