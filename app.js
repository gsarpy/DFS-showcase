const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db_source = require('./dbConfig');

mongoose.connect(db_source);
let db = mongoose.connection;

// check db connection
db.once('open', () => {
  console.log("MongoDB Connection: Successful");
});

// check for db errors
db.on('error', (err) => {
  console.log("MongoDB Connection: " + err);
});

app.set('views', path.join(__dirname, '/application/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

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
  eventID = req.params.id;
  judgeID = req.params.j_id;
  res.render('pages/judge', {
    judgeID,
    teams: [
      {
        name: 'Team 1',
        school: 'elementary school',
        scores: null
      },
      {
        name: 'Team 2',
        school: 'another school',
        scores: 90
      }
    ]
  });
});

app.get('/event/:id/mentor/:m_id', (req, res) => {
  res.render('pages/mentor', {
    eventID: req.params.id,
    mentorID: req.params.id
  });
});

app.get('/admin', (req, res) => {
  res.render('pages/admin/index', {});
});


let PORT = 8080;
app.listen(PORT, () => {
  console.log("Showcase app is up and running on port ", PORT);
});
