var express = require('express')
var app = express()


app.use(express.static('website'));

app.get('/get/:key', getTheStuff);

  function getTheStuff(request, response) {
    var data = request.params;
    response.send("This is the data you requested; " + data.key + "       Isn't it nice??")

  }




app.listen(4000, function() {
  console.log('Example app listening on port 4000')
})
