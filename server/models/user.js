const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const SKILLS = require("../config/user-skills");
const { Schema } = mongoose;

const userSchema = new Schema({
  // the username and password are added by passportLocalMongoose
  // we can add any extra information like facebooktokens (or
  // others) as well as a picture, etc
  //

  lastname: {
    // required: true,
    type: String
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  firstname: {
    required: true,
    type: String
  },
  adresses: {
    adress: {
      required: true,
      type: String
    },
    zipcode: {
      required: true,
      type: String
    },
    city: {
      required: true,
      type: String
    }
  },
  category: [
    {
      required: true,
      enum: SKILLS,
      type: String
    }
  ],
  role: {
    required: true,
    enum: ["coach", "candidat"],
    type: String
  },
  description: {
    required: true,
    type: String
  },
  picPath: String,
  picName: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
