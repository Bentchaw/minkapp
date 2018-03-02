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

<style>

</style>
