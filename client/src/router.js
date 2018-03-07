import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Emploi from "./views/Emploi.vue";
import EmploiDetail from "./views/EmploiDetail.vue";
<<<<<<< HEAD
import RecompDetail from "./views/Recompdetail.vue";
=======
import DashboardCandidat from "./views/DashboardCandidat.vue";
>>>>>>> 1fe7a461feb85714d668410e854105e92e9dd5f9

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
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
      component: Emploi
    },
    {
      path: "/emplois/:id",
      component: EmploiDetail
    },
    {
      path: "/Recompdetail",
      component: RecompDetail
    },
    {
      path: "/candidat/dashboard/:id",
      component: DashboardCandidat
    }
  ]
});
