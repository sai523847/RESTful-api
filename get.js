// import the module
var http = require("http");
//set the url to get the data wich id=32
var url = "http://your ip address:8000/api/ModelRepository/2";

// get is a simple wrapper for request()
// which sets the http method to GET
var request = http.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event  
    var buffer = "", 
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    }); 

    response.on("end", function (err) {
        var body = "";
        console.log("statusCode : " + response.statusCode);
        console.log("statusMessage : " + response.statusMessage);
        var splits = buffer.split(",");
        console.log(splits);
        
        
    }); 
}); 