$(function(){
	var slide={
		gallery:function(){
			var galleryImage=$(".slider").find("img").first();
	//var images=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];

			var images=["https://sep.yimg.com/ca/I/theshorelinemarket_2618_1995303620",
			"https://sep.yimg.com/ca/I/theshorelinemarket_2616_1203044657",
			"https://sep.yimg.com/ca/I/theshorelinemarket_2616_1203467581",
			"https://sep.yimg.com/ca/I/theshorelinemarket_2615_2443994674"]

			var i=0;

			setInterval(function(){
				i=(i+1)% images.length;
				galleryImage.fadeOut(function(){
				$(this).attr("src", images[i]);
				$(this).fadeIn();
			});
			},2000);
		},
		prepareHTML: function(){
			$("#eci-new-items\\.html").after('<h2 class="heading">\
				<span>Slide Section</span>\
				</h2>\
				<center>\
				<div class="slider">\
				<img src="https://sep.yimg.com/ca/I/theshorelinemarket_2618_1995303620">\
				</div>\
				<br></br>\
				</center>\
				');
		},
		init:function(){
			this.prepareHTML();
			this.gallery();
		}
	}.init()
	
});