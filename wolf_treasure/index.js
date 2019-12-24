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

// treasure - Wolf Treasure
// laps - Laps


api.on('message', function(message) {
  // Received text message
  console.log('message', message);



  // if(message && message.entities && message.entities[0] && message.entities[0]['type'] == 'bot_command') {
  if(message && message.text == '/treasure') {
    api.sendLocation({
      chat_id: message.chat.id,
      latitude: '50.418644',
      longitude: '30.555229'
    })
      .then(function(data) {
        console.log(util.inspect(data, false, null));
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  if(message && message.text == '/laps') {
    api.sendPhoto({
      chat_id: message.chat.id,
      caption: '',
      photo: './images/laps.jpg'
    })
      .then(function(data) {
        console.log(util.inspect(data, false, null));
      })
      .catch(function(err) {
        console.log(err);
      });
  }

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

  // if(message && message.channel_post) {
  //   api.sendMessage({
  //     chat_id: message.channel_post.chat.id,
  //     text: 'Hello ' + message.channel_post.chat.title
  //   })
  //     .then(function(data) {
  //       console.log(util.inspect(data, false, null));
  //     })
  //     .catch(function(err) {
  //       console.log(err);
  //     });
  // }

  // Generic update object
  // Subscribe on it in case if you want to handle all possible
  // event types in one callback
  console.log('update', message);
});
