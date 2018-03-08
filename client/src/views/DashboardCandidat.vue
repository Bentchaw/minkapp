<template>
<div class="container is-fluid dash">
  <h1>Bienvenue</h1>
  <br><br>
  <div class="identity">
    
    <div class="columns">
      
      <div class="column is-1"></div>
      
      
      <div class="colum  is-6 ">
      <br><span>Offres selectionnées</span><br><br>
    <ListOfferAdded /><br>
    </div>
    <div class="column"></div>

    <div class="column is-5 coachs">
      
    
  
    <ListPotientialCoach />
     </div>
     <div class="column is-1"></div>
     </div>
  </div>
</div>
</template>


<script>
import ListOfferAdded from "../components/ListOfferAdded";
import ListPotientialCoach from "../components/ListPotientialCoach";

export default {
  components: {
    ListOfferAdded,
    ListPotientialCoach
  }
};
//
</script>
<style  scoped>
.columns {
  background-color: rgba(245, 245, 245, 0.413);
  color: rgba(60, 58, 58, 0.564);
  border-radius: 0.5%;
  border: 1px solid rgba(155, 150, 150, 0.331);
}
</style>


