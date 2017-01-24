var sparklite = require("sparklite");
var Guid = require("Guid");
var webshot = require('webshot');
var port = process.env.PORT || 1337;
var botdomain = process.env.DOMAIN || 'my_domain';
var token = process.env.TOKEN || 'my_token';

console.log('Transcoding Bot: domain[' + botdomain + ']');

var sparkBot = new sparklite.SparkBot(token, port, botdomain);

sparkBot.on('message', function(event) {
    console.log('Incoming message: ' + JSON.stringify(event.message) + ' from: ' + event.person.displayName);

    getFile(event.message, function(url, error) {
        var files = [url];
        var sentMessage = 'The image from ' + event.message;

        if (!error) {
            sparkBot.sendMessageWithFile(event.roomId, sentMessage, files, function() {
                console.log('Message sent from Bot!');
            });
        } else {
            sparkBot.sendMessage(event.roomId, 'Invalid URL', function() {
                console.log('Invalid URL');
            });
        }
    });

    console.log(JSON.stringify(event));
})

function getFile(url, doneCallback) {
    console.log("About to transcode : " + url);
    var guid = Guid.raw() + ".png";
    var fileName = 'img/' + guid;

    webshot(url, fileName, function(err) {
        console.log(err);
        var fileUrl = 'http://' + botdomain + '/' + guid;
        console.log("Done with: " + fileUrl);
        doneCallback(fileUrl, err)
    });
}
