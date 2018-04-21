let express = require('express');
let app = express();
let path = require('path');

app.set('views', path.join(__dirname, '/application/views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/event/:id', (req, res) => {
  res.render('pages/event');
});

app.get('/event/:id/judge/:j_id', (req, res) => {
  res.render('pages/judge');
});

app.get('/event/:id/mentor/:m_id', (req, res) => {
  res.render('pages/mentor');
});

app.get('/event/:id/admin/:admin_id', (req, res) => {
  res.render('pages/admin');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/admin', (req, res) => {
  res.render('pages/admin/index');
});

let PORT = 8080;

app.listen(PORT, () => {
  console.log("Showcase app is up and running on port ", PORT);
});
