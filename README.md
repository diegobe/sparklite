## Synopsis
The purpose of this NPM is to provide a light weight API layer for rapid prototyping of Cisco Spark bots.

## Motivation
This projects abstracts and reduces the communication with Cisco Spark services into consuming simple JS API that we, developers, understand better. Ultimately what a developer wants to focus is in the business logic, which is the fun part.

## Code Example

```javascript

var port = process.env.PORT || 80;
var sparklite = require("sparklite");
var botdomain = 'MY_BOT_DOMAIN.net'; // i.e “dolores.cisco.net”
var sparkBot = new sparklite.SparkBot(My_Spark_Token, port, botdomain);

sparkBot.printHelloWorld();

sparkBot.on('message', function (event)
{
    console.log('Incoming message: '+ JSON.stringify(event.message) + ' from: '+event.person.displayName );
    var sentMessage = 'Hola ' + event.person.displayName;

    sparkBot.sendMessage(event.roomId, sentMessage , function(){
      console.log('Message sent from Bot!');
    });
 })

```

## Tests

The tests are implemented with mocha,  to execute them run the following command:

> npm test
