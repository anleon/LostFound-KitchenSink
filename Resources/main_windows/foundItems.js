foundItems = Titanium.UI.currentWindow;

function getItems() {
	var data = [];	//skapa table view object.
	
	var xhr = Titanium.Network.createHTTPClient();
	xhr.open("GET", "http://hitta.mindre.org/foundItems.php");
	
	xhr.onload = function() {
		try {
			var json = eval('(' + this.responseText + ')');
		
			Titanium.API.info('json är:  ' + json.length);
	
			for (var c = 0; c < json.length; c++) {
				var item = json[c].item;
				var description = json[c].description;
				var bgcolor = (c % 2) == 0 ? '#fff' : '#eee';
		
				var row = Ti.UI.createTableViewRow({hasChild:true,height:'auto',backgroundColor:bgcolor});

				// Create a vertical layout view to hold all the info labels and images for each tweet
				var post_view = Ti.UI.createView({
					height:'auto',
					layout:'vertical',
					left:5,
					top:5,
					bottom:5,
					right:5
				});
				
				// TODO: add pictures here
				var av = Ti.UI.createImageView({
						image:'../KS_nav_ui.png',
						left:0,
						top:0,
						height:48,
						width:48
					});
				// Add the image to the view
				post_view.add(av);

				var user_label = Ti.UI.createLabel({
					text:item,
					left:54,
					width:120,
					top:-48,
					bottom:2,
					height:16,
					textAlign:'left',
					color:'#444444',
					font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
				});
				// Add the username to the view
				post_view.add(user_label);

				var date_label = Ti.UI.createLabel({
					text:'Mer Information:',
					right:0,
					top:-18,
					bottom:2,
					height:14,
					textAlign:'right',
					width:110,
					color:'#444444',
					font:{fontFamily:'Trebuchet MS',fontSize:12}
				});
				// Add the date to the view
				post_view.add(date_label);

				var tweet_text = Ti.UI.createLabel({
					text:description,
					left:54,
					top:0,
					bottom:2,
					height:'auto',
					width:236,
					textAlign:'left',
					font:{fontSize:14}
				});
				// Add the tweet to the view
				post_view.add(tweet_text);
				// Add the vertical layout view to the row
				row.add(post_view);
				row.className = 'item'+c;
				data[c] = row;
			}
			// Create the tableView and add it to the window.
			var tableview = Titanium.UI.createTableView({data:data,minRowHeight:58});
			Ti.UI.currentWindow.add(tableview);
		} catch(E) {
			alert(E);
		}
	};
	xhr.send();
}

getItems();