"use-strict";

//first create a request variable and set it to a new XMLHttprequest
var request = new XMLHttpRequest()

//open a connection using a GET request and the URL endpoint.
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
// this is where you can access the JSON data 
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            console.log(movie.title)
        }) 
    } else {
        console.log('error')
    }
}

//we send the request
request.send()

const app = document.getElementById('root')
console.log(app)






