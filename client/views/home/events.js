Template.body.events({
  'click .fullScreenDiv': function(e, t) {
    handleClick(e);
  },

});

function handleClick(e) {
  Spots.insert({
    x: e.pageX,
    y: e.pageY,
    color: MyColor,
    createdAt: new Date()
  });
}



