#!/usr/bin/env node
'use strict';

module.exports.serve = function(options) {
  var depRep = require("dep-rep");
  var express = require('express');
  var path = require('path');

  var app = express();

  var stringifyError = function (err) {
    var plainObject = {};
    Object.getOwnPropertyNames(err).forEach(function (key) {
      plainObject[key] = err[key];
    });
    return JSON.stringify(plainObject);
  };

  function getLocals() {
    return require(path.join(process.cwd(), 'locals'));
  }

  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.get('/dep-rep', function (req, res) {
    if (req.query.remote && req.query.remote.indexOf('https://') == 0) {
      depRep.analyze({p: req.query.remote})
          .then(function (data) {
            return res.jsonp(data);
          });
    } else {
      res.jsonp(stringifyError(new Error("Only https:// url's are supported for remote")));
    }
  });

  app.get('/dep-rep/locals', function (req, res) {
    try {
      res.jsonp({locals: Object.keys(getLocals())});
    }
    catch (err) {
      res.jsonp(stringifyError(err));
    }
  });

  app.get('/dep-rep/local/:local', function (req, res) {
    try {
      var pathToLocalJson = getLocals()[req.params.local];

      if (!pathToLocalJson) {
        return res.jsonp(stringifyError(new Error("Requested local was not defined in locals.json.")));
      }

      depRep.analyze({p: pathToLocalJson})
          .then(function (data) {
            return res.jsonp(data);
          });
    }
    catch (err) {
      res.jsonp(stringifyError(err));
    }
  });

  app.use(express.static('www'));

  app.listen(options.port);
  console.log("Druid DM is serving on localhost:" + options.port);
};
