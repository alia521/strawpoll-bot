var request = require('request');
var cheerio = require('cheerio');
var plist   = require('./socks.json');

var r = request.defaults()



function vote(url, value, n, proxy) {
request(url, function (error, response, body) {

  

  $ = cheerio.load(body); var data = $('form[data-form-type="poll-vote"]').html();
  $ = cheerio.load(data); var a = $('input[id="field-security-token"]').val(); var b = $('input[id="field-authenticity-token"]').attr("name");

  var options = $('input[name="options"]');

  data = {"s":a+b, "opval":options}

  for(i=0;i<n;i++) { 
   setP(i)
   sendVote(url, data.s, options.eq(value).val(), i) 
    }
 })
}

function setP(i) {
  r = request.defaults({'proxy':'http://' + plist[i + 0]})
}

function sendVote(url, security_token, option_, a) {
  r.post(url, {form:{"security-token":security_token, options:option_}}).on('error', function(err) {
    console.log('[' + a + ']', 'Something went wrong. Testing the next proxy.');
 })	
}


vote('https://www.strawpoll.me/xxxxxxxx', 'OPTION you want to vote for. FIRST OPTION = 0, SECOND = 1',
     plist.length, true)

