<template>
<div>

 <section class="container">
   <section class="marginBottom">
    <b-field>
      <b-input placeholder="Search..."
        type="search"
        icon="magnify" 
        v-model="departement">
      </b-input>
    </b-field>
  <!-- <input type="text" name="departement" v-model="departement" placeholder="indiquer un département"><br> -->
  <!-- <button @click="recherche">Rechercher</button> -->
  <a @click="recherche" class="button is-primary is-rounded ">Rechercher</a>
  </section>
<!-- card bulma -->
<section>
<div class="columns is-multiline">
<div v-for="(job, index) in jobs" :key="index" class="column is-half">
<div class="card">
  <header class="card-header">
    <p class="card-header-title centerTitle">
      {{job.title}}
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <div>{{ job.cityName }} {{job.postcode}}</div>
      <div class="job-desc">{{job.companyDescription}}</div>
      <br>
      <time>Date de création: {{job.creationDate}}</time>
    </div>
  </div>
  <footer class="card-footer">
    <a :href="'/emplois/'+job.offerId" class="card-footer-item">Détails</a>    
  </footer>
</div>
</div>

</div>
</section>
</section>
</div>
</template>

<style scoped>
.job-desc {
  height: 100px;
  overflow: hidden;
}
</style>


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
      // console.log("MEH");
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

<style scoped>
.marginBottom {
  margin-bottom: 30px;
}

.centerTitle {
  text-align: center;
}
</style>

