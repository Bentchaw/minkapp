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
          <a class="navbar-item">
            <img src="/images/Mink.png" alt="Logo">
          </a>
          <span class="navbar-burger burger is-transparent" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item ">
             Coach
            </a>
            <a class="navbar-item">
              Candidat
            </a>
            <a class="navbar-item">
              Entreprise
            </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
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
  name: "navbar"
};
</script>

