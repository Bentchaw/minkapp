<template>
<div>
  <h1>Coachs potentiels</h1>
<div v-for="(coach,index) in coaches" :key="index">
<div class="box">
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>{{coach.firstname}} {{coach.lastname}}</p>
        <p>{{coach.description}}</p>
        <footer class="card-footer">
          <a :href="'/emplois/'+coach._id" class="card-footer-item">Détail profil coach</a>    
        </footer>
      </div>
    </div>
  </article>
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
    listCoach() {
      const id = this.$route.params.id;
      console.log(id);
      api.listPotentialCoach(id).then(result => {
        this.coaches = result;
      });
    }
  },
  created() {
    this.listCoach();
  }
};
</script>
