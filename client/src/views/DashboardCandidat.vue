<template>
<div class="container is-fluid dash">
  <div class="identity">
    <h1>Bienvenue</h1>
    <article>
    <ListOfferAdded />
    </article>
    <aside>
    <ListPotientialCoach />
    </aside>
  </div>
  <!-- <div class="columns">

    <div class="column is-primary">
      <div class="requests">
        <span>Ils peuvent vous aider:</span>
        <li>{{matchId}}
          <a class="button is-success is-rounded">Envoyer une damande</a>
          
        </li>
        <li>coachId

        </li>
     </div> 
    </div>
    <div class="column">

    <div class="postule">
     <ul>
      <span>Je postule</span>
        <li>
        {{offerId}}
        </li>
      </ul> 
  </div>
  </div>
  </div> -->
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

