#!/usr/bin/env node
'use strict';

module.exports.serve = function(options) {
  // Set the default values for options
  options = options || {};
  options.port = options.port || 3061;

  var druids = require('druids');
  var express = require('express');

  process.on('uncaughtException', function(err) {
    console.log(err);
  });

  var server = express();

  server.use(express.static(__dirname + "/../www"));

  var port = 3061;
  server.listen(port, function() {
    console.log('Druid-DM is serving localhost:' + port);
  });

  druids.exec();
};


