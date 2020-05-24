const express = require('express');
const app = express();
const route = require('./routes/index')
// const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const path = require('path');

// app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use('/api', route);



app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})

