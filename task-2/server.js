const http = require("http");
const fs = require('fs');
fs.readFile('./index.html',function (err,html){
    if (err)
    console.log(
        err
    );
    const server = http.createServer(function(req,res){
        if(req.url=='/'){

                res.write(html);  
            res.end(); 
        }
    })
    server.listen(3000)
})


