var fs = require('fs');
var args = process.argv.splice(2);

fs.readdir(args[0], function (err, list) {
	var answer = 0;

	for (var i = 0, l = list.length; i < l; i += 1) {
		if (list[i].indexOf('.' + args[1]) > -1) {
			console.log(list[i]);
		}
	}
});