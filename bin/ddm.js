#!/usr/bin/env node
'use strict';

var argv = require('yargs')
    .usage('ddm [--port 3000] [--druidsPort 3001]')

    // option: port
    .string('port')
    .alias('p', 'port')
    .describe('port', 'The port druid-dm will run on, defaults to 3061')

    // flag: help
    .help('h')

    // flag: version
    .version()

    //defaults
    .default('p', 3221)

    .argv;

console.log(argv);

require('../lib/druid-dm').serve(argv);
