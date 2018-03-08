const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../config");
const User = require("../models/user");
const Job = require("../models/job");
const Match = require("../models/match");

//liste des jobs added && liste des coachs
router.get(
  "/dashboard/:id",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const currentId = req.params.id;
    Promise.all([
      Job.find({ candidatId: currentId }),
      User.find({ role: "coach" })
    ])
      .then(([jobs, coaches]) => {
        res.json({
          jobs,
          coaches
        });
      })
      .catch(err => {
        next(err);
      });
  }
);

router.get(
  "/profil/:id",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const candidatId = req.params.id;
    User.findById(candidatId)
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

// router.get(
//   "/matches/:id",
//   passport.authenticate("jwt", config.jwtSession),
//   (req, res, next) => {
//     const candidatId = req.params.id;
//     Promise.all([
//       Match.find({ userCandidat: candidatId }),
//       User.find({ role: "coach" })
//     ])
//       .then(([matched, coaches]) => {
//         console.log(matched);
//         res.json({
//           matched,
//           coaches
//         });
//       })
//       .catch(err => {
//         next(err);
//       });

// Match.find({ userCandidat: req.params.id }, (err, matched) => {
//   if (err) return next(err);
//   let coachId = matched[0].userCoach;
//   // console.log(matched);
//   User.find({ _id: coachId }, (err, coachMatched) => {
//     if (err) return next(err);
//     console.log(coachMatched);
//     res.status(200).json([coachMatched, matched]);
//   });
// });
//   }
// );

router.get(
  "/matches/:id",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const user = req.user;
    const candidatId = req.params.id;
    User.find({ _id: candidatId }, (err, theCandidat) => {
      // console.log("The candidat :", theCandidat);
      Match.find(
        { userCandidat: req.user.id, status: "en cours" },
        (err, matched) => {
          //console.log("Matched :", matched);
          if (err) return next(err);
          const arrayCoach = matched.map(element => {
            return element.userCoach;
          });
          User.find({ _id: arrayCoach }, (err, coach) => {
            //console.log("Coach :", coach);
            res.json({
              user: user,
              matched: matched[0],
              coach: coach
            });
          });
        }
      );
    });
  }
);

module.exports = router;
