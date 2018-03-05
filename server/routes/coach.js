const express = require("express");
const router = express.Router();
const Match = require("../models/match");
const User = require("../models/user");

const SKILLS = require("../config/user-skills");

router.get("/", (req, res, next) => {
  User.find({ role: "candidat" }, (err, candidat) => {
    if (err) return next(err);
    console.log(candidat);
    res.json(candidat);
  });
});

// router.get("/coach/:id", (req, res, next) => {
//   const user = req.user;
//   const coachId = req.params.id;
//   User.find({ _id: coachId }, (err, theCoach) => {
//     Match.find(
//       { userCoach: req.user.id, status: "en cours" },
//       (err, matched) => {
//         console.log(matched);
//         if (err) return next(err);
//         const arrayCandidat = matched.map(element => {
//           return element.userCandidat;
//         });
//         User.find({ _id: arrayCandidat }, (err, candidat) => {
//           //console.log(candidat);
//           res.render("coach/show", {
//             user: user,
//             candidats: candidat,
//             matched: matched[0],
//             coach: theCoach[0]
//           });
//         });
//       }
//     );
//   });
// });

// router.post("/coach/:id", (req, res, next) => {
//   const user = req.user;
//   const matched = new Match({
//     userCandidat: user.id,
//     userCoach: req.params.id,
//     status: "en cours"
//   });
//   matched.save(err => {
//     if (err) return next(err);
//   });
//   res.redirect(`/coach/${req.params.id}`);
// });

module.exports = router;
