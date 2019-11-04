var express = require("express");
var router = express.Router();
var User = require("../models/users.model");
var HttpStatus = require("http-status-codes");

/* GET users listing. */
const create = async function(req, res, next) {
  const {
    email,
    name,
    place,
    location,
    contact_number,
    company_name,
    designation,
    company_address
  } = req.body;
  const account = new User({
    email,
    name,
    place,
    location,
    contact_number,
    company_name,
    designation,
    company_address
  });
  await account
    .save()
    .then(response => {
      console.log(response);
      return res.json({ message: "success" }, HttpStatus.CREATED);
    })
    .catch(err => {
      if (err.code == 11000) {
        return res.json({ err: "email already exists" }, HttpStatus.CONFLICT);
      } else {
        return res.json(
          { err: err },
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
    });
};

module.exports = create;
