var sparklite = require("./index.js");
var request = require('supertest');

describe('Sparklite tests', () => {
  it('calling bot callback listener ', (done) => {
      var sparkBot = new sparklite.SparkBot('My_TOKEN', 1337, 'cisco.net');
      var server = sparkBot.getServer();
      request(server)
      .post('/webhooklistener')
      .expect(200,done);
    });

});
