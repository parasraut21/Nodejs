let data = require("http"); //http is imported and stored in data
let data1 = require("./import"); //we have imort data from other file
data.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("The todays date and time is : " + data1.mydata());
    res.end("\n Paras Raut");

}).listen(6979);