Messages = new Mongo.Collection('messages');

Messages.allow({
  insert: function(userId, doc) {
    if (userId && doc._channel) {
      return true;
    }
  }
});
