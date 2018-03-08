<template>
<div>
  <h1>Ils peuvent vous aider</h1><br><br><br>
<div v-for="(coach,index) in coaches" :key="index">
<div class="box">
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>{{coach.firstname}} {{coach.lastname}}</p>
        <p>{{coach.description}}</p>
        <footer class="card-footer">
          
          <a class="card-footer-item"></a>   
          <a :href="'/coach/profil/'+coach._id" class="button is-small is-info">Profil</a> 
        </footer>
      </div>
    </div>
  </article>
</div><br>

</div>
</div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      coaches: []
    };
  },
  methods: {
    listCoach() {
      const id = this.$route.params.id;
      console.log(id);
      api.listPotentialCoach(id).then(result => {
        console.log(result);
        console.log(this.$root.user.category);
        for (let i = 0; i < result.length; i++) {
          const tab = this.$root.user.category.filter(
            iterator => result[i].category.indexOf(iterator) !== -1
          );
          if (tab.length >= 3) {
            this.coaches.push(result[i]);
          }
        }
        console.log(this.coaches);
      });
    }
  },
  created() {
    this.listCoach();
  }
};
</script>

<style scoped>
.box {
  box-shadow: 10px 5px 5px rgba(230, 227, 227, 0.427);
  border: 1px solid silver;
}
</style>
