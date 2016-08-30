var express = require('express');

module.exports.create = function(callback){
	callback(null,express());
}

module.exports.create.output = ["webserver"];

module.exports.get = function(dir,callback){
	var self = this;
	this.get["webserver"].get(this.get["dir"],callback.bind(this,null));
}

module.exports.get.parameters = ["dir"]

module.exports.get.output = ["request","response"];

module.exports.end = new event(function(){
	var o = (this.get["out"] instanceof Object ? JSON.stringify(this.get["out"]) : this.get["out"].toString())
	this.get["response"] && this.get["response"].end(o);
	this.end();
});

module.exports.end.parameters = ["out"];

module.exports.write = new event(function(){
	var o = (this.get["out"] instanceof Object ? JSON.stringify(this.get["out"]) : this.get["out"].toString())
	this.get["response"] && this.get["response"].write(o);
	this.end();
});

module.exports.write.parameters = ["out"];

module.exports.listen = new event(function(){
	this.get["webserver"].listen(this.get["port"])
	this.end()
});

module.exports.listen.parameters = ["port"]
