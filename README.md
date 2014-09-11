[![Code Climate](https://codeclimate.com/github/JohnCashmore/node-fonts-used/badges/gpa.svg)](https://codeclimate.com/github/JohnCashmore/node-fonts-used)

CSS font finder
===============

Very much a work in progress

Finds the fonts used in a css files

## Installation

    $ npm install node-fonts-used

## Usage

```js
var fontsUsed = require('node-fonts-used');
var fontsArray = fontsUsed.findFonts('body { font-size: 12px; font-family: Arial; }');

```
Returns an array of fonts used.



You can also use the tool from the command line.

```
    $ fontsused file.css

```

