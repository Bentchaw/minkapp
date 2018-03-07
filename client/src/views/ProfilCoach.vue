<template>
  <div class="container">
    <div class="card">
  <div class="card-content">
    <p class="title">
      {{coach.username}}
    </p>
    <p> {{coach.firstname}} {{coach.lastname}}</p>
    <p>{{coach.email}}</p>
    <p>{{coach.description}}</p>
  </div>
</div>
   <a @click="addCoachList" class="button is-primary is-rounded">Envoyer une requête de coaching</a>
  </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      coach: {}
    };
  },
  methods: {
    getInfoCoach() {
      const coachId = this.$route.params.id;
      api.profilCoach(coachId).then(result => {
        // console.log(result);
        this.coach = result;
      });
    },
    addCoachList() {
      const coachId = this.$route.params.id;
      api.addCoach(coachId).then(result => {
        console.log(result);
        this.$router.push("/");
      });
    }
  },
  created() {
    this.getInfoCoach();
  }
};
</script>
