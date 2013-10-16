function filteredls (directory, fileType, callback) {
	var fs = require('fs');

	fs.readdir(directory, function (err, list) {
		if (err) {
			callback(err);
		}
		else {
			var filteredList = [];

			for (var i = 0, l = list.length; i < l; i += 1) {
				if (list[i].indexOf('.' + fileType) > -1) {
					filteredList.push(list[i]);
				}
			}

			callback(null, filteredList);
		}
	});
};

module.exports = filteredls;