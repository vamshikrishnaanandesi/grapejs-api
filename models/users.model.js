const mongoose = require("mongoose");

const UserModel = new mongoose.Schema(
  {
    name: { type: String },
    place: { type: String },
    location: { type: String },
    email: {
      type: String,
      required: true,
      index: { unique: true, dropDups: true }
    },
    contact_number: { type: Number, min: 10 },
    company_name: { type: String },
    designation: { type: String },
    company_address: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserModel);
