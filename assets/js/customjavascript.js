/*functions below is to hide all the images based on NO from image category on any Browser*/
//function triggers when NO is pick from Image Category due to the Formula 'contains JavaScript' that's link to it.
function myfunctionhide()
{
//var (short for variable) images will  look for all css clases (its represented with a dot '.') 
//that start with .XOB, .XOBDis, ,XOBErr and contain img[oi] description, this is what is used to look for any image that has that terminology
	var images = document.querySelectorAll('.xOB img[oi], .xOBDis img[oi], .xOBErr img[oi]');
//for is used to do a search in every single result that comes back
	for (var i=0; i<images.length; i++)
	{
//var image will carry the result of the current images info that is in process at the time of the search
		var image=images[i];
//style.cssText is a command that we will used to provide a new style with the current command display:none (none is used to turn off all borders effects) to //every single result that is inside the image variable
		image.style.cssText = "display: none;";
	}
	
//var (short for variable) noneoption will  look for all css id's (its represented with a hash tag '#')  
//that start with #none description, and all that contains in it.
	var noneoption = document.querySelectorAll('#none');
//for is used to do a search in every single result that comes back
	for (var i=0; i<noneoption.length; i++)
	{
//var empty will carry the result of the current noneoption info that is in process at the time of the search
		var empty=noneoption[i];
//style.cssText is a command that we will used to provide a new style with the current command display:none (none is used to turn off all borders effects) to //every single result that is inside the empty variable
		empty.style.cssText = "display: none;";
	}
	
//var (short for variable) noneoption1 will  look for all css id's (its represented with a hash tag '#')  
//that start with #none1 description, and all that contains in it.
	var noneoption1 = document.querySelectorAll('#none1');
//for is used to do a search in every single result that comes back
	for (var i=0; i<noneoption1.length; i++)
	{
//var empty will carry the result of the current noneoption1 info that is in process at the time of the search
		var empty1=noneoption1[i];
//style.cssText is a command that we will used to provide a new style with the current command display:none (none is used to turn off all borders effects) to //every single result that is inside the empty variable
		empty1.style.cssText = "margin-bottom: 13px;";
	}	
	
//var (short for variable) noneoption2 will  look for all css id's (its represented with a hash tag '#')  
//that start with #none2 description, and all that contains in it.
	var noneoption2 = document.querySelectorAll('#none2');
//for is used to do a search in every single result that comes back
	for (var i=0; i<noneoption2.length; i++)
	{
//var empty will carry the result of the current noneoption2 info that is in process at the time of the search
		var empty2=noneoption2[i];
//style.cssText is a command that we will used to provide a new style with the current command display:none (none is used to turn off all borders effects) to //every single result that is inside the empty variable
		empty2.style.cssText = "margin-bottom: 13px;";
	}
	
//var (short for variable) noneoption3 will  look for all css id's (its represented with a hash tag '#')  
//that start with #none3 description, and all that contains in it.
	var noneoption3 = document.querySelectorAll('#none3');
//for is used to do a search in every single result that comes back
	for (var i=0; i<noneoption3.length; i++)
	{
//var empty will carry the result of the current noneoption3 info that is in process at the time of the search
		var empty3=noneoption3[i];
//style.cssText is a command that we will used to provide a new style with the current command display:none (none is used to turn off all borders effects) to //every single result that is inside the empty variable
		empty3.style.cssText = "margin-bottom: 13px;";
	}

//var (short for variable) tool will  look for all css clases (its represented with a dot '.') 
//that start with .mytooltip
var tool = document.querySelectorAll('.mytooltip');
//for is used to do a search in every single result that comes back
	for (var i=0; i<tool.length; i++)
	{
//var image will carry the result of the current div info that is in process at the time of the search
		var tip=tool[i];
//style.cssText is a command that we will used to provide a new style with the current command display:none (none is used to turn off all borders effects) to //every single result that is inside the image variable
		tip.style.cssText = "display: none;";
	}
}
/*functions below is to Show all the images based on YES from image category on any Browser*/
//function triggers when YES is pick from Image Category due to the Formula 'contains JavaScript' that's link to it.
function myfunctionshow()
{
//var (short for variable) images will  look for all css clases (its represented with a dot '.') 
//that start with .XOB, .XOBDis, ,XOBErr and contain img[oi] description, this is what is used to look for any image that has that terminology
	var images = document.querySelectorAll('.xOB img[oi], .xOBDis img[oi], .xOBErr img[oi]');
//for is used to do a search in every single result that comes back
	for (var i=0; i<images.length; i++)
	{
//var image will carry the result of the current images info that is in process at the time of the search
		var image=images[i];
//style.cssText is a command that we will used to provide a new style with the current command display:block (block is used to turn on all borders effects) //to every single result that is inside the image variable
		image.style.cssText = "display: block;";
	}
//var (short for variable) imagenes will look for all css tags (its represented with symbol of the element, p for paragraph, 
//img for image, div for division, etc.) that start with img
	var imagenes = document.querySelectorAll('img');
//for is used to do a search in every single result that comes back
	for(var i = 0; i < imagenes.length; i++)
	{
//var img will carry the result of the current images info that is in process at the time of the search
		var img = imagenes[i];
//logic if along with command src.match will grab the current info that is in process at the time of the search inside variable img
//and look if the description matches the exact name empty.png
		if (img.src.match('empty.png'))
		{
//if it does, it will do the following instructions:
//1.-turn off all special effect to images that has description as empty
//2.-eliminated borders and styles around every single one, that matches
//3.-do the same effect on IE but using only its commands for it (cross-browser fix)
			img.style.cssText = "-webkit-box-shadow:none; box-shadow:none; margin-left:0px; margin-top:8px; border-style:none; filter:none;"
		}
	}
//var (short for variable) noneoption will  look for all css id's (its represented with a hash tag '#')  
//that start with #none description, and all that contains in it.
	var noneoption = document.querySelectorAll('#none');
//for is used to do a search in every single result that comes back
	for (var i=0; i<noneoption.length; i++)
	{
//var (short for variable) noneoption will  look for all css id's (its represented with a hash tag '#')  
//that start with #none description, and all that contains in it.
//var empty will carry the result of the current noneoption info that is in process at the time of the search
		var empty=noneoption[i];
//style.cssText is a command that we will used to provide a new style with the current command display:block (block is used to turn on all borders effects)to //every single result that is inside the empty variable
		empty.style.cssText = "display: block;";
	}
	
//var (short for variable) noneoption1 will  look for all css id's (its represented with a hash tag '#')  
//that start with #none1 description, and all that contains in it.
	var noneoption1 = document.querySelectorAll('#none1');
//for is used to do a search in every single result that comes back
	for (var i=0; i<noneoption1.length; i++)
	{
//var empty will carry the result of the current noneoption1 info that is in process at the time of the search
		var empty1=noneoption1[i];
//style.cssText is a command that we will used to provide a new style with the current command display:none (none is used to turn off all borders effects) to //every single result that is inside the empty variable
		empty1.style.cssText = "margin-bottom: 100px;";
	}

//var (short for variable) noneoption2 will  look for all css id's (its represented with a hash tag '#')  
//that start with #none2 description, and all that contains in it.
	var noneoption2 = document.querySelectorAll('#none2');
//for is used to do a search in every single result that comes back
	for (var i=0; i<noneoption2.length; i++)
	{
//var empty will carry the result of the current noneoption2 info that is in process at the time of the search
		var empty2=noneoption2[i];
//style.cssText is a command that we will used to provide a new style with the current command display:none (none is used to turn off all borders effects) to //every single result that is inside the empty variable
		empty2.style.cssText = "margin-bottom: 145px;";
	}

//var (short for variable) noneoption3 will  look for all css id's (its represented with a hash tag '#')  
//that start with #none3 description, and all that contains in it.
	var noneoption3 = document.querySelectorAll('#none3');
//for is used to do a search in every single result that comes back
	for (var i=0; i<noneoption3.length; i++)
	{
//var empty will carry the result of the current noneoption3 info that is in process at the time of the search
		var empty3=noneoption3[i];
//style.cssText is a command that we will used to provide a new style with the current command display:none (none is used to turn off all borders effects) to //every single result that is inside the empty variable
		empty3.style.cssText = "margin-bottom: 175px;";
	}

//var (short for variable) tool will  look for all css clases (its represented with a dot '.') 
//that start with .mytooltip
	var tool = document.querySelectorAll('.mytooltip');
//for is used to do a search in every single result that comes back
	for (var i=0; i<tool.length; i++)
	{
//var tip will carry the result of the current div info that is in process at the time of the search
		var tip=tool[i];
//style.cssText is a command that we will used to provide a new style with the current command display:block (block is used to turn on all borders effects) //to every single result that is inside the image variable
		tip.style.cssText = "display: block;";
	}
}
/*working functions below is to hide all the images when loading the configurator*/
//document.addEventListener is a command of Javascript that tells to listen to all the code that is being load, or process at the time on running the program
//but it only works in newer Browser and IE10 and above
//document.attachEvent is a command of Javascript that tells to listen to all the code that is being load, or process at the time on running the program
//but it only works in old Browsers and IE9 and less
//the logic if along with the command checks if current Browser does not support addEventListener, if this is true will go into attachEvent command
if (!document.addEventListener) 
{
//attachEvent will check if the current page is done from loading all the main structure (HTML,CSS,PHP,etc.) also know as DOM
//once is done (known as onreadystatechange) it will call a function
	document.attachEvent("onreadystatechange", function()
	{
//the function will check the DOM status and return true its complete
		if (document.readyState === "complete" ) 
		{
//once completed, setTimeout command will run a function with an specific time(2000 miliseconds = 2 seconds) after, 
//it will run and do the following instructions:
			setTimeout(function emptyimages()
			{
//var (short for variable) imagenes will look for all css tags (its represented with symbol of the element, p for paragraph, 
//img for image, div for division, etc.) that start with img
				var imagenes = document.querySelectorAll('img');
//for is used to do a search in every single result that comes back
				for(var i = 0; i < imagenes.length; i++)
				{
//var img will carry the result of the current images info that is in process at the time of the search
					var img = imagenes[i];	
					img.disabled=true;
//logic if along with command src.match will grab the current info that is in process at the time of the search inside variable img
//and look if the description matches the exact name empty.png					
					if (img.src.match('empty.png'))
					{
//if it does, it will do the following instructions:
//1.-turn off all special effect to images that has description as empty
//2.-eliminated borders and styles around every single one, that matches
//3.-do the same effect on IE but using only its commands for it (cross-browser fix)
						img.style.cssText = "-webkit-box-shadow:none; box-shadow:none; margin-left:0px; margin-top:8px; border-style:none; filter:none;"
					}
				}
			}, 2000);
			
						// New code POP UP MSG per model//
			setTimeout(function openAllCategories() 
			{
				var tata = document.getElementById("config_body");

				if (tata) 
				{
					
					var abuelo = tata.textContent;
					var QTOR00 = "EDITED_ORDER_1";
					
					var  keywords= ["Bead Blast","Bead Blast Frame","Aztec Gold","Aztec Gold Frame","Green Apple","Green Apple Frame","Hot Sparkle Pink","Hot Sparkle Pink Frame","Sparkle Silver","Sparkle Silver Frame","Sunrise Orange","Sunrise Orange Frame","Yellow","Yellow Frame","Glossy White","Glossy White Frame","White","White<br>(ONLY for Zebra Color Fusion; if NO other Frame Std Color is chosen)","Black","Black Frame","Black Cherry","Black Cherry Frame","Black Opal","Black Opal Frame","Blue Opal","Blue Opal Frame","Candy Blue","Candy Blue Frame","Candy Purple","Candy Purple Frame","Candy Red","Candy Red Frame","Electric Blue","Electric Blue Frame","Evergreen","Evergreen Frame","Glow","Glow Frame","Mauve Pink","Mauve Pink Frame","Root Beer","Rootbeer","Rootbeer Frame","Titanium Finish Pnt","Titanium Color Paint","Titanium Color","Titanium (Color Paint)","Titanium","Titanium Color Paint Frame","Matte Black","Matte Black Frame","Matte Black Cherry","Matte Black Cherry Frame","Matte Electric Blue","Matte Electric Blue Frame","Matte Evergreen","Matte Evergreen Frame","Matte Purple","Mattle Purple","Matte Purple Frame","Desert Camouflage","Desert Camo","Desert Tan Frame","Mossy Oak Camouflage","Mossy Oak Camo","Stars and Stripes","Stars And Stripes","Stars & Stripes","Zebra","Aztec Gold - Handrim Clr","Bead Blast - Handrim Clr","Black  - Handrim Clr","Black Cherry - Handrim Clr","Black Opal - Handrim Clr","Blue Opal - Handrim Clr","Candy Blue - Handrim Clr","Candy Purple - Handrim Clr","Candy Red - Handrim Clr","Electric Blue - Handrim Clr","Evergreen - Handrim Clr","Glossy White - Handrim Clr","Glow - Handrim Clr","Green Apple - Handrim Clr","Hot Sparkle Pink - Handrim Clr","Mauve Pink - Handrim Clr","Rootbeer - Handrim Clr","Sparkle Silver - Handrim Clr","Sunrise Orange - Handrim Clr","Titanium Clr Pnt-Handrim Clr","Yellow - Handrim Clr","Matte Black - Handrim Clr","Matte Black Cherry-Handrim Clr","Matte Electrc Blue-Handrim Clr","Matte Evergreen - Handrim Clr","Matte Purple - Handrim Clr","Salute Green - Handrim Clr","Black Anodize Caster Only","Black Sideguard Color","Black Color","Blue Spoke Color","Green Spoke Color","Orange Spoke Color","Pink Spoke Color","Purple Spoke Color","Red Spoke Color","White Spoke Color","Yellow Spoke Color"];					
					var found = keywords.some(function(code) {
						return abuelo.includes(code);
					});
					
					if (found) 
					{
						 console.warn("keywords found (2)");
						
						if (abuelo.includes(QTOR00))
						{
							console.warn("QTOR00 found (2)");
							alert(`Dear Valued Customer:
 
Effective May 12, 2025, we are excited to announce 20 new exciting modern color options, as part of this introduction we have decided to discontinue several of the existing frame colors, these will no longer be available in the Configurator to select. The system will retain the original selection that was made when copying to a new order or quote. That original color will still appear in the order detail.
 
When making changes and/or revalidating a chair configuration do not select a frame color if you wish to keep the original frame color. It will remain selected in the background. Once you add that configuration to the cart, you will see that original frame color listed in the order detail. 
 
Feel free to select one of our new frame colors if your customer wants to switch from the discontinued color.
 
These discontinued frame colors will remain active on existing quotes & orders until August 12, 2025, or while supplies last.
`);
						} 
						else 
						{
							console.warn("QTOR00 not found (2)");
							//alert("This is a new order, no MSG to show.");
						}
						
					} 
					else 
					{
						 console.warn("keywords not found (2)");
					}
				} 
				else 
				{
					// console.warn("config_body not found in the DOM.");
				}
			}, 8000);
			// New code//
			
		}	
	});
}
//this else-if will be true if previous logic (!document.addEventListener) was false, and also if command addEventListener is available for current Browser
else if (document.addEventListener) 
{
//addEventListener will check if the current page is done from loading all the main structure (HTML,CSS,PHP,etc.) also know as DOM
//once is done (known as DOMContentLoaded) it will call a function that will check the DOM status and return true its complete
    document.addEventListener("DOMContentLoaded", function()
	{
//once completed, setTimeout command will run a function with an specific time(2000 miliseconds = 2 seconds) after, 
//it will run and do the following instructions:
		setTimeout(function emptyimages()
		{
//var (short for variable) imagenes will look for all css tags (its represented with symbol of the element, p for paragraph, 
//img for image, div for division, etc.) that start with img
			var imagenes = document.querySelectorAll('img');
//for is used to do a search in every single result that comes back
			for(var i = 0; i < imagenes.length; i++)
			{
//var img will carry the result of the current images info that is in process at the time of the search
				var img = imagenes[i];
//logic if along with command src.match will grab the current info that is in process at the time of the search inside variable img
//and look if the description matches the exact name empty.png	
				if (img.src.match('empty.png'))
				{
//if it does, it will do the following instructions:
//1.-turn off all special effect to images that has description as empty
//2.-eliminated borders and styles around every single one, that matches
//3.-do the same effect on IE but using only its commands for it (cross-browser fix)
					img.style.cssText = "-webkit-box-shadow:none; box-shadow:none; margin-left:0px; margin-top:8px; border-style:none; filter:none;"
				}
			}
		}, 2000);
		
					// New code POP UP MSG per model//
			setTimeout(function openAllCategories() 
			{
				var tata = document.getElementById("config_body");

				if (tata) 
				{
					
					var abuelo = tata.textContent;
					var QTOR00 = "EDITED_ORDER_1";
					
					var  keywords= ["Bead Blast","Bead Blast Frame","Aztec Gold","Aztec Gold Frame","Green Apple","Green Apple Frame","Hot Sparkle Pink","Hot Sparkle Pink Frame","Sparkle Silver","Sparkle Silver Frame","Sunrise Orange","Sunrise Orange Frame","Yellow","Yellow Frame","Glossy White","Glossy White Frame","White","White<br>(ONLY for Zebra Color Fusion; if NO other Frame Std Color is chosen)","Black","Black Frame","Black Cherry","Black Cherry Frame","Black Opal","Black Opal Frame","Blue Opal","Blue Opal Frame","Candy Blue","Candy Blue Frame","Candy Purple","Candy Purple Frame","Candy Red","Candy Red Frame","Electric Blue","Electric Blue Frame","Evergreen","Evergreen Frame","Glow","Glow Frame","Mauve Pink","Mauve Pink Frame","Root Beer","Rootbeer","Rootbeer Frame","Titanium Finish Pnt","Titanium Color Paint","Titanium Color","Titanium (Color Paint)","Titanium","Titanium Color Paint Frame","Matte Black","Matte Black Frame","Matte Black Cherry","Matte Black Cherry Frame","Matte Electric Blue","Matte Electric Blue Frame","Matte Evergreen","Matte Evergreen Frame","Matte Purple","Mattle Purple","Matte Purple Frame","Desert Camouflage","Desert Camo","Desert Tan Frame","Mossy Oak Camouflage","Mossy Oak Camo","Stars and Stripes","Stars And Stripes","Stars & Stripes","Zebra","Aztec Gold - Handrim Clr","Bead Blast - Handrim Clr","Black  - Handrim Clr","Black Cherry - Handrim Clr","Black Opal - Handrim Clr","Blue Opal - Handrim Clr","Candy Blue - Handrim Clr","Candy Purple - Handrim Clr","Candy Red - Handrim Clr","Electric Blue - Handrim Clr","Evergreen - Handrim Clr","Glossy White - Handrim Clr","Glow - Handrim Clr","Green Apple - Handrim Clr","Hot Sparkle Pink - Handrim Clr","Mauve Pink - Handrim Clr","Rootbeer - Handrim Clr","Sparkle Silver - Handrim Clr","Sunrise Orange - Handrim Clr","Titanium Clr Pnt-Handrim Clr","Yellow - Handrim Clr","Matte Black - Handrim Clr","Matte Black Cherry-Handrim Clr","Matte Electrc Blue-Handrim Clr","Matte Evergreen - Handrim Clr","Matte Purple - Handrim Clr","Salute Green - Handrim Clr","Black Anodize Caster Only","Black Sideguard Color","Black Color","Blue Spoke Color","Green Spoke Color","Orange Spoke Color","Pink Spoke Color","Purple Spoke Color","Red Spoke Color","White Spoke Color","Yellow Spoke Color"];
					
					var found = keywords.some(function(code) {
						return abuelo.includes(code);
					});
					
					if (found) 
					{
						 console.warn("keywords found (1)");
						
						if (abuelo.includes(QTOR00))
						{
							console.warn("QTOR00 found (1)");
							alert(`Dear Valued Customer:
 
Effective May 12, 2025, we are excited to announce 20 new exciting modern color options, as part of this introduction we have decided to discontinue several of the existing frame colors, these will no longer be available in the Configurator to select. The system will retain the original selection that was made when copying to a new order or quote. That original color will still appear in the order detail.
 
When making changes and/or revalidating a chair configuration do not select a frame color if you wish to keep the original frame color. It will remain selected in the background. Once you add that configuration to the cart, you will see that original frame color listed in the order detail. 
 
Feel free to select one of our new frame colors if your customer wants to switch from the discontinued color.
 
These discontinued frame colors will remain active on existing quotes & orders until August 12, 2025, or while supplies last.
`);
						} 
						else 
						{
							console.warn("QTOR00 not found (1)");
							//alert("This is a new order, no MSG to show.");
						}
						
					} 
					else 
					{
						 console.warn("keywords not found (1)");
					}
				} 
				else 
				{
					// console.warn("config_body not found in the DOM.");
				}
			}, 8000);

			// New code//
		
	},false);
}
/*working functions below is to hide all the images based on Reset option from main tool bar on any Browser*/
 //document.getElementById will look into the Page for any Element that has an ID of config_toolbar and once its found
 //it will add all the info it carries to var someElement
var someElement = document.getElementById("config_toolBar");
//document.addEventListener is a command of Javascript that tells to listen to all the code that is being load, or process at the time on running the program
//but it only works in newer Browser and IE10 and above
//document.attachEvent is a command of Javascript that tells to listen to all the code that is being load, or process at the time on running the program
//but it only works in old Browsers and IE9 and less

//the logic if along with the someElement checks if current Browser does not support addEventListener, if this is true will go into attachEvent command
if (!someElement.addEventListener) 
{
//attachEvent will check on the current page if the customer click on the id(button in page) that carries someElement and if it did, 
//it will trigger an function and pass the info into evt
    someElement.attachEvent("onclick", function(evt)
	{
//var result will carry the info thats on evt.srcElement command (evt has the id, and srcElement is a command to listen when you click on the screen)
		var result = evt.srcElement;
//logic if result.innerHTML value is equal to description Reset (innerHTML is a command used to grab the text from the id that was click)
//will jump to setTimeout
	    if (result.innerHTML === "Reset")
	   {
//setTimeout command will run a function with an specific time(1000 miliseconds = 1 seconds) after, 
//it will run and do the following instructions:
			setTimeout(function emptyimages()
			{
//var (short for variable) imagenes will look for all css tags (its represented with symbol of the element, p for paragraph, 
//img for image, div for division, etc.) that start with img			
				var imagenes = document.querySelectorAll('img');
//for is used to do a search in every single result that comes back
				for(var i = 0; i < imagenes.length; i++)
				{
//var img will carry the result of the current images info that is in process at the time of the search
					var img = imagenes[i];
//logic if along with command src.match will grab the current info that is in process at the time of the search inside variable img
//and look if the description matches the exact name empty.png	
					if (img.src.match('empty.png'))
					{
//if it does, it will do the following instructions:
//1.-turn off all special effect to images that has description as empty
//2.-eliminated borders and styles around every single one, that matches
//3.-do the same effect on IE but using only its commands for it (cross-browser fix)
						img.style.cssText = "-webkit-box-shadow:none; box-shadow:none; margin-left:0px; margin-top:8px; border-style:none; filter:none;"
					}
				}
			}, 1000);
	   }
	});
}
//this else will be true if previous logic (!someElement.addEventListener) was false
else 
{
//addEventListener will check on the current page if the customer click on the id (button in page) that carries someElement and if it did, 
//it will trigger an function and pass the info into evt
    someElement.addEventListener("click", function(evt)
	{
//var result will carry the info thats on evt.Target command (evt has the id, and Target is a command to listen when you click on the screen)
		var result = evt.target;
//logic if result.innerHTML value is equal to description Reset (innerHTML is a command used to grab the text from the id that was click)
//will jump to setTimeout
	   if (result.innerHTML === "Reset")
	   {
//setTimeout command will run a function with an specific time(1000 miliseconds = 1 seconds) after, 
//it will run and do the following instructions:
			setTimeout(function emptyimages()
			{
//var (short for variable) imagenes will look for all css tags (its represented with symbol of the element, p for paragraph, 
//img for image, div for division, etc.) that start with img	
				var imagenes = document.querySelectorAll('img');
//for is used to do a search in every single result that comes back
				for(var i = 0; i < imagenes.length; i++)
				{
//var img will carry the result of the current images info that is in process at the time of the search
					var img = imagenes[i];
//logic if along with command src.match will grab the current info that is in process at the time of the search inside variable img
//and look if the description matches the exact name empty.png	
					if (img.src.match('empty.png'))
					{
//if it does, it will do the following instructions:
//1.-turn off all special effect to images that has description as empty
//2.-eliminated borders and styles around every single one, that matches
//3.-do the same effect on IE but using only its commands for it (cross-browser fix)
						img.style.cssText = "-webkit-box-shadow:none; box-shadow:none; margin-left:0px; margin-top:8px; border-style:none; filter:none;"
					}
				}
			}, 1000);
	   } 
	},false);
}
/*Function below is to make big or small the images based on clicks*/
/*also to change message based on the size*/
/* empty.png or gray out image option will have turn off all features and no resize */
function myfunctionalpha(e)
{
	var a = e.querySelectorAll('img');
	var b = e.querySelectorAll('.mytooltip');
	var c = e.parentNode.parentNode.className;
	var d = e.parentNode.id;
	if (a[0].src.match('empty.png') || c == "xOBDis")
	{
		//do nothing...
	}
	else
	{
		if (d == "img75")
		{
			if (a[0].width == "75")
			{
				b[0].innerHTML="Click to Shrink";
				b[0].style.width="165px";
				a[0].style.width="150px";
				a[0].style.height="150px";
			}
			else 
			{
				b[0].innerHTML="Click to Expand";
				b[0].style.width="90px";
				a[0].style.width="75px";
				a[0].style.height="75px";
			}
		}
		else if (d == "img120")
		{
			if(a[0].width == "120")
			{
				b[0].innerHTML="Click to Shrink";
				b[0].style.width="165px";
				a[0].style.width="150px";
				a[0].style.height="150px";
			}
			else
			{
				b[0].innerHTML="Click to Expand";
				b[0].style.width="135px";
				a[0].style.width="120px";
				a[0].style.height="120px";
			}
		}
		else
		{
			//do nothing...
		}
	}
}
/*Function below is to show the description in the message box based on the image name*/
/*also to include the message if image is not empty.png */
/* empty.png or gray out image will show no bar description */
function myfunctionbeta(e1)
{
	var a1 = e1.querySelectorAll('img');
	var b1 = e1.querySelectorAll('.mytooltip');
	var c1 = e1.parentNode.parentNode.className;
	if (a1[0].src.match('empty.png') || c1 == "xOBDis")
	{
		b1[0].innerHTML="";
	}
	else
	{
		if (b1[0].innerHTML == "")
		{
			b1[0].innerHTML="Click to Expand";
		}
		else
		{
			//do nothing...
		}
	}
}
/*Function below is to return to nomal size the image when hovering over another option*/
function myfunctiongamma(e2)
{
	var a2 = e2.querySelectorAll('img');
	var b2 = e2.querySelectorAll('.mytooltip');
	var c2 = e2.parentNode.parentNode.className;
	var d2 = e2.parentNode.id;
	{
		if (a2[0].src.match('empty.png') || c2 == "xOBDis")
		{
			b2[0].innerHTML="";
		}
		else
		{
			if (d2 == "img75")
			{
				b2[0].innerHTML="Click to Expand";
				b2[0].style.width="90px";
				a2[0].style.width="75px";
				a2[0].style.height="75px";
			}
			else if (d2 == "img120")
			{
				b2[0].innerHTML="Click to Expand";
				b2[0].style.width="135px";
				a2[0].style.width="120px";
				a2[0].style.height="120px";
			}
			else
			{
				//do nothing...
			}
		}
	}
}
