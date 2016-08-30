

module.exports.get = new event(function(){
	this.implement(["tempmod"])
	.use();
});
module.exports.get.output = ["device","temperature"];
	
function name(devices,header,temp,callback){
	if(devices[header]){
		callback(devices[header],temp);
	}else{
		callback(header,temp);
	}
}

module.exports.get.output = ["device","temperature"]

module.exports.device = new config({
	"header":"text",
	"id":"text"
},"id");
