var express = require("express");
var app = express();
var fs = require("fs");

app.use(express.static("public"));
app.get('/', function(request,response)
{
	response.sendFile(__dirname + "/index.html");

});

app.get("/server",function(request,response){
	var data = request.query.search.toLowerCase();
	fs.readFile("detail.json","utf8",function(error,fileData){
		if(error){
			console.error(error);
			response.sendStatus(500);
		}else{	
			var jsonContent =JSON.parse(fileData);
			
			var dataLength = data.length,
			stringLength,responseData =[],lowerJsonData;
			if(dataLength != 0){
				
				var regex = new RegExp("^"+data,"g");
				console.log(regex);
				for(var i = 0; i<jsonContent.length;i++){ 
					stringLength = jsonContent[i].name.length;
					lowerJsonData =jsonContent[i].name.toLowerCase();
					if(lowerJsonData.match(regex)){
						responseData.push(jsonContent[i]);	
					}      	
				}
				response.send(responseData);		
			}else{
				response.send([]);
			}	
		}
	});	
});
app.listen(4000,function(){
	console.log("the server is running on port 4000");
});
