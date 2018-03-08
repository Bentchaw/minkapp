<template>
<div>
<div v-for="(offer,index) in offers" :key="index">
<div class="box">
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{offer.companyName}}</strong>
          <br>
          {{offer.title}}
          <br>
          {{offer.cityName}} - {{offer.cityCode}}
        </p>
        <footer class="card-footer">
          <a :href="'/emplois/'+offer.offerId" class="card-footer-item">Détail de l'offre</a> 
             
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
      offers: {}
    };
  },
  methods: {
    listJobsAdded() {
      const id = this.$route.params.id;
      console.log(id);
      api.listOfferDashbord(id).then(result => {
        this.offers = result;
      });
    }
  },
  created() {
    this.listJobsAdded();
  }
};
</script>
<style scoped>
.box {
  box-shadow: 10px 5px 5px rgba(230, 227, 227, 0.427);
  border: 1px solid silver;
}
</style>

