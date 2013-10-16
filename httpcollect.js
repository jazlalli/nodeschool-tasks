var http = require('http');
var args = process.argv[2].split(':');

var options = {host: args[1].substring(2), port: args[2], method: 'GET'};
var buffer = '';

var request = http.request(options, function (response) {
	response.setEncoding('utf8');
	
	response.on('data', function (data) {
		buffer += data.toString();
	});

	response.on('end', function () {
		console.log(buffer.length);
		console.log(buffer);
	});
});

request.end();