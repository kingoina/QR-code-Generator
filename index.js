const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const qr = require('qr-image');

const app = express();
const port = 8080;

app.use(express.static('global'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home', (req, res) => {
  res.render('index.ejs', { image: null }); 
});

app.post('/submit', (req, res) => {
  const url = req.body.url;
  const qr_png = qr.image(url, { type: 'png' });

  qr_png.pipe(fs.createWriteStream('global/image.png'))
    console.log('QR code image saved.');
    res.render('index.ejs', { image: '/image.png' }); 
  
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
