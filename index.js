const express = require('express')
const app = express()
const port = 3000
const mydate = new Date();

const time = mydate.getHours() + ":" + mydate.getMinutes();
  


app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/test', (req, res) => res.send({status:200, message:"ok"}))



  
  app.get('/time', function (req, res) {
    
    res.send({status:200, message: time});
  });