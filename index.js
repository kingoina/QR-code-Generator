const express = require('express');
const bodyParser = require('body-parser');
//const fs = require('fs');
//const inquirer = require("inquirer")
const qr = require('qr-image');

const app = express();
const port = 8080;

app.use(express.static('global'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home', (req, res) => {
  res.render('index.ejs');
});
app.post('/submit', (req, res) => {
  const url = req.body.url;
  let qr_png = qr.image(url, { type: 'png' });
  let qr = qr_png
 

  res.render('index.ejs', { image: qr });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
