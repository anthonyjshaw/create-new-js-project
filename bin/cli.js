#!/usr/bin/env node
'use strict';

const createJSProject = require('../lib/create_js_project');

createJSProject(process.argv[2]);

process.exit(0);