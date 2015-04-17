MY_COLOR = null;
RenderLimit = 101;
zIndexCounter = 0;

Meteor.startup(function() {

  MY_COLOR = Colors.getRandColor();

  var allSpotsCursor = Spots.find({});

  allSpotsCursor.observeChanges({
    added: function() {
      zIndexCounter++;
    }
  });

});