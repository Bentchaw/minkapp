<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import Vue from "vue";

export default {
  components: {
    navbar
  }
};
</script>


<style lang="sass">

.is-newWhite
  color: #D2E1DD;

.is-newBlue
    background-color: #ffffff ;  

#app 
  font-family: "Raleway light", San Francisco, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

</style>
