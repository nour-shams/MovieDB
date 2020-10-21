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

app.get('/search',(req,res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        // Search string applied
        const response = {
            status:200, message:"ok", data: search
        };

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "you have to provide a search"
        };


        res.status(500);
        res.send(response);
    }
});

app.get('/time', function (req, res) {
    
    res.send({status:200, message: time});
  });


      app.get('/hello/:ID', (req, res) => {
        id = req.params;
        res.send({ status: 200, message: "Hello, " + id.ID })
    })

    