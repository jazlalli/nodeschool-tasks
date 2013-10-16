var http = require('http');
var args = process.argv.slice(2);

var completed = 0;
var callbacks = [];

args.forEach(function (item) {
  completed += 1;

  var result = (function (item) {
    var asyncResult = '';

    var options = {port: item.substring(item.length - 4), method: 'GET'};
    var request = http.request(options, function (response) {
      
      response.setEncoding('utf8');
      response.on('data', function (data) {
        asyncResult += data.toString();
      });

      response.on('end', function () {
        completed -=1;

        if (completed === 0) {
          callbacks.forEach(function (item) {
            console.log(item());
          });
        }
      });
    });
    request.end();
    
    return function () {
      return asyncResult;
    };
  }(item));
  
  callbacks.push(result);
});