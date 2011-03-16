found = Titanium.UI.currentWindow;

var item = Titanium.UI.createLabel({
	color:'#fff',
	text:'Vad har du funnit?',
	top:10,
	left:30,
	width:150,
	height:'auto'
});

found.add(item);

var itemField = Titanium.UI.createTextField({
	hintText:'Vad har du funnit?',
	height:35,
	top:35,
	left:30,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

found.add(itemField);

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

found.add(description);

var descriptionField = Titanium.UI.createTextField({
	hintText:'Beskrivning',
	height:35,
	top:100,
	left:30,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

found.add(descriptionField);

//
// CREATE BUTTON
//
var saveBtn = Titanium.UI.createButton({
	title:'Save my Information',
	top:170,
	left:30,
	height:30,
	width:250
});
found.add(saveBtn);

// TODO add where you are, aka where did you find it- checkbox for current location and textfield for adress? Some sort of connection to map is needed if user is to be able to pinpoint location on map.

var createReq = Titanium.Network.createHTTPClient();
createReq.onload = function () {
	var alertDialog = Titanium.UI.createAlertDialog({  
		title: 'Ditt fynd har sparats',  
		message: this.responseText,  
		buttonNames: ['OK']  
	});  
	alertDialog.show();  
	alertDialog.addEventListener('click',function(e) {  
		found.tabGroup.setActiveTab(2);		//decides what window to go to.  
	});
};

saveBtn.addEventListener('click', function(e) {
	saveBtn.enabled = false;
	saveBtn.opacity = 0.3;
	createReq.open("POST", "http://hitta.mindre.org/found.php");
	var params = {
		itemField: itemField.value,
		descriptionField: descriptionField.value
	};
	createReq.send(params);
});








