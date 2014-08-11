#!/usr/bin/env node

var fontsUsed = require("../index.js");
var read = require('fs').readFileSync;

var css = read(process.argv[2], 'utf8').toString();
var fonts = fontsUsed.findFonts(css);

if(fonts.length > 0) {
	console.log('Fonts Found');
	console.log('=============');

	fonts.forEach(function (font) {

		console.log(font.fontName + ' - ' + font.occurances);
	});
} else {
	console.log('no fonts founds')
}