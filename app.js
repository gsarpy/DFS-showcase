const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('views/pages/index');
});

app.get('/admin', (req, res) => {
  res.render('views/pages/admin/index');
});

let PORT = 8080;

app.listen(PORT, ()=> {
  console.log("Showcase app is up and running on port ", PORT);
});
