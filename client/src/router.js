import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Emploi from "./views/Emploi.vue";
import EmploiDetail from "./views/EmploiDetail.vue";
import RecompDetail from "./views/Recompdetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/emplois",
      name: "emplois",
      component: Emploi
    },
    {
      path: "/emplois/:id",
      name: "emploisDetail",
      component: EmploiDetail
    },
    {
      path: "/Recompdetail",
      component: RecompDetail
    }
  ]
});
