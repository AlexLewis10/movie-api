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
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = movie.title
            
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300)
            p.textContent = `${movie.description}...`
            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)


            // console.log(movie.title)
            // console.log(movie.description)
        }) 
    } else {
        // console.log('error')
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = "API error"
        app.appendChild(errorMessage)
    }
}

//we send the request
request.send()

//getting the div root and setting in to a constant
const app = document.getElementById('root')
//We are going to have an image tag in the html. 
//So we use the createElement method on document
const logo = document.createElement('img')
logo.src = 'images/logo.png'
//again we are going to create another element div
//we then set the class attribute to container
const container = document.createElement('div')
container.setAttribute('class', 'container')
//now there is a logo and a container, we need to place them on the website
//we use appendChild to append both logo and container div to the app root
app.appendChild(logo)
app.appendChild(container)







