#!/usr/bin/env node

var fontsUsed = require("../index.js");
var read = require('fs').readFileSync;

var css = read(process.argv[2], 'utf8').toString();

console.log(fontsUsed.findFonts(css));