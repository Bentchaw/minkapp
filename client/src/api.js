import axios from "axios";
// import config from "./config";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

const errHandler = err => {
  console.error(err.response.data);
  throw err.response.data;
};

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
    if (user.token && user.username) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
      return user;
    }
    return false;
  },

  //API Pole Emploi
  search(token, departement) {
    return service
      .post(
        `/pe`,
        {
          info: {
            technicalParameters: {
              page: 1,
              per_page: 150,
              sort: 1
            },
            criterias: {
              departmentCode: departement
            }
          }
        },
        {
          headers: {
            "x-access-token": token
          }
        }
      )
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  },

  getToken() {
    return service.get("/pe/token").then(res => res.data);
  },

  showOffer(id, token) {
    return service
      .get(`/pe/${id}`, {
        headers: {
          "x-access-token": token
        }
      })
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch();
  },

  addOfferDashbord(id, add) {
    return service
      .post(`/pe/${id}`, add)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw err;
      });
  },

  //DASHBOARD Candidate
  listOfferDashbord(id) {
    return service
      .get(`/candidat/dashboard/${id}`)
      .then(res => {
        // console.log(res.data.jobs);
        return res.data.jobs;
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  },

  listPotentialCoach(id) {
    return service
      .get(`/candidat/dashboard/${id}`)
      .then(res => {
        // console.log(res.data.coaches);
        return res.data.coaches;
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  },

  //Profil COACH
  profilCoach(id) {
    return service
      .get(`/coach/profil/${id}`)
      .then(res => {
        // console.log(res);
        return res.data;
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  },
  addCoach(id) {
    return service
      .post(`/coach/profil/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  },

  //Profil CANDIDAT
  profilCandidat(id) {
    return service
      .get(`/candidat/profil/${id}`)
      .then(res => {
        // console.log(res);
        return res.data;
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  },

  //MATCH CANDIDAT

  getMatchedList(id) {
    return service
      .get(`/candidat/matches/${id}`)
      .then(res => {
        // console.log(res.data);
        return res.data;
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  }

  // getMatchedList(id) {
  //   return service
  //     .get(`/candidat/matches/${id}`)
  //     .then(res => {
  //       // console.log(res.data);
  //       return res.data.matched;
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       throw err;
  //     });
  // },
  // getCoachesList(id) {
  //   return service
  //     .get(`/candidat/matches/${id}`)
  //     .then(res => {
  //       // console.log(res);
  //       return res.data.coaches;
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       throw err;
  //     });
  // }
};
