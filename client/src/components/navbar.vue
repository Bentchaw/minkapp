<template>
  <section class="hero light is-bold is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar ">
        <div class="container ">
          <div class="navbar-brand">
            <a href="/" class="navbar-item">
              <img src="/images/Mink.png" alt="Logo">
            </a>
            <!-- MOBILE -->
            <div class="navbar-burger burger" :class="{ 'is-active': isActive }" @click="isActive = !isActive">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item ">
                <div class="field is-grouped" v-if="$root.user && isRole ==='candidat'">
                  <p class="control">
                    <span class="navbar-item">Bonjour {{ $root.user.username }}</span>
                  </p>
                  <p class="control">
                    <router-link class="navbar-item" :to="'/candidat/dashboard/'+this.$root.user.id" @click.native="isActive = false">
                      Dashboard
                    </router-link>
                  </p>
                  <p class="control">
                    <router-link class="navbar-item" :to="'/candidat/profil/'+this.$root.user.id" @click.native="isActive = false">
                      Profil
                    </router-link>
                  </p>
                  <p class="control">
                    <router-link class="navbar-item" :to="'/candidat/matches/'+this.$root.user.id" @click.native="isActive = false">
                      Profil
                    </router-link>
                  </p>
                  <p class="control">
                    <a class="navbar-item" @click="logout">
                      Logout
                    </a>
                  </p>
                  <p class="control">
                  <span class="navbar-item">
                    <a href="/emplois" class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fas fa-search"></i>
                      </span>
                      <span>Voir les offres</span>
                    </a>
                  </span>
                  </p>
                </div>
                <div class="field is-grouped" v-if="$root.user && isRole ==='coach'">
                  <p class="control">
                    Bonjour {{ $root.user.username }}
                  </p>
                  <p class="control">
                    <router-link class="navbar-item" :to="'/coach/dashboard/'+this.$root.user.id" @click.native="isActive = false">
                      Dashboard
                    </router-link>
                  </p>
                  <p class="control">
                    <router-link class="navbar-item" :to="'/coach/profil/'+this.$root.user.id" @click.native="isActive = false">
                      Profil
                    </router-link>
                  </p>
                  <p class="control">
                    <router-link class="navbar-item" :to="'/coach/matches/'+this.$root.user.id" @click.native="isActive = false">
                      Profil
                    </router-link>
                  </p>
                  <p class="control">
                    <a class="navbar-item" @click="logout">
                      Logout
                    </a>
                  </p>
                </div>
         <div class="field is-grouped" v-if="!$root.user">
          <p class="control">
            <router-link
              class="navbar-item" to="/login"
              @click.native="isActive = false"
            >
              Se connecter
            </router-link>
          </p>
          <p class="control">
            <router-link
              class="navbar-item" to="/register"
              @click.native="isActive = false"
            >
              Inscription
            </router-link>
          </p>
        </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      isRole: this.$root.user.role,
      isActive: false
    };
  },
  methods: {
    logout() {
      api.logout();
      this.$root.user = null;
      this.$router.push("/login");
    }
  }
};
</script>