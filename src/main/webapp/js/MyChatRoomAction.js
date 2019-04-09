requirejs(['SHARED/extensionRegistry'], function(extensionRegistry) {
  extensionRegistry.registerExtension('chat', 'room-action', newAction);
});

// define the new action
var newAction = {
  key: 'whoIsAdmin',
  labelKey: 'Who is admin ?',
  class: 'uiIconAdmin',
  type: 't',
  enabled: function() {
    return true;
  }
};

document.addEventListener('exo-chat-setting-whoIsAdmin-requested', function(room) {
  var message = {
    msg : 'Administrator of this room is: ' + room.detail.admins.join(),
    room : room.detail.room,
    clientId: new Date().getTime().toString(),
    user: eXo.chat.userSettings.username,
    timestamp: Date.now()
  };

  // send the message by dispatching the event exo-chat-message-tosend-requested
  document.dispatchEvent(new CustomEvent('exo-chat-message-tosend-requested', {'detail' : message}));
});