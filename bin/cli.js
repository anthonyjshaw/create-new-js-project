#!/usr/bin/env node
'use strict';

const createFunctionAndTest = require('../lib/create_function_and_test');

createFunctionAndTest(process.argv[2]);

process.exit(0);