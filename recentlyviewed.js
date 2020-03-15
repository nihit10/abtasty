var recentlyviewitem = {
	data: function(){
		//return (JSON.parse(this.getCookie("RVIS")).length) ? JSON.parse(this.getCookie("RVIS")) : [];
		return (this.getCookie("RVIS").length) ? JSON.parse(this.getCookie("RVIS")) : [];
	},
	setCookie: function(cname,cvalue,exdays){
		 var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	},
	getCookie: function(cname){
		var name = cname + "=";
	 	//var decodedCookie = decodeURIComponent(document.cookie);
	  	var ca = document.cookie.split(';');
	  	for(var i = 0; i < ca.length; i++) {
	    	var c = ca[i];
	    	while (c.charAt(0) == ' ') {
	      		c = c.substring(1);
	    	}
		    if (c.indexOf(name) == 0) {
		      return c.substring(name.length, c.length);
		    }
	  	}
	  return "";
	},
	//updateCookie: function(){

	//},
	getProductinfo: function(){
		if($("main.item").length){
			var imgSrc= $("a.mainItemImagefancybox").eq(0);
			var image = imgSrc.attr("href");
			var url=window.location.href;
			var nam=$("h1.item-name").text();
			var name=nam.substring(0,nam.indexOf('-'));
			var price = $(".sale-price").text();

			var prodObj = {
				"imgSrc" : image,
				"name"	: name,
				"url" : url,
				"price" : price
			}

			var dat = this.data();
			var datLen = dat.length;
			//console.log(dat);
			for(var i = 0; i < datLen; i++){
				if(dat[i].name.includes(name)){
					console.log("this already exists");
					return "";
				} 
			}
			dat.push(prodObj);
			var len=dat.length;
			if(len>3){
				dat.shift();
			}

			this.setCookie("RVIS", JSON.stringify(dat), 180);
			
			
		}
	
	},
	prepareHTML: function(){
		var html = "<table>";
		var data = this.data();
		var dataLen = data.length;
		for(var i = 0; i < dataLen; i++){
			html += "<tr><td> Name: "+ data[i].name +"</td> <td>"+data[i].url +"</td> <tr>";
		}
		html += "</table>";
		return html;
	},
	render: function(){
		var html = this.prepareHTML();
		$("body").prepend(html);
	},
	init: function(){
		this.getProductinfo();
		this.render();
	}
}.init();