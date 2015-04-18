MyColor = null;
RenderLimit = 101;
zIndexCounter = 0;

Meteor.startup(function() {

  MyColor = Colors.getRandColor();

  var allSpotsCursor = Spots.find({});

  allSpotsCursor.observeChanges({
    added: function() {
      zIndexCounter++;
    }
  });

});