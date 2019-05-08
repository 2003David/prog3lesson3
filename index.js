var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");
});
app.get("/google/:search", function(req, res){
    var name = req.params.search;
    res.redirect("http://google.com/search?q=" + name);
 });
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
