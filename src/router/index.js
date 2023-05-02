import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import loginView from "@/views/loginView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/homeView",
    name: "home",
    component: HomeView,
  },
  {
    // js错误
    path: "/js-error",
    name: "jsError",
    component: () => import("../views/JsErrorView.vue"),
  },
  {
    // 性能视图
    path: "/performance",
    name: "performance",
    component: () => import("../views/PerformanceView.vue"),
  },
  {
    // 请求错误视图
    path: "/req-error",
    name: "reqError",
    component: () => import("../views/ReqErrorView.vue"),
  },
  {
    path: "/",
    name: "loginView",
    component: loginView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
