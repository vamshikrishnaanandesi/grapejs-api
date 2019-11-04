var express = require("express");
var router = express.Router();
var User = require("../models/users.model");
var HttpStatus = require("http-status-codes");

const get = async function(req, res, next) {
    User.find({})
      .then(response => {
        return res.json(
          { message: "Succesfully fetched Users", data: response },
          HttpStatus.ACCEPTED
        );
      })
      .catch(err => {
        return res.json(
          { err: "Internal server error" },
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      });
  };

  module.exports = get;