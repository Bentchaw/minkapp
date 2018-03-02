<template>
<div>

  <!-- <input type="text" name="title" v-model="title" placeholder="indiquer un métier recherché"> -->
  <input type="text" name="departement" v-model="departement" placeholder="indiquer un département"><br>
  <button @click="recherche">Rechercher</button>

  <ul>
    <li v-for="(job, index) in jobs" :key="index">{{job.title}}</li>
  </ul>

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
