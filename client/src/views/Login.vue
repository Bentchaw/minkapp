<template>
<section >
  <div type="is-danger" has-icon v-if="error">
    {{ error.error }}
  </div>
  <form @submit.prevent="login">
<body class="layout-default">
  <section class="hero is-fullheight is-medium is-bold">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <article class="card is-rounded">
                <div class="card-content">
                  <h1 class="title">
                                   
                    <img src="/images/mink.png" alt="logo" width="200">
                  </h1>
                  <p class="control has-icon">
                    <input class="input" type="text" v-model="username" placeholder="votre username">
                    <i class="fa fa-envelope"></i>
                  </p>
                  <p class="control has-icon">
                    <input class="input" type="password" v-model="password" placeholder="mot de passe">
                    <i class="fa fa-lock"></i>
                  </p>
                  <p class="control">
                    <button class="button is-primary is-medium is-fullwidth">
                      <i class="fa fa-user"></i>
                      Login
                    </button>
                  </p>
                </div>
              </article>
            </div>
          </div>
    </div>
  </section>
</body>
</form>
</section>
</template>

<style>
body {
  background-image: url(/images/login.jpeg);
  background-size: cover;
  background-position: center;
}
</style>


<script>
import api from "../api";

export default {
  data() {
    return {
      username: "",
      password: "",

      error: null
    };
  },
  methods: {
    login() {
      this.error = null;
      api
        .login(this.username, this.password)
        .then(user => {
          this.$root.user = user;
          // console.log(this.$root.user);
          this.$router.push("/");
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
