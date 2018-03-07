<template>
<!-- 

  <div id="nav">
      <router-link to="/">Mink</router-link> |
      <router-link to="/about">Coach</router-link>
      <router-link to="/about">Candidat</router-link>
      <router-link to="/about">Entreprise</router-link>
      <router-link to="/about">Voir les offres </router-link>
    </div>
  </div>  
</template>
   
<script>
export default {
  name: "navbar"
};
</script>
<style>
#nav {
  background-color: rgb(235, 235, 235);
}
</style> -->

<section class="hero light is-bold is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar ">
      <div class="container ">
        <div class="navbar-brand">
          <a href="/" class="navbar-item">
            <img src="/images/Mink.png" alt="Logo">
          </a>
          <!-- <span class="navbar-burger burger is-transparent" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span> -->
        </div>
  

        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
             <a v-if="isRole === 'candidat'" :href="'/candidat/dashboard/'+this.$root.user.id" class="navbar-item ">
             Dashboard Candidat
            </a>
            <a v-if="isRole === 'coach'" href='/' class="navbar-item ">
             Dashboard Coach
            </a>
             <a href='/' class="navbar-item ">
             Profil
            </a>

            <a href='/login' class="navbar-item ">
             Login
            </a>
            <a href="/register" class="navbar-item">
              Signup
            </a>

            <a href="/logout" class="navbar-item">
              Logout
            </a>
            <span class="navbar-item">
              <a href="/emplois" class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fas fa-search"></i>
                </span>
                <span>Voir les offres</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
  </section>
  </template>
  <script>
export default {
  data() {
    return {
      isRole: this.$root.user.role,
      haveToken: this.$root.user.token
    };
  }
};
</script>

