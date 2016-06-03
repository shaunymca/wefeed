var Client = require('thumbd').Client,
    client = new Client({
        awsKey: process.env.S3KEY,
        awsSecret: process.env.S3SECRET,
        awsRegion: process.env.AWS_REGION,
        sqsQueue: process.env.SQS_QUEUE,
        s3Bucket: process.env.BUCKET
    }),
    fs = require('fs'),
    request = require('request');

exports.thumbd = function(uri, articleId) {
  console.log(uri, articleId);
  var location = '/Users/smcavinney/Documents/My Documents/wefeed/server/temp/' + articleId + '.png'
  var destination = "/thumbs/" + articleId + ".png";
  download(uri, location, function(){
    console.log('done');
    client.upload(location, destination, function(err) {
      if (err) console.log(err);
      client.thumbnail(destination, [
        {
            "suffix": "tn",
            "width": 400,
            "height": 250,
            "strategy": "bounded"
        }
        ], {
          //notify: 'http://localhost:3000/thumbdone'
      });
    });
  });
}

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
