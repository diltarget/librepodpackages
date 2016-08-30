var fs = require('fs');

module.exports.read = fs.readFile;

module.exports.read.parameters = ["directory"];
module.exports.read.output = ["data"]

module.exports.write = fs.writeFile;

module.exports.write.parameters = ["directory","data"];

module.exports.dir = fs.readdir;

module.exports.read.parameters = ["directory"];
module.exports.read.output = ["files"]
