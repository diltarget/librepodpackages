module.exports = new event(function(){
	this.implement(["cmd"],["sudo sudo modprobe w1-gpio && sudo modprobe w1-therm"])
	.inject(['/sys/bus/w1/devices/'])
	.implement(["file","dir"])
	.implement([validate])
	.use()
});

module.exports.output = ["header","temp"];

function validate(list,callback){
	
	list.forEach(function(sub){
		if(sub.replace('/sys/bus/w1/devices/',"").substring(0,2) != "28") return;
		
		fs.readFile(sub+'/w1_slave','utf-8',function(err,data){
			if (err) throw err;
			var temp =  parseFloat(data.split("t=")[1])/1000.0;
			var header = sub.substring(3);
        
			callback(err,header,temp);
		});
    });
}
