import express from "express";

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})



console.log('Server on port ', 3000);