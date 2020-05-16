const request     = require('request'); 
const cheerio     = require('cheerio');
const interface   = require('readline-sync');


var proxies     = []; var n, n_ = 0;
var data        = [0, 0, 0]

var url_ = interface.question("What strawpoll.me poll you want to bot (url) ? ");
var op   = interface.question("What option you wan't to bot ? ");

var sec;
var opp;

function setup() {
  
  request(url_, function (error, response, body) {
      $ = cheerio.load(body); 

      if(response.statusCode == '200') {
        var security_token = $('input[id="field-security-token"]').val();
        var authenticity_token = $('input[id="field-authenticity-token"]').attr("name");
        var options = $('input[name="options"]');
        opp = options.eq(op).val();
        sec = security_token + authenticity_token;
      getProxies();


      }
 })



}

function getProxies(a) {
  request('https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=10000&country=all&ssl=all&anonymity=all', 
  function (error, response, body) {
  if (error) { console.log('Failed to get the proxies. Try again later.')}
     proxies = body.toString().split('\n');

    if(response.statusCode == 200) {
     aaa_ = setInterval(fuckyou, 5);
    }
});
}

function fuckyou() {
    n  = proxies.length;
    r = request.defaults({'proxy':'http://' + proxies[n_]}); 
    n_++;

    r.post(url_, {form:{"security-token":sec, 'options':opp}},
    (err, response, body) => {
      if (err) {
        data[0]++;
        data[2]++;
            } else {
              if(response.statusCode == '200') { data[1]++ }
              console.log('Successfuly made', data[1], 'votes.', data[0], 'failed.')
              data[2]++;
            }
  })
    process.on('uncaughtException', function(error) {})  

    if(n_ >= n) { clearInterval(aaa_);} 
    if(data[2] >= n) { console.log(n, data[2],'Done :). Get new/more proxies if you want to bot more.')}
}





setup();