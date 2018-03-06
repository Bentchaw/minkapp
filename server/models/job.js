const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
  companyName: String,
  title: String,
  description: String,
  cityName: String,
  contractTypeName: String,
  contractDuration: Number,
  experienceName: String,
  gpsLatitude: Number,
  gpsLongitude: Number,
  salaryComment: String,
  weeklyWorkTime: String,
  minSalary: Number,
  experienceName: String,
  skills: [{}],
  activityName: String,
  candidatId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Job", jobSchema);
