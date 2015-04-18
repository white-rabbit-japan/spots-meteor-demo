Spots = new Mongo.Collection('spots');
RenderLimit = 69;

if (Meteor.isServer) {

  Meteor.startup(function() {
    // call from client with Meteor.call('removeAll');
    return Meteor.methods({

      removeAll: function() {

        return Spots.remove({});

      }

    });

  });

}