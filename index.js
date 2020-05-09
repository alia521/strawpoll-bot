var request     = require('request'); // 
var cheerio     = require('cheerio'); //
var interface   = require('readline-sync');
var fuck_errors = require('longjohn'); // supposed to handle error ECONNRESET
var plist       = [] // HTTP proxies LIST

var r = request.defaults()
var x = 0; // number of proxies that didn't work for some reason;
var y = 0; // number of proxies that have worked;

var vote_url = interface.question("What strawpoll.me poll you want to bot (url) ? ");
var op       = interface.question("What option you wan't to bot ? ");
var ratio    = 10; // ratio of votes; 200 = 5 per second; 1000/ratio = y per second;



function vote(url, value, n) { // function for vote
request(url, function (error, response, body) {

  $ = cheerio.load(body); var data = $('form[data-form-type="poll-vote"]').html();
  $ = cheerio.load(data); var a = $('input[id="field-security-token"]').val();
  var b = $('input[id="field-authenticity-token"]').attr("name");

  var options = $('input[name="options"]');
  data = {"s":a+b, "opval":options}

  var i = 0; var x = plist.length;

  function fx() { setP(i); sendVote(url, data.s, options.eq(value).val()); i++; if(i < x ) { setTimeout(fx, ratio); }} 
           fx();

 })}

function setP(i) {  r = request.defaults({'proxy':'http://' + plist[i]}) }

function sendVote(url, security_token, option_, a) {
  r.post(url, {form:{"security-token":security_token, 'options':option_}}).on('error', function (exc) {
   x++
}).on('response', function(response) { if(response.statusCode == 200) { y++ } else { x++}
                                       console.log(y, "succesfuly votes made.", x, 'failed.');
})}




request('https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=10000&country=all&ssl=all&anonymity=all', 
function (error, response, body) {
  if (error) {
     console.log('Failed to get the proxies. Try again later.')}
     plist = body.toString().split('\n');

    if(response.statusCode == 200) {
      vote(vote_url, op, plist.length)
    }
});