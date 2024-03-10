require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const port = 4000

const githubdata="I am github api";

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

app.get('/github',(req,res)=>{
  res.json(githubdata);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})