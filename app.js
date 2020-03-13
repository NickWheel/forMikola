const express = require('express');
const cors = require('cors');
const app = express();

// here you need to require all the schedule files
const fitSchedule = require('./data.json')

app.use(cors());

app.get('/schedule', function (req, res, next) {

  // Here you'll need to write a code that will check WHAT is your course, facultet, grour number etc. and
  // do res.send to file that user need. 

  // All this shit you'll get from your form in index.html, use req.body to get data from the form.

  res.send(fitSchedule);
});

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
});