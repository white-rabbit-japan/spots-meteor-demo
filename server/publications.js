Meteor.publish("spots", function() {
  var cursor = Spots.find({}, {
    sort: [
      ['createdAt', 'desc']
    ],
    limit: RenderLimit
  });
  
  return cursor ? cursor : this.ready();
});
