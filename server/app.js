var express    = require('express'),
    app        = express(),
    fs         = require('fs'),
    path       = require('path'),
    bodyParser = require('body-parser');
    server     = require('http').createServer(app);



  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.use(express.static(path.join(__dirname, 'public')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));



  // this will be the page the user sees
  app.get('/home', function(req, res){
    res.render('home', {})
  })

  // creating json object, acting as our database
  var dataFromOurDatabase = [{
    "username": "Franklin",
    "url": "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F3e%2F9318c0a10911e087a80050568d634f%2Ffile%2FNewfoundland-2-645mk062111.jpg",
    "about": "I like sleeping, eating, beer, cuddling, and walks"
      },
      {
    "username": "Hailey",
    "url": "http://cdn3-www.dogtime.com/assets/uploads/2009/11/newfoundland-dog-breed-names.jpg",
    "about": "whining cuz im a puppy "
       }]



  app.get('/profile', function(req, res){
    // Normally do some database query


    res.render('profile', {userData: dataFromOurDatabase})
  })
  // this is going to act like an api endpoint
  // Does the user see this? NO
  // but the client can make requests to it
  app.get('/food', function(req, res){
    res.json({name: 'hi im food'})
  })

  // We are defining an address that recieves post REQUESTS
  app.post('/food', function(request, response){
    // the request is coming from the client
    // in this case our AJAX POST
    console.log(request.body)
    response.send('hey we got the info')
  })




// first argument is the port number
server.listen(3000, function(){
  console.log('server is listening on port 3000')
})






  // app.get('/', function(request, response){
  //   // request object is from the client,

  //   fs.readFile(__dirname + '/model/food.json', function(err, data){
  //       if (err) {
  //         console.log("error: ", err)
  //       }
  //       else {
  //         var some = JSON.parse(data)
  //         console.log(some)
  //         response.render('profile', {data: some})
  //       }

  //   });

  // })
