var telegram = require('telegram-bot-api');
var util = require('util');

var api = new telegram({
  // token: '1086594:e52b0ce3b6b079e9516afff86bac5831'
  token: '1005748583:AAHg97fooqqOr3TIxMgzvmfh5a7joSsei-0',
  updates: {
    enabled: true
  }
});

api.getMe()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

api.on('message', function(message) {
  // Received text message
  console.log('message', message);

  // api.sendMessage({
  //   chat_id: message.chat.id,
  //   text: 'Привет ' + message.chat.first_name + ' ' + message.chat.last_name
  // })
  //   .then(function(data) {
  //     console.log(util.inspect(data, false, null));
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //   });

  api.sendPhoto({
    chat_id: message.chat.id,
    caption: 'Привет ' + message.chat.first_name + ' ' + message.chat.last_name,
    photo: './images/laps.jpg'
  })
    .then(function(data) {
      console.log(util.inspect(data, false, null));
    })
    .catch(function(err) {
      console.log(err);
    });

});

api.on('inline.query', function(message) {
  // Received inline query
  console.log('inline.query', message);
});

api.on('inline.result', function(message) {
  // Received chosen inline result
  console.log('inline.result', message);
});

api.on('inline.callback.query', function(message) {
  // New incoming callback query
  console.log('inline.callback.query', message);
});

api.on('edited.message', function(message) {
  // Message that was edited
  console.log('edited.message', message);
});

api.on('update', function(message) {
  // Generic update object
  // Subscribe on it in case if you want to handle all possible
  // event types in one callback
  console.log('update', message);
});
