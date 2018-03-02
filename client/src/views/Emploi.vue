<template>
<div>

  <!-- <input type="text" name="title" v-model="title" placeholder="indiquer un métier recherché"> -->
  <input type="text" name="departement" v-model="departement" placeholder="indiquer un département"><br>
  <button @click="recherche">Rechercher</button>


<!-- card bulma -->
<div v-for="(job, index) in jobs" :key="index">
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{job.title}}
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <div>{{ job.cityName }} {{job.postcode}}</div>
      <div>{{job.companyDescription}}</div>
      <br>
      <time>Date de création: {{job.creationDate}}</time>
    </div>
  </div>
  <footer class="card-footer">
    <router-link to="">Voir l'offre en détail</router-link>
    <a href="#" class="card-footer-item">Détail</a>
  </footer>
</div>
</div>

</div>

</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      // title: "",
      departement: "",
      jobs: {}
    };
  },
  methods: {
    recherche() {
      console.log("MEH");
      api.getToken().then(res => {
        api.search(res.access_token, this.departement).then(res => {
          this.jobs = res.results;
          console.log("this.job : ", this.jobs);
        });
      });
    }
  }
};
</script>
