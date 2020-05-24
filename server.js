const express = require('express');
const app = express();
const route = require('./servers/routes/index')
// const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 5000;
const path = require('path');

// app.use(cors());

app.use(express.static(__dirname));
app.use(express.static(__dirname + 'build'));
app.use(bodyParser.json());
app.use('/api', route);

console.log(__dirname);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})

