const WebSocket = require('ws');

const wss = new WebSocket.Server({
	port: 9876,

}, function(){
	console.log("WebSocket Ready");
});

console.log(wss);