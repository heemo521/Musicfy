const express = require('express');
const app = express();
const router = express.Router();
const controller = require('./controller');

app.use(express.json());
app.use('/musicfy/users/:userId', router);

app.get('/test', (req, res) => {
  res.status(200).send('hello world!');
});
//create user using spotify id, email, email
router.post('/create', (req, res) => {
  res.sendStatus(200);
});
//get user's playlist
router.get('/playlist', (req, res) => {
  res.sendStatus(200);
});
//add to user's playlist
router.post('/playlist/tracks', (req, res) => {
  res.sendStatus(200);
});
//remove from user's playlist
router.delete('/playlist/tracks', (req, res) => {
  res.sendStatus(200);
});

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
