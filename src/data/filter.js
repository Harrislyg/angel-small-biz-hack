var fs = require('fs');
var json = JSON.parse(fs.readFileSync('./filtered.json', 'utf8'));

// console.log(json);
var q1e = 2;
var q1i,q2i,q3i,q4i;
json.forEach(function (js) {
	if(js.type === "inflow")
		if(js.date.split("-")[1] === "09" || js.date.split("-")[1] === "08" || js.date.split("-")[1] === "07"){
			q1e += js.deposits;
		}
});

console.log(q1e);