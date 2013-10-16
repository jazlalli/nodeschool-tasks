var fs = require('fs');
var file = process.argv[2];

var contents = fs.readFileSync(file).toString();
var newLines = contents.split('\n');

console.log(newLines.length - 1);