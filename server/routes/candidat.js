const express = require("express");
const router = express.Router();
const User = require("../models/user");

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
