var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});
//Form redirect removed as form submission was added to index
/*router.get('/new', function(req, res, next) {
  res.render('form');
});*/ 
router.post('/new', function(req, res, next) {
  const message = {
    text: req.body.msgtext,
    user: req.body.name,
    added: new Date().toString()
  };
  messages.unshift({text: message.text, user: message.user, added: message.added});
  res.redirect('/');
});
router.get('/messages', function(req, res, next) {
  res.render('messages', {messages:messages})
});

module.exports = router;
