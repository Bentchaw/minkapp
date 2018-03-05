<template>
    <section class="container">
      <form @submit.prevent="signup">
        <b-field label="Username">
            <b-input type="text" v-model="username"></b-input>
        </b-field>
        <b-field label="email">
            <b-input type="email" v-model="email"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input type="password"
            v-model="password"
                password-reveal>
            </b-input>
        </b-field>
        <b-field label="Nom">
            <b-input type="text" v-model="lastname"></b-input>
        </b-field>
        <b-field label="Prénom">
            <b-input type="text" v-model="firstname"></b-input>
        </b-field>
        <b-field label="Adresse">
            <b-input type="text" v-model="adress"></b-input>
        </b-field>
        <b-field label="Code postal">
            <b-input type="text" v-model="zipcode"></b-input>
        </b-field>
        <b-field label="Ville">
            <b-input type="text" v-model="city"></b-input>
        </b-field>
        <b-field label="rôle">
            <b-select placeholder="Select a category" v-model="role">
                <option value="coach">Coach</option>
                <option value="candidat">Candidat</option>
            </b-select>
        </b-field>
        <b-field label="Description">
            <b-input maxlength="200" type="textarea" v-model="description"></b-input>
        </b-field>
        <!-- catégories -->
        <div class="block">
            <b-checkbox v-model="category"
                native-value="Anglais">
                Anglais
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Faire un CV">
                Faire un CV
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Faire une lettre de motivation">
                Faire une lettre de motivation
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Parler en public">
                Parler en public
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Aptitude informatique">
                Aptitude informatique
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Relation client">
                Relation client
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Demarches administratives">
                Demarches administratives
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Confiance en soi">
                Confiance en soi
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Suite Office">
                Suite Office
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Bâtiment">
                Bâtiment
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Sécurité">
                Sécurité
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Reconversion professionnelle">
                Reconversion professionnelle
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Petite enfance">
                Petite enfance
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Enseignement">
                Enseignement
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Cuisine">
                Cuisine
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Service bar">
                Service bar
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Plomberie">
                Plomberie
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Peinture">
                Peinture
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Taxi / Uber">
                Taxi / Uber
            </b-checkbox>
            <b-checkbox v-model="category"
                native-value="Freelance">
                Freelance
            </b-checkbox>
        </div>
        <button class="button">Créer votre compte</button>
      </form>
    </section>
</template>






<!--
<div>
<form @submit.prevent="signup">
-->
<!-- <div class="field">
  <label class="label">Pseudo</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" v-model="username" value="votre pseudo">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">Ce pseudo est cool</p>
</div> -->

<!-- <div class="field">
  <label class="label">Nom</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" v-model="lastname" value="Nom">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div> -->

<!-- <div class="field">
  <label class="label">Prenom</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" v-model="firstname" value="prenom">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div> -->

<!-- <div class="field">
  <label class="label">Telephone</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="number" placeholder="Text input" value="telephone">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  
</div> -->

<!-- <div class="field">
  <label class="label">age</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="number" placeholder="Text input" value="age">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  
</div> -->

<!-- <div class="field">
  <label class="label">Adresse</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" v-model="adress" value="Adresse">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  
</div>

<div class="field">
  <label class="label">Code Postal</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="number" placeholder="Text input" v-model="zipcode" value="code postal">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  
</div> -->

<!-- <div class="field">
  <label class="label">Ville</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" v-model="city" value="ville">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  
</div> -->

<!-- <div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" v-model="email" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div> -->

<!-- <div class="field">
  <label class="label">Role</label>
  <div class="control">
    <div class="select">
      <select v-model="role">
        <option>Coach</option>
        <option>candidat</option>
      </select>
    </div>
  </div>
</div> -->

<!-- <div class="field">
  <label class="label">Description
  <div class="control">
    <textarea class="textarea" placeholder="description..." v-model="description"></textarea>
  </div>
</div> -->
<!--
<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox" v-model="category" value="Anglais">
     Anglais
     <input type="checkbox" v-model="category" value="Faire un CV">
     Faire un CV
     <input type="checkbox" v-model="category" value="Faire une lettre de motivation">
     Faire une lettre de motivation
     <input type="checkbox" v-model="category" value="Se présenter">
     Se présenter
     <input type="checkbox" v-model="category" value="Parler en public">
     Parler en public
     <input type="checkbox" v-model="category" value="Aptitude informatique">
     Aptitude informatique
     <input type="checkbox" v-model="category" value="Relation client">
     Relation client
     <input type="checkbox" v-model="category" value="Demarches administratives">
     Demarches administratives
     <input type="checkbox" v-model="category" value="Confiance en soi">
     Confiance en soi
     <input type="checkbox" v-model="category" value="Suite Office">
     Suite Office
     <input type="checkbox" v-model="category" value="Bâtiment">
     Bâtiment
     <input type="checkbox" v-model="category" value="Sécurité">
     Sécurité
     <input type="checkbox" v-model="category" value="Reconversion professionnelle">
     Reconversion professionnelle
     <input type="checkbox" v-model="category" value="Petite enfance">
     Petite enfance
     <input type="checkbox" v-model="category" value="Enseignement">
     Enseignement
     <input type="checkbox" v-model="category" value="Cuisine">
     Cuisine
     <input type="checkbox" v-model="category" value="Service bar">
     Service bar
     <input type="checkbox" v-model="category" value="Plomberie">
     Competence18
     <input type="checkbox" v-model="category" value="Peinture">
     Plomberie
     <input type="checkbox" v-model="category" value="Taxi / Uber">
     Taxi / Uber
    <input type="checkbox" v-model="category" value="Freelance">
     Freelance
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-text">Cancel</button>
  </div>
</div> 
</form>
</div>
-->

<script>
import api from "../api";

export default {
  data() {
    return {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      adress: "",
      zipcode: "",
      city: "",
      role: "",
      category: [],
      description: "",

      error: null
    };
  },
  methods: {
    signup() {
      this.error = null;
      api
        .signup({
          username: this.username,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          adress: this.adress,
          zipcode: this.zipcode,
          city: this.city,
          role: this.role,
          description: this.description,
          category: this.category
        })
        .then(result => {
          this.$router.push("/login");
        })
        .catch(err => {
          this.error = err;
        });
    }
  },

  computed: {
    usernameError() {
      if (!this.error) return null;
      if (this.error.name === "UserExistsError") {
        return this.error.message;
      }
    }
  }
};
</script>
<style scoped>

</style>

