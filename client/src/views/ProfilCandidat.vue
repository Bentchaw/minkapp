<template>
  <div class="container">
    <div class="card">
  <div class="card-content">
    <p class="title">
      {{candidate.username}}
    </p>
    <p> {{candidate.firstname}} {{candidate.lastname}}</p>
    <p>{{candidate.email}}</p>
    <p>{{candidate.description}}</p>
  </div>
</div>
  </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      candidate: {}
    };
  },
  methods: {
    getInfoCandidat() {
      const candidatId = this.$route.params.id;
      api.profilCandidat(candidatId).then(result => {
        // console.log(result);
        this.candidate = result;
      });
    }
  },
  created() {
    this.getInfoCandidat();
  }
};
</script>
