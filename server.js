7//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
app.get('ass1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/ass1.html'));
app.get('ass3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/ass3.html'));
});



//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port 5000 ',app.get('port'));
});