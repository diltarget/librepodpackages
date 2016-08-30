var exec = require('child_process').exec;

module.exports = function(cmd,callback){
	exec(cmd,callback);
}
