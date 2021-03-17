#! /usr/bin/env node

const fs = require('fs');
const json = require('./info.json');

fs.readFile(__dirname + '/info.json', 'utf8', function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
		return data;
	}
});
