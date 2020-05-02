"use-strict";

//first create a request variable and set it to a new XMLHttprequest
var request = new XMLHttpRequest()

//open a connection using a GET request and the URL endpoint.
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
// this is where you can access the JSON data 
}

request.send()