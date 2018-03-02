import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
// import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
<<<<<<< HEAD
import Emploi from "./views/Emploi.vue";
=======
// import Emploi from "./views/Emploi.vue";
>>>>>>> 92bb2bb52c3cd99b234813c18bbbc0d49d44760e

Vue.use(Router);

export default new Router({
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
    // {
    //   path: "/register",
    //   name: "register",
    //   component: Register
    // },
    {
      path: "/login",
      name: "login",
      component: Login
    }
    // {
    //   path: "/emplois",
    //   name: "emplois",
    //   component: Emploi
    // }
  ]
});
