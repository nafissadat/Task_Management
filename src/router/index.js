import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TaskList from "../views/TaskList.vue";
import CompletedTasks from "../views/CompletedTasks.vue"
import RemainedTasks from "../views/RemainedTasks.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/alltasks",
    name: "tasklist",
    component: TaskList,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
