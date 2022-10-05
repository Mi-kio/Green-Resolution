const { response } = require("express");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
const https = require("https");

app.use('/assets', express.static('assets'));
app.use('/Images', express.static('Images'));


app.get("/",function(req,res){
 res.sendFile(__dirname+"/index.html");
   });

   app.get("/",function(req,res){
    res.sendFile(__dirname+"/resolution.html");
      });

   app.get('/assets/style.css',function(req,res){
    res.sendFile(__dirname + '/assets/style.css'); 
});

app.get('/script.js',function(req,res){
    res.sendFile(__dirname + '/script.js'); 
});

   app.post("/",function(req,res){
      
     //  console.log("post received");
     const key = "af99d9b0-0564-4ce3-a2f3-2584f4b7e464";
     const city = req.body.cityName;
     const state = req.body.stateName;
     const country = req.body.countryName;
     const url = "https://api.airvisual.com/v2/city?city="+city+"&state="+state+"&country="+country+"&key="+key;
 
     https.get(url,function(response){
         console.log(response.statusCode);
 
         response.on("data",function(data){
         const airData = JSON.parse(data);
        
 
         const temp = airData.data.current.pollution.aqius;
         console.log(temp);
          
         res.send("<h1 style=\"color:green\">Air pollution is "+ temp + "</h1>");
         
         })
 
     })
   })


app.listen(3000,function(){
    console.log("listening on port 3000");
})

 






















   /*
    response.on("data",function(data){
        const airPollutionData = JSON.parse(data);
        console.log(airPollutionData);
    })
*/