var http = require('http');
var fs = require("fs");
fs.writeFile('welcome.txt', 'Hello Node', function(err) {
   if (err) {
      return console.error(err);
   }
   fs.readFile('welcome.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log( data.toString());
   });
});
http.createServer(function (req, res) {
    if(req.url=='/'){
 res.end()
}
}).listen(5000);
