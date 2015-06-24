Meteor.publish('messages', function(channel) {
  return Messages.find({_channel: channel});
});
