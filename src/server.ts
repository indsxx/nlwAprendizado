import express, { request, response } from "express"


const app = express()

app.get("/test", (request, response) => {
    response.send('Olá NLW')
})

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW, este é o método POST!")
})

app.listen(3000, () => console.log('Server is running')) 