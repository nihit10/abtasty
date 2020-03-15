$(document).ready(function(){
var reminderMessage={
	
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

	getProductInfo: function(){
		var myCookie = this.getCookie("hasItem");
		console.log(myCookie);
		if (myCookie == 0){
			return ""
		}else{

			var a=$(".floating-cart .count").text();
	        var b=a.replace(/[()]/g, ''); 
	        var c=b.split("");
	        var len=parseInt(c[0]);
			if(len > 0){
				this.setCookie("hasItem", 1, 180);
			}else{
				this.setCookie("hasItem",0,180);
			}
		}
			


	},

	displayMessage: function(){
		var display = this.getCookie("hasItem");
		if(display == 1){
                $("header .utility-bar").after('\
                <div class="sitewide-promo top" style="color:#fff; background-color:#032E6E; min-height:40px; ">\
                <span style="font-size:14px; color:#fff;">You have  <span id="text"> </span> items left. </span>\
                </div>');
                //$("#text").append(d);
                this.setCookie("hasItem",0,180);
                console.log(this.getCookie("hasItem"));

            }else{
            	return "";
            }
        },
        init: function(){
        var obj=this;
        obj.getProductInfo();
        obj.displayMessage();
        }
	}.init();
});