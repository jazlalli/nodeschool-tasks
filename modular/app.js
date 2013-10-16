var filter = require('./filter');
var args = process.argv.splice(2);

filter(args[0], args[1], function (error, list) {
	list.forEach(function (item) {
		console.log(item);
	});
});