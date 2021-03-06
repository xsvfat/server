var entryController = require('../controllers/entryController.js');
var userController = require('../controllers/userController.js');
var friendsController = require('../controllers/friendsController.js');
var requestController = require('../controllers/requestController.js');

var utils = require('./utils.js');

module.exports = function(app, express) {
  app.post('/api/signup', userController.createUser);
  app.post('/api/signin', userController.signIn);

  app.use('/api/entries', utils.decode);
  app.post('/api/entries', entryController.createEntry);
  app.get('/api/entries', entryController.getEntries);

  app.use('/api/users', utils.decode);
  app.get('/api/users', userController.findUser);

  app.use('/api/friends', utils.decode);
  app.get('/api/friends', friendsController.fetchFriends);
  app.post('/api/friends', friendsController.acceptFriendReq);
  //Add an app.delete endpoint later for removing friendsRelationships

  app.post('/api/friendreq', requestController.sendRequest);
  app.get('/api/friendreq', requestController.getRequests);



}