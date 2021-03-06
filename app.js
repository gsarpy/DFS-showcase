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

const Mentor = require('./application/models/Mentor.js');
const Team = require('./application/models/team.js');

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

// Mentor Routes
app.get('/event/:id/mentors', (req, res) => {
	Team.find().then((response) => {
		let mentor = response;
		res.render('pages/mentors/mentor', {mentor});
	})
});

app.get('/event/:id/mentor/:m_id', (req, res) => {
	res.render('pages/mentors/teams', {
		eventID: req.params.id,
		mentorID: req.params.id
	});
});

// Admin Routes
app.get('/admin', (req, res) => {
  res.render('pages/admin/index', {
    judges: [
      'Jon Doe',
      'Jane Doe'
    ],
    teams: [
      'Code Ninjas',
      'Team Coders'
    ]
  });
});

app.get('/login', (req, res) => {
  res.render('pages/admin/login', {});
});


let PORT = 8080;
app.listen(PORT, () => {
  console.log("Showcase app is up and running on port ", PORT);
});
