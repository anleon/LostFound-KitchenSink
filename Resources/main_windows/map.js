// TODO add the found stuff-pointers att the right locations.

// FIX ME!! THIS DOES NOT WORK IN ANDROID EMULATOR!!! Create way around the problem??.

map = Titanium.UI.currentWindow;
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
 
    var longitude = e.coords.longitude;	//18.086;
    var latitude = e.coords.latitude; //59.5369;
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
	
	map.add(mapview);
});
