var express = require('express')

var app = express()

var wireDictionary = {
  "Get got": "to be killed",
  "Got got": "Was killed",
  "Courtside": "to be on trial",
  "Tool up": "Get ready to fight",
  "Points on the package": "Percentage of profits from the package"
}


app.use(express.static('website'));

app.get('/get/key=:word', DoTheSearch);

  function DoTheSearch(request, response) {
    var word = request.params.word;
    var reply;
    if (wireDictionary[word]) {
      reply = {
        status: "word was found!",
        word: word,
        definition: wireDictionary[word]
      }
    } else {
      reply = {
        status: "word was not found!",
        word: word
      }
    }
    response.send("The " + reply.status + " " + reply.word + " means " + reply.definition + "."  )
  }











app.get('/all', getEverything);

  function getEverything(request, response) {
    response.send(wireDictionary)
  }








app.get('/get/:word=:definition', AddAWord);

  function AddAWord(request, response) {
    var data = request.params;
    var word = data.word;
    var definition = data.definition
    wireDictionary[word] = definition;

    var reply = { message :"Word successfully added to dictionary" }
    response.send(reply);
    redirect('/all')

}


app.listen(4000, function() {
  console.log('Example app listening on port 4000')
})

exports.app = app
