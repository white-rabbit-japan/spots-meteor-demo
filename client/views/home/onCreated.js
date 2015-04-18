Template.body.onCreated(function() {
  this.subscribe("spots");
  console.log('template', this);
});