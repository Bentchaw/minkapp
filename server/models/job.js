const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
  name: String,
  adress: String
});

module.exports = mongoose.model("Job", jobSchema);
