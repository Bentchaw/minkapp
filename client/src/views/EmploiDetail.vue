<template>
  <div class="container">
    <h1>{{info.companyName}} - offre n° {{info.offerId}}</h1>
    <p>{{info.companyDescription}}</p>
    <p>Poste à pourvoir: {{info.title}}</p>
    <p>Salaire : {{info.salaryComment}}</p>
    <button @click="addOffer">Ajouter au dashbord</button>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      info: {}
    };
  },
  methods: {
    getDetail() {
      api.getToken().then(res => {
        // console.log(res);
        api.showOffer(this.$route.params.id, res.access_token).then(result => {
          this.info = result;
          // console.log(this.info);
        });
      });
    },
    addOffer() {
      const add = {
        companyName: this.info.companyName,
        title: this.info.title,
        description: this.info.description,
        cityName: this.info.cityName,
        contractTypeName: this.info.contractTypeName,
        contractDuration: this.info.contractDuration,
        experienceName: this.info.experienceName,
        gpsLatitude: this.info.gpsLatitude,
        gpsLongitude: this.info.gpsLongitude,
        salaryComment: this.info.salaryComment,
        weeklyWorkTime: this.info.weeklyWorkTime,
        minSalary: this.info.minSalary,
        experienceName: this.info.experienceName,
        skills: this.info.skills,
        activityName: this.info.activityName,
        candidatId: this.$root.user.id
      };
      // console.log(add);
      api.addOfferDashbord(this.$route.params.id, add);
    }
  },
  created() {
    this.getDetail();
  }
};
</script>