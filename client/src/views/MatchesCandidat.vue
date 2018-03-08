<template>
<div class="container">
  <h1 class="title">Requête(s) en cours</h1>
<div class="colums">
<div v-for="(coach,index) in coaches" :key="index">
<div class="box column">
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{coach.username}}</strong>
          <br>
          {{coach.email}}
          <br>
        </p>
      </div>
    </div>
  </article>
</div><br>

</div>
</div>
</div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      coaches: {}
    };
  },
  methods: {
    getCoach() {
      const candidatId = this.$route.params.id;
      api.getMatchedList(candidatId).then(res => {
        console.log(res);
        this.coaches = res.coach;
      });
    }
  },
  created() {
    this.getCoach();
  }
};
</script>
