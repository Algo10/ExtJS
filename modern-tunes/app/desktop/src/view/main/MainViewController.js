Ext.define('ModernTunes.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',
  requires: [
    'ModernTunes.view.Preview'
],

  onButtonClick: function (button) {
    this.lookupReference('df').setValue(Date.now())
  },
  onThumbSelect: function(thumbs, record) {
    this.onShowPreview(record);
},

onGridSelect: function(grid, records) {
  this.onShowPreview(records[0]);
},
onShowPreview: function (record) {
  if (this.getView().down('video')) {
    return;
}

  var videoConfig = {
    xtype: 'video',
    url: record.data.preview,
    posterUrl: record.data.image
};

var linkConfig = { 
  docked: 'bottom',
  xtype: 'component',
  data: {
      itunesstore: record.data.itunesstore
  }
};

var containerConfig = { // parent container of the video and the anchor/link
  xtype: 'container',
  title: record.data.title + ' — ' + record.data.artist,
  style: '{background-color: black;}',
  layout: 'fit',
  items: [
      videoConfig,
      linkConfig
  ]
};

var vid = Ext.create({ // instance of the Preview Dialog class displaying the container
  xtype: 'preview',
  title: record.data.title,
  layout: 'fit',
  items: [containerConfig],
});
vid.show();
}

})
