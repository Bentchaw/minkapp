<template>
  <div class="container">
    <div class="card">
  <div class="card-content">
    <h1 class="title">
      {{candidate.username}}
    </h1>
    <p> {{candidate.firstname}} {{candidate.lastname}}</p>
    <p>{{candidate.email}}</p>
    <p>{{candidate.description}}</p>
  </div>
</div>
<ListReqCandidat/>
  </div>
</template>

<script>
import api from "../api";
import ListReqCandidat from "../components/ListReqCandidat";
export default {
  components: {
    ListReqCandidat
  },
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
