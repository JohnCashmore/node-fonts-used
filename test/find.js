var fontsUsed = require('../');
var fs = require('fs');
 var file = '';
fs.readFile('/Users/johncashmore/Sites/Personal/node-fonts-used/test/test.css', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  file = data;
  console.log(fontsUsed.findFonts(file));
});


