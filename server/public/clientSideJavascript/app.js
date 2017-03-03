
console.log('window is loaded')
// ajax call to our /food get route on the server
$.ajax({
  url: '/food',
  dataType: 'json',
  type: 'GET',
  success: function(responseFromOurServer){
    console.log(responseFromOurServer)
  },
  error: function(err){
    console.log(err)
  }
})

// post route to the post method on our server name /food
$.ajax({
  url: '/food',
  type: 'POST',
  data: {"arugula": true},
  success: function(responseFromOurServer){
    console.log(responseFromOurServer)
  },
  error: function(err){
    console.log(err)
  }
})


















