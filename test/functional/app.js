process.env.NODE_ENV = 'test';
var http = require('http')
var app = require('../../app.js').app;
var assert = require('assert');
var Browser = require('zombie');


describe('app', function(){
  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });


  it('should show the full contents of the object', function() {
    this.browser.visit('/all', done);
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('body'), "Tool up");

  });



  it('should show the correct definition');
});
