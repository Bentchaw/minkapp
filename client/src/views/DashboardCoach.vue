<template>
<div class="container is-fluid dash">
  <div class="identity">
    <h1>Bienvenu {{coachID}}</h1>
  </div>
  <div class="columns">

    <div class="column is-primary">
      <div class="requests">
      <ul>
        <span>Vous pouvez aider:</span>
        <li>{{matchId}}
          <a class="button is-success is-rounded">Accepter</a>
          <a class="button is-danger is-rounded">Refuser</a>
        </li>
      </ul>
     </div> 
    </div>
    <div class="column">

    <div class="accepted">
     <ul>
      <span>Coachings en cours</span>
        <li>
        {{acceptedID}}
        </li>
      </ul> 
  </div>
  </div>
</div>











</div>
</template>

<style scoped>
.dash {
  background-color: gainsboro;
}
.banniere {
}
</style>

