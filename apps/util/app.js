module.exports.timer = function(){
	callback = arguments[arguments.length-1];
	setInterval(function(){callback(null)},parseInt(this.get["interval"]));
}

module.exports.timer.parameters = ["interval"];
module.exports.timer.interface = {"timer":[""]};

module.exports.wait = function(){
	callback = arguments[arguments.length-1];
	setTimeout(function(){callback(null)},parseInt(this.get["interval"]));
}

module.exports.wait.parameters = ["interval"];
module.exports.wait.interface = {"wait":[""]};

module.exports.timestamp = function(callback){
	callback(null,new Date().getTime())
}
module.exports.timestamp.output = ["timestamp"]
module.exports.timestamp.interface = {"timestamp":[""]}

module.exports.if = new interface([1,new request(1),2]);
	
module.exports["="] = new event(function(){
	//console.log(this);
	if(this.get["value 1"] == this.get["value 2"]){
		this.end();
	}
});

module.exports["="].parameters = ["value 1","value 2"];
module.exports["="].interface = {"if":["="]}

module.exports["<"] = new event(function(){
	if(parseFloat(this.get["value 1"]) < parseFloat(this.get["value 2"])){
		this.use();
	}
});

module.exports["<"].parameters = ["value 1","value 2"];
module.exports["<"].interface = {"if":["<"]}

module.exports[">"] = new event(function(){
	
	if(parseFloat(this.get["value 1"]) > parseFloat(this.get["value 2"])){
		this.use();
	}
});

module.exports[">"].parameters = ["value 1","value 2"];
module.exports[">"].interface = {"if":[">"]}
