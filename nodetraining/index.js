const express = require('express');
// const bodyParser = require('body-parser')
const app = express();
const port = 5000;
const path = require('path');
const indexrout = require("./routes/index");
const pageroute = require("./routes/pagerout");
const userroute = require("./routes/userrout");

app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );
    next();
  });

app.use(express.static(path.join(__dirname, 'public/')));
app.use('/', indexrout);
app.use('/page', pageroute);
app.use('/user', userroute);   

app.listen(port, () => {
    console.log('express server stated ..:')
});

