const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../config");

const Match = require("../models/match");
const User = require("../models/user");

// const SKILLS = require("../config/user-skills");

// router.get("/", (req, res, next) => {
//   User.find({ role: "candidat" }, (err, candidat) => {
//     if (err) return next(err);
//     console.log(candidat);
//     res.json(candidat);
//   });
// });

router.get(
  "/profil/:id",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const coachId = req.params.id;
    User.findById(coachId)
      .then(result => {
        //console.log(result);
        return res.json(result);
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  }
);

router.post(
  "/profil/:id",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    // console.log(req.user);
    // console.log(req.params.id);
    const matched = new Match({
      userCoach: req.params.id,
      userCandidat: req.user._id,
      status: "en cours"
    });
    console.log(matched);
    matched.save(err => {
      if (err) {
        return next(err);
      }
    });
    res.json(matched);
  }
);

module.exports = router;
