Meteor.publish('messages', function(channel) {
  if (this.userId) {
    return Messages.find({_channel: channel});
  }
});
