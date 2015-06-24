Channels = new Mongo.Collection('channels');

Channels.allow({
  insert: function(userId, doc) {
    if (userId) {
      return true;
    }
  }
});
