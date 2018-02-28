const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
  title: String,
  description: String,
  cityName: String,
  contract: String,
  contractDuration: Number,
  weeklyWorkTime: String,
  weeklyWorkTimeTypeName: String,
  minSalary: Number,
  experienceName: String,
  skills: [
    {
      type: String
    }
  ],
  professionalQualities: [
    {
      type: String
    }
  ],
  activityName: String
});

module.exports = mongoose.model("Job", jobSchema);
