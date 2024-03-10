require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World hello ji!')
})

app.get('/twitter', (req, res)=>{
    res.send("hello twitter");
      
})

app.get('/youtube',(req,res)=>{
  res.send("Hello we are in youtube");
})

app.get('/login',(req, res) =>{
  res.send('<h1>Login</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})