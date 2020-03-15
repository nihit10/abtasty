//wait till the page loads
/*
$(function() {

	//set up the tab click event handler
	$("section.tabs ul li").click(function () {
		//handle the tab click event
		//alert("clicked " + this.id);
		//var $tab = $("section.tabs ul li");

		var tabId = this.id; //get the id of the element that was clicked
		var contentId = this.id + "_content"; //figure out the id of the corresonding article element by appending "_content" to the id

		//add the selected class to the selected tab to make its bottom border disappear
		$tab.removeClass("selected");
		$("section.tabs ul li#" + tabId).addClass("selected");

		//a css-based way of showing/hiding a selected article
		$("section.tabs article").removeClass("selected");
		$("section.tabs article#" + contentId).addClass("selected");

		/*
		//an alternative javascript-only way of showing/hiding a selected article 
		//without relying on CSS classes to do that:
		$("section.tabs article").hide(); //make all articles disappear
		$("section.tabs article#" + contentId).show(); //make the selected article appear
		
	});

});*/

jQuery(document).ready(function(){
	var tab ={
		addTab: function(){
			var tabId = this.id;
			var contentId = this.id + "_content";
			
			$("section.tabs ul li").removeClass("selected");
			$("section.tabs ul li#" + tabId).addClass("selected");

			$("section.tabs article").removeClass("selected");
			$("section.tabs article#" + contentId).addClass("selected");
		},
		bindFunctions: function(){
			$("section.tabs ul li").on("click",this.addTab)
		},
		init:function(){
            var obj =this;
            obj.bindFunctions();
        }

	}.init();
});

