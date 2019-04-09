requirejs(['SHARED/extensionRegistry'], function(extensionRegistry) {
  extensionRegistry.registerExtension('chat', 'composer-application', chatMyComposerAppPlugin);
});

var chatMyComposerAppPlugin = {
  key: 'my',
  rank: 70,
  type: 'type-my',
  nameKey: 'exoplatform.chat.my.name',
  labelKey: 'My Chat Plugin',
  iconClass: 'uiIconChatGif',
  html: function() {
    // return html of the popup displayed when clicking the action
    return 'My Chat Composer Application plugin';
  },
  submit: function(chatServices, message, formData, contact) {
    // function executed when the submit button of the popup is clicked, after the validate method
    message = {
      msg : 'My message (sent on ' + new Date() + ') !',
      room : contact.room,
      clientId: new Date().getTime().toString(),
      user: eXo.chat.userSettings.username,
      timestamp: Date.now()
    };

    // send the message by dispatching the event exo-chat-message-tosend-requested
    document.dispatchEvent(new CustomEvent('exo-chat-message-tosend-requested', {'detail' : message}));

    return {hide: true};
  }
};
