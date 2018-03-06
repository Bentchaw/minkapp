const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Job = require("../models/job");

router.get("/", (req, res, next) => {
  const id = req.params.id;
  User.find({ role: "coach" })
    .then(result => {
      console.log(result);
      return res.json(result);
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
});
router.get("/dashboard/:id", (req, res, next) => {
  const currentId = req.params.id;

  Job.find({ candidatId: ObjectId(currentId) })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
});

router.get("/profile/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .then(result => res.json(result))
    .catch(err => {
      console.error(err);
      throw err;
    });
});

module.exports = router;
