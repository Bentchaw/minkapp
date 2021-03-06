import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Emploi from "./views/Emploi.vue";
import EmploiDetail from "./views/EmploiDetail.vue";
import RecompDetail from "./views/Recompdetail.vue";
import DashboardCandidat from "./views/DashboardCandidat.vue";
import ProfilCoach from "./views/ProfilCoach.vue";
import ProfilCandidat from "./views/ProfilCandidat.vue";
import MatchesCandidat from "./views/MatchesCandidat.vue";

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
      path: "/recompdetail",
      component: RecompDetail
    },
    {
      path: "/candidat/dashboard/:id",
      component: DashboardCandidat
    },
    {
      path: "/candidat/profil/:id",
      component: ProfilCandidat
    },
    {
      path: "/coach/profil/:id",
      component: ProfilCoach
    },
    {
      path: "/candidat/matches/:id",
      component: MatchesCandidat
    }
  ]
});
