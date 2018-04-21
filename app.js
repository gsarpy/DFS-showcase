const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.set('views', path.join(__dirname, '/application/views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  var appName = "AppJam+";
  res.render('index', {
    appName: appName
  });
});

app.get('/event/:id', (req, res) => {
  let eventID = req.params.id;
  res.render('pages/event', {
    eventID: eventID
  });
});

app.get('/event/:id/judge/:j_id', (req, res) => {
  eventID = req.param.id;
  judgeID = req.param.j_id;
  res.render('pages/judge');
});

app.get('/event/:id/mentor/:m_id', (req, res) => {
  res.render('pages/mentor', {
    eventID: req.param.id,
    mentorID: req.param.id
  });
});

app.get('/admin', (req, res) => {
  res.render('pages/admin/index', {});
});


let PORT = 8080;
app.listen(PORT, () => {
  console.log("Showcase app is up and running on port ", PORT);
});
