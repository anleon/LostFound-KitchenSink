// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Hittat något?',
    backgroundImage:'KS_nav_views.png'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Hittat något?',
    window:win1
});

//
//  CREATE FIELD ONE
//
var item = Titanium.UI.createLabel({
	color:'#fff',
	text:'Vad har du funnit?',
	top:10,
	left:30,
	width:100,
	height:'auto'
});

win1.add(item);

var itemField = Titanium.UI.createTextField({
	hintText:'Vad har du funnit?',
	height:35,
	top:35,
	left:30,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win1.add(itemField);

//
//  CREATE FIELD TWO
//
var description = Titanium.UI.createLabel({
	color:'#fff',
	text:'Beskrivning',
	top:75,
	left:30,
	width:100,
	height:'auto'
});

win1.add(description);

var descriptionField = Titanium.UI.createTextField({
	hintText:'Beskrivning',
	height:35,
	top:100,
	left:30,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win1.add(descriptionField);

//
// CREATE BUTTON
//
var save = Titanium.UI.createButton({
	title:'Save my Information',
	top:170,
	left:30,
	height:30,
	width:250
});
win1.add(save);
var win2 = Titanium.UI.createWindow({  
    title:'Tappat katt',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tappat',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'Kartan',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Karta här',
    window:win3
});

Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Ti.Geolocation.purpose = "Get User Location";
//
//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
//  THIS VALUE IS IN METERS
//
Titanium.Geolocation.distanceFilter = 10;
 
//
// GET CURRENT POSITION - THIS FIRES ONCE
//
Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (e.error)
    {
        alert('HFL cannot get your current location');
        return;
    }
 
    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    var altitude = e.coords.altitude;
    var heading = e.coords.heading;
    var accuracy = e.coords.accuracy;
    var speed = e.coords.speed;
    var timestamp = e.coords.timestamp;
    var altitudeAccuracy = e.coords.altitudeAccuracy;
// karta skapas etc..


	var mountainView = Titanium.Map.createAnnotation({
	    latitude:latitude,
	    longitude:longitude,
	    title:"Här är du",
	    pincolor:Titanium.Map.ANNOTATION_PURPLE,
	    animate:true,
	    leftButton: 'KS_nav_ui.png',
	    myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
	});
 
	var mapview = Titanium.Map.createView({
	    mapType: Titanium.Map.STANDARD_TYPE,
	    region: {latitude:latitude, longitude:longitude, 
	            latitudeDelta:0.01, longitudeDelta:0.01},
	    animate:true,
	    regionFit:true,
	    userLocation:true,
	    annotations:[mountainView]
	});
	
	win3.add(mapview);
});




//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();
