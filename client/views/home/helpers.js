Template.main.helpers({
  ClickSpots: function() {
    return Spots.find({}, {
      sort: [['createdAt', 'desc']],
      limit: RenderLimit
    });
  },

  positioningStyle: function() {
    var style = "position: absolute; top: " + this.y + 'px; left: ' + this.x + 'px; z-index: ' + zIndexCounter + ';'
    return {
      style: style
    };
  },

  colorStyle: function() {
    var style = "color: " + this.color + ";";
    return {
      style: style
    };
  },

});