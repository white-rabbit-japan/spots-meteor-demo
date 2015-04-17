Template.main.helpers({
  counter: function() {
    return Session.get('counter');
  }
});

Template.body.events({
  'click .fullScreenDiv': function(e, t) {
    handleClick(e);
  },
  // 'touchstart .fullScreenDiv': function(e, t) {
  //   handleClick(e);
  // }
});

function handleClick(e) {
  Spots.insert({
    x: e.pageX,
    y: e.pageY,
    color: MY_COLOR,
    createdAt: new Date()
  });
}



