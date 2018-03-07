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
          <a :href="'/coach/profil/'+coach._id" class="card-footer-item">Détail profil coach</a>    
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
        console.log(result);
        console.log(this.$root.user.category);
        for (i = 0; i < result; i++) {
          const tab = this.$route.user.category.filter(
            iterator => result[i].category.indexOf(iterator) !== -1
          );
          if (tab.length >= 3) {
            this.coaches = result;
          }
        }
        this.coaches = result;
      });
    }
  },
  created() {
    this.listCoach();
  }
};
</script>
