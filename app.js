const express = require('express');
const exphbs = require('express-handlebars');
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')


const app = express();

app.use(cors())
// app.use(express.json())
app.use(bodyParser({limit: '50mb'}));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', 'hbs');



var content = {};


app.get('/', (req, res) =>{
  console.log('content', content)
   res.render('home', {
      content:content
  
  });
});

app.post('/create', (req, res) =>{
  console.log(req.body.templateData)
  content = req.body.templateData
  var fs = require('fs')
fs.writeFile('./public/css/styles.css', req.body.templateData.css, function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
})
fs.writeFile('./template.html', 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    ${req.body.templateData.css}
    </style>
  </head>
  <body>
    ${req.body.templateData.html}
  </body>
  </html>`, function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
})
});






app.listen(8000, () => {
  console.log('The web server has started on port 8000');
});