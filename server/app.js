var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app);




  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey I just built a serverrrrr')
  })

  app.get('/blueberries', function(req, res){
    res.send('i like blueberries')
  })


// first argument is the port number
server.listen(3000, function(){
  console.log('server is listening on port 3000')
})
