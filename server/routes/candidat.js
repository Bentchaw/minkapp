const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Job = require("../models/job");

// router.get("/dashboard/:id", (req, res, next) => {
//   const currentId = req.params.id;
//   const listJob = Job.find({ candidatId: currentId })
//     .then(result => {
//       res.json(result);
//     })
//     .catch(err => {
//       console.error(err);
//       throw err;
//     });
//   const listCoach = User.find()
//     .then(resultCoach => {
//       console.log(resultCoach);
//       res.json(resultCoach);
//     })
//     .catch(err => {
//       console.error(err);
//       throw err;
//     });
// });

//liste des jobs added && liste des coachs
router.get("/dashboard/:id", (req, res, next) => {
  const currentId = req.params.id;
  Promise.all([
    Job.find({ candidatId: currentId }),
    User.find({ role: "coach" })
  ])
    .then(([jobs, coaches]) => {
      //console.log(jobs);
      // console.log(coaches);
      res.json({
        jobs,
        coaches
      });
    })
    .catch(err => {
      next(err);
    });
});

// router.get("/profile/:id", (req, res, next) => {
//   const id = req.params.id;
//   User.findById(id)
//     .then(result => res.json(result))
//     .catch(err => {
//       console.error(err);
//       throw err;
//     });
// });

module.exports = router;
