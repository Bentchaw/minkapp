const express = require("express");
const router = express.Router();
const axios = require("axios");
const querystring = require("querystring");
const config = require("../conf");
const Job = require("../models/job");

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

//get TOKEN
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

// show detail
router.get("/:id", (req, res, next) => {
  const offerid = req.params.id;
  // console.log(offerid);
  // console.log(req.headers["x-access-token"]);
  showjob
    .get(`/${offerid}`, {
      headers: { Authorization: `Bearer ${req.headers["x-access-token"]}` }
    })
    .then(result => {
      return res.status(200).json(result.data);
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        message: "l'offre d'emploi ne peut être chargée"
      });
    });
});
//add job to dashboard
router.post("/:id", (req, res, next) => {
  const offer = {
    companyName: req.body.companyName,
    title: req.body.title,
    description: req.body.description,
    cityName: req.body.cityName,
    contractTypeName: req.body.contractTypeName,
    contractDuration: req.body.contractDuration,
    experienceName: req.body.experienceName,
    gpsLatitude: req.body.gpsLatitude,
    gpsLongitude: req.body.gpsLongitude,
    salaryComment: req.body.salaryComment,
    weeklyWorkTime: req.body.weeklyWorkTime,
    minSalary: req.body.minSalary,
    experienceName: req.body.experienceName,
    skills: req.body.skills,
    activityName: req.body.activityName,
    candidatId: req.body.candidatId
  };
  Object.keys(offer).forEach(k => {
    console.log(typeof offer[k]);
  });
  console.log(offer);
  const newJob = new Job(offer);
  newJob.save((err, job) => {
    if (err) return next(err);
    return res.json(job);
  });
});

//List jobs offer
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

module.exports = router;
