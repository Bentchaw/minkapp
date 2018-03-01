<template>

<div>
  <navbar></navbar>
  <homePicture></homePicture>
  <coach></coach>
  <candidat></candidat>
  <recompense></recompense>
  <pourTous></pourTous>
  <MinkFooter></MinkFooter>
      
    
    
  </div>
</template>

<style>

</style>


 <script>
import coach from "../components/coach";
import homePicture from "../components/homePicture";
import candidat from "../components/candidat";
import recompense from "../components/recompense";
import MinkFooter from "../components/MinkFooter";
import navbar from "../components/navbar";
import pourTous from "../components/pourTous";

export default {
  name: "home",
  components: {
    coach,
    homePicture,
    candidat,
    recompense,
    MinkFooter,
    pourTous,
    navbar
  }
};
//
</script>


