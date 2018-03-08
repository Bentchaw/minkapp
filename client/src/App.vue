<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <MinkFooter></MinkFooter>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import MinkFooter from "./components/MinkFooter";
import api from "./api";

export default {
  components: {
    navbar,
    MinkFooter
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
    background-color: 	white ;  

#app 
  font-family: "San Francisco", San Francisco, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

</style>
