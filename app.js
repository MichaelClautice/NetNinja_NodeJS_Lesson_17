// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 17 - Serving HTML Pgs
//-----------
// WHAT THIS APP DOES------
// This lesson’s application utilizes a server to 
// respond w an HTML pg to this client URL req: 127.0.0.1:3000

// REQUIRE THE CORE MODULES------
// srvr requires th http core mod
const http = require('http');
// app requires th fs core mod to stream from an html file
const fs = require('fs');

// CREATE THE SERVER------
// create & assign a srvr
// utilize NodeJS's req & res objs
const server = http.createServer(function(req, res){
// con.log a test mssg
       console.log('\nclient made this URL request: ' + req.url);
// create th resonse header
// res header info also available in dev tools
       res.writeHead(200, {'Content-type': 'text/html'});
// stream & assign a stream of html code into a variable
       const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');   
    
// PIPE THE RESPONSE--------
// myReadStream.pipe(res) takes th place of:
// the on() event listener mthd
// the res.end() mthd
// 
       myReadStream.pipe(res);
});

// LISTEN FOR THE PORT NUMBER------
server.listen(3000, '127.0.0.1');
console.log('\nyo dawgs, now listening to port 3000\n');