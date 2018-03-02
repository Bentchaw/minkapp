const express = require("express");
const router = express.Router();
const axios = require("axios");
const querystring = require("querystring");
const config = require("../conf");

const accesstoken = axios.create({
  baseURL: "https://entreprise.pole-emploi.fr/connexion/oauth2"
});

const listjob = axios.create({
  baseURL:
    "https://api.emploi-store.fr/partenaire/offresdemploi/v1/rechercheroffres"
});

const showjob = axios.create({
  baseURL: "https://api.emploi-store.fr/partenaire/offresdemploi/v1/offres/"
});

// router.get("/:id", (req, res, next) => {
//   let movieId = req.params.id;
//   Movie.findById(movieId, (err, movie) => {
//     if (err) {
//       return next(err);
//     }
//     res.render("movies/show", {
//       title: "Movie show",
//       movie: movie
//     });
//   });
// });

const body = {
  grant_type: config.grantType,
  client_id: config.clientId,
  client_secret: config.clientSecret,
  scope: config.scopeConnect
};
// console.log(body);
const queryBody = querystring.stringify(body);
const info = {
  technicalParameters: {
    page: 1,
    per_page: 150,
    sort: 1
  },
  criterias: {
    departmentCode: 93
  }
};
router.get("/token", (req, res, next) => {
  accesstoken
    .post(`/access_token`, queryBody, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: {
        realm: "/partenaire"
      }
    })
    .then(result => {
      return res.status(200).json(result.data);
    })
    .catch(err => {
      return res.status(500).json({ message: "marche pas" });
    });
});

router.post("/", (req, res, next) => {
  console.log(req.headers);
  listjob
    .post("/", req.body.info, {
      headers: { Authorization: `Bearer ${req.headers["x-access-token"]}` }
    })
    .then(result => {
      res.status(200).json(result.data);
    })
    .catch(err => {
      console.error(err.response);
      return res
        .status(500)
        .json({ success: false, message: "comportement inattentu" });
    });
});

// show detail
router.get("/:id", (req, res, next) => {
  const offerid = req.params.id;
  showjob
    .get(`/${offerid}`)
    .then(res => {
      return res.status(200).json(res.data);
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        message: "l'offre d'emploi ne peut être chargée"
      });
    });
});

module.exports = router;
