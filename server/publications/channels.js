Meteor.publish('channels', function() {
  return Channels.find();
});
