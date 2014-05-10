var fs = require('fs');
fs.readFile('log.txt', function(err, logData) {
	if (err) throw err;
	var text = logData.toString();
	var lines = text.split('\n');
	var results = {};
	lines.forEach(function(line) { 
		var parts = line.split(' ');
		var letter = parts[1];
		var count = parts[2];

		if (!results[letter]) {
			results[letter] = 0;
		}
		results[letter] += parseInt(count);
		
	});
	console.log(results);
});