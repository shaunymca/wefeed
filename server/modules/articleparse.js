var Client = require('node-rest-client').Client
    articles = require('./articles_model.js'),
    parseCanonicalUrl = require('parse-canonical-url'),
    Q = require('q');

exports.parse = function(url) {
  var client = new Client();
  var instaparserKey = process.env.instaparserKey
  var url = "https://www.instaparser.com/api/1/article?api_key=" + instaparserKey + "&url=" + url;
  client.get(url, function (data, response) {
  	// parsed response body as js object
  	console.log(data);
  	// raw response
  	//console.log(response);
  });
}

exports.identifyUrl = function(text) {
  return Q.Promise(function(resolve) {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
      canonicalUrl(url)
      .then(function(url) {
        if (url && url.startsWith("https://twitter.com/")){
          //console.log("twitter");
          resolve( null)
        } else {
          //console.log("identifyUrl " + url);
          resolve( url);
        }
      })
        //return '<a href="' + url + '">' + url + '</a>';
    });
  });
}

var canonicalUrl = function(url) {
  return parseCanonicalUrl.canonical(url)
    .then(function(result) {
      return result
        //console.log(result);
    })
    .catch(function(err) {
      return result
      //console.log(err);
    });
}
