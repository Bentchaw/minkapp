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

