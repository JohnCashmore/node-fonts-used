var css = require('css');
var fontparser = require('./parseFont');
var _ = require('underscore');




exports.findFonts = function (strCSS) {
	var obj = css.parse(strCSS);
	var fonts = [];
	obj.stylesheet.rules.forEach(function (rule) {
		if(rule.declarations) {
		rule.declarations.forEach(function (declaration) {
			//console.log(declaration);
			if(declaration.property === 'font' ) {
				var parsedFont = fontparser(declaration.value);
				if(parsedFont !== null && parsedFont['font-family']) {
					var tempFonts = parsedFont['font-family'];
					if(_.isArray(tempFonts)) {
						fonts.push.apply(fonts, parsedFont['font-family']);
					} else {
						fonts.push(tempFonts);
					}
				}
			} else if (declaration.property === 'font-family') {
				fonts.push.apply(fonts, declaration.value.replace(/["']/g, "").replace(/[\s]*[,][\s]*/g,',').split(','));
			}
		});
	}
	});

	return _.chain(fonts).uniq().sortBy(function (name) { return name.toUpperCase();}).value();
};