var sparklite = require("sparklite");
var botdomain = process.env.DOMAIN || 'my_domain';
var token = process.env.TOKEN || 'my_token';
var port = process.env.PORT || 1337;

var sparkBot = new sparklite.SparkBot(token, port, botdomain);

sparkBot.printHelloWorld();

sparkBot.on('message', function(event) {
    console.log('Incoming message: ' + JSON.stringify(event.message) + ' from: ' + event.person.displayName);
    var sentMessage = 'Hola ' + event.person.displayName;

    sparkBot.sendMessage(event.roomId, sentMessage, function() {
        console.log('Message sent from Bot!');
    });
    console.log(JSON.stringify(event));
})

sparkBot.on('rooms', function(event) {
    console.log(JSON.stringify(event));
})

sparkBot.on('memberships', function(event) {
    console.log(JSON.stringify(event));
})
