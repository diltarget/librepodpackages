var gmail = require('gmail-send');

module.exports.notify = new event(function(){
var self = this;
this.get["gmail.account"](function(account){

	var send = gmail({
		user:	account.username,
		pass:	account.password,
		to:		'',
		subject:this.request["subject"],
		text:	this.request["message"]
	});

send(arguments[arguments.length-1],self.use);

});

});

module.exports.notify.parameters = ["gmail.account","subject","message"];

module.exports.account = new config({
	"username":"text",
	"password":"password"
},"username");
