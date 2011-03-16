// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create map window and its nav-button. Connect to correct window
//
var map = Titanium.UI.createWindow({  
    title:'Lost & Found',
    backgroundColor:'#fff',
	url:'main_windows/map.js'
});
var mapTab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Karta',
    window:map
});

//
// create foundWindow and its tab.
//
var found = Titanium.UI.createWindow({  
    title:'Hittat något?',
    backgroundImage:'KS_nav_views.png',
	url:'main_windows/foundInputs.js'
});
var foundTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Hittat något?',
    window:found
});

//
//  CREATE FoundItems window and tab.
//

var foundItems = Titanium.UI.createWindow({  
    title:'Upphittat',
    backgroundColor:'#fff',
	url:'main_windows/foundItems.js'
});
var foundItemsTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Upphittat',
    window:foundItems
});

var foundItemLabel = Titanium.UI.createLabel({
	color:'#999',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

foundItems.add(foundItemLabel);

//
//  add tabs
//
tabGroup.addTab(mapTab);  
tabGroup.addTab(foundTab);  
tabGroup.addTab(foundItemsTab);

// open tab group
tabGroup.open();
