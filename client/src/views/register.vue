<template>
<form @submit.prevent="signup">
<div class="field">
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
</div>

<div class="field">
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
  
</div>

<div class="field">
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
  
</div>

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

<div class="field">
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
  
</div>

<div class="field">
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
  
</div>

<div class="field">
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
</div>

<div class="field">
  <label class="label">Role</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Coach</option>
        <option>candidat</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Description
  <div class="control">
    <textarea class="textarea" placeholder="Textarea" v-model="description"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox" v-model="category" name="competences">
     Competences
     <input type="checkbox" v-model="category" name="competences">
     Competence2
     <input type="checkbox" v-model="category" name="competences">
     Competence3
     <input type="checkbox" v-model="category" name="competences">
     Competence4
     <input type="checkbox" v-model="category" name="competences">
     Competence5
     <input type="checkbox" v-model="category" name="competences">
     Competence6
     <input type="checkbox" v-model="category" name="competences">
     Competence7
     <input type="checkbox" v-model="category" name="competences">
     Competence8
     <input type="checkbox" v-model="category" name="competences">
     Competence9
     <input type="checkbox" v-model="category" name="competences">
     Competence10
     <input type="checkbox" v-model="category" name="competences">
     Competence11
     <input type="checkbox" v-model="category" name="competences">
     Competence12
     <input type="checkbox" v-model="category" name="competences">
     Competence13
     <input type="checkbox" v-model="category" name="competences">
     Competence14
     <input type="checkbox" v-model="category" name="competences">
     Competence15
     <input type="checkbox" v-model="category" name="competences">
     Competence16
     <input type="checkbox" v-model="category" name="competences">
     Competence17
     <input type="checkbox" v-model="category" name="competences">
     Competence18
     <input type="checkbox" v-model="category" name="competences">
     Competence19
     <input type="checkbox" v-model="category" name="competences">
     Competence20
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" @click="signup">Submit</button>
  </div>
  <div class="control">
    <button class="button is-text">Cancel</button>
  </div>
</div> 
</form>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      name: "",
      username: "",
      password: "",

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
          category: this.category
        })
        .then(() => {
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
