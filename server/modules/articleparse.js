var Client = require('node-rest-client').Client
    articles = require('./articles_model.js'),
    parseCanonicalUrl = require('parse-canonical-url'),
    Q = require('q');


exports.parse = function(providedUrl) {
  return Q.Promise(function(resolve) {
    var client = new Client();
    var extractlyKey = process.env.extractlyKey
    var url = "https://api.embedly.com/1/extract?key=" + extractlyKey + "&url=" + providedUrl;
    client.get(url, function (data, response) {
      if (data.content) {
        var cleanesedData = cleansdata(data);
        resolve(cleanesedData);
      }
      else {resolve(null)}
    });
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

var cleansdata = function(data){
  if (data.images && data.images[0]) {
    data.thumbnail = data.images[0].url
  }
  else if (data.images) {
    data.thumbnail = data.images
  } else { data.thumbnail = null};
  if (data.authors.length > 0) {
    data.author = data.authors[0].name
  } else {data.author = null}
  return data;
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
