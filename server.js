const express = require('express');
const app = express();
const route = require('./servers/routes/index')
// const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 5000;
const path = require('path');

// app.use(cors());


app.use('/', express.static(__dirname + 'build/static'));
app.use(bodyParser.json());
app.use('/api', route);

console.log(__dirname);

app.get('*', function(_, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})

