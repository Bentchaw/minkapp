const express = require("express");
const router = express.Router();
const User = require("../models/user");

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

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .then(result => res.json(result))
    .catch(err => {
      console.error(err);
      throw err;
    });
});

module.exports = router;
