// import the module
var formData = require('form-data');
var fs = require('fs');
var request = require('request');
//set the file path wich you want to post
//pls,you must set the type :)
var formData = {
  file: fs.createReadStream('/Users/wangsai/Desktop/s.stl'),
  filename:"Lily_car",
  userID : "236",
  introduction:"this is a car",
  platform:"Qmodel",
  tag:"car traffic",
};
//post file and print the status 
request.post({url:'http://your ip address:8000/api/ModelRepository', formData: formData}, function(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    var body = "";
    console.log("statusCode : " + httpResponse.statusCode);
    console.log("statusMessage : " + httpResponse.statusMessage);
    console.log(httpResponse.body);
});