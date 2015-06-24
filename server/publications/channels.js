Meteor.publish('channels', function() {
  if (this.userId) {
    return Channels.find();
  }
});
