const express = require('express')
const app = express()
const port = 3000
const mydate = new Date();

const time = mydate.getHours() + ":" + mydate.getMinutes();
  
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

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

    app.delete('/movies/delete', function (req, res) {
        res.send('delete movie')
      })

      app.patch('/movies/update', function (req, res) {
        res.send('update movie')
      })

      app.post('/movies/create', function (req, res) {
        res.send('create movie')
      })

      app.get('/movies/read', function (req, res) {
    
        res.send({status:200, data:movies })
      })
      
      app.get('/movies/read/by-date', function (req, res) {
        
        res.send({status:200, data:sortByAttribute(movies, 'year') })
      })

      app.get('/movies/read/by-rating', function (req, res) {
        
        res.send({status:200, data:sortByAttribute(movies, 'rating') })
      })

      app.get('/movies/read/by-title', function (req, res) {
        
        res.send({status:200, data:sortByAttribute(movies, 'title') })
      })
      

