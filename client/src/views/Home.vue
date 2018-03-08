<template>

<div>
  <homePicture />
  <coach />
  <candidat />
  <recompense />
  <pourTous/>  
  </div>
</template>

<style>

</style>


 <script>
import coach from "../components/coach";
import homePicture from "../components/homePicture";
import candidat from "../components/candidat";
import recompense from "../components/recompense";
import pourTous from "../components/pourTous";

export default {
  name: "home",
  components: {
    coach,
    homePicture,
    candidat,
    recompense,
    pourTous
  }
};
//
</script>


