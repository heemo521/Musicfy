const express = require('express');
const app = express();
const router = express.Router();
const controller = require('./controller');

app.use(express.json());
app.use('/musicfy/users/:userId', router);

//create user using spotify id, email, email
router.post('/create', (req, res) => {
  console.log(req.body);
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
// router.post('/create', controller.createUser);
// //get user's playlist
// router.get('/playlist', controller.getUserPlaylist);
// //add to user's playlist
// router.post('/playlist/tracks', controller.addToPlaylist);
// //remove from user's playlist
// router.delete('/playlist/tracks', controller.removeFromPlaylist);
