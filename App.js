const fs = require('fs');

console.log("App.js created!");

fs.readFile('file.txt', 'utf8', function (err, data) {
 if (err) throw err;
 console.log(data);
});

fs.writeFile('file.txt', 'Hello World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});