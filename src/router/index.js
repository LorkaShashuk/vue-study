import Vue from "vue";
import VueRouter from "vue-router";

import Active from "../views/Active.vue";
import Add from "../views/Add.vue";
import Completed from "../views/Completed.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Active",
    component: Active,
  },
  {
    path: "/Completed",
    name: "Completed",

    component: () =>
      import(/* webpackChunkName: "Completed" */ "../views/Completed.vue"),
  },
  {
    path: "/Add",
    name: "Add",
    component: () => import(/* webpackChunkName: "Add" */ "../views/Add.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
