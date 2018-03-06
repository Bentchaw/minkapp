<template>
<div class="container is-fluid dash">
  <div class="identity">
    <h1>Bienvenu {{candidatID}}</h1>
  </div>
  <div class="columns">

    <div class="column is-primary">
      <div class="requests">
      <ul>
        <span>Ils peuvent vous aider:</span>
        <li>{{matchId}}
          <a class="button is-success is-rounded">Envoyer une damande</a>
          
        </li>
        <li>coachId

        </li>
      </ul>
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
</div>











</div>
</template>