Ext.define('ModernTunes.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  requires: [
    'ModernTunes.view.main.MainViewController',
    'ModernTunes.view.main.MainViewModel',
    'ModernTunes.view.TunesView'
  ],
  viewModel: {
    type: 'mainviewmodel'
  },
  tabBarPosition: 'bottom',
  items: [{
    title: "Thumbnails",
    listeners: {
      select: 'onThumbSelect'
  },
    xtype: 'tunesview',
                bind: {
                    store: '{tunes}'
                }
}, {
    title: "Grid",
    xtype: 'tunesgrid',
    listeners: {
      select: 'onGridSelect'
  },
    bind: {
      store: '{tunes}'
  }
}]
})
