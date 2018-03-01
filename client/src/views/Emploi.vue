<template>
<div>
  <input type="text" name="category" v-model="category" placeholder="indiquer une catégorie">
  <input type="text" name="category" v-model="département" placeholder="indiquer un département"><br>
  <button @click="list">Rechercher</button>
  <ul>
    <li></li>
  </ul>

</div>

</template>

<script>
import { access } from "../api";
import { listemploi } from "../api";

export default {
  data() {
    return {
      category: "",
      city: "",
      jobs = null
    };
  },
  methods: {
    list(){
      access();
      listemploi()
    }
  },

  computed: {}
};
</script>
