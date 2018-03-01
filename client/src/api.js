import axios from "axios";
// import config from "./config";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

const accesstoken = axios.create({
  baseURL:
    "https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire"
});

const listjob = axios.create({
  baseURL:
    "https://api.emploi-store.fr/partenaire/offresdemploi/v1/rechercheroffres"
});

const errHandler = err => {
  console.error(err.response.data);
  throw err.response.data;
};
//POLE EMPLOI API
export function access() {
  const peInfo = {
    grant_type: config.grantType,
    client_id: config.clientId,
    client_secret: config.clientSecret,
    scope: config.scopeConnect
  };
  return accesstoken
    .post("/", peInfo)
    .then(res => {
      const { access } = res;
      axios.defaults.headers.common["Authorization"] = "Bearer " + access.token;
      return res.data;
    })
    .catch(errHandler);
}

export function listemploi() {
  return listjob
    .get("/")
    .then(res => {
      const { access } = res;
      axios.defaults.headers.common["Authorization"] = "Bearer " + access.token;
      return res.data;
    })
    .catch(errHandler);
}

export default {
  //AUTH
  signup(userInfo) {
    return service
      .post("/signup", userInfo)
      .then(res => res.data)
      .catch(errHandler);
  },

  login(username, password) {
    return service
      .post("/login", {
        username,
        password
      })
      .then(res => {
        const { data } = res;
        localStorage.setItem("user", JSON.stringify(data));
        axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;
        return data;
      })
      .catch(errHandler);
  },

  getSecret() {
    return service
      .get("/secret")
      .then(res => res.data)
      .catch(errHandler);
  },

  logout() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("user");
  },

  loadUser() {
    const userData = localStorage.getItem("user");
    if (!userData) return false;
    const user = JSON.parse(userData);
    if (user.token && user.name) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
      return user;
    }
    return false;
  }
};
