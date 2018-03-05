<template>
    <section class="container">
    <div type="is-danger" has-icon v-if="error">
      {{ error.error }}
    </div>
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

