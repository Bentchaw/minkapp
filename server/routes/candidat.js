const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Job = require("../models/job");

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
    const candidathId = req.params.id;
    User.findById(candidathId)
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

module.exports = router;
