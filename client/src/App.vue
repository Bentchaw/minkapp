<template>
  <div id="app">
      <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from "./components/navbar";
// import Vue from "vue";
import api from "./api";

export default {
  components: {
    navbar
  },
  created() {
    const user = api.loadUser();
    if (user) return (this.$root.user = user);
  }
};
</script>


<style lang="sass">

.is-newWhite
  color: #D2E1DD;

.is-newBlue
    background-color: #ccf2ff;  

#app 
  font-family: "Raleway light", San Francisco, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

</style>
