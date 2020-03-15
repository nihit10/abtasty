// console.log("CONNECTED");
$(document).ready(function(){
  var sliderr={
      addActive:function(){
        $('.slide').first().addClass('active');
        $('.slide').hide();
        $('.active').show();
      },

      bindFunctions: function(){
        $('#next').on('click',this.nextSlide);
        $('#prev').on('click',this.prevSlide);
      },


      nextSlide: function (){
        console.log("NEXT CLICKED!");
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')){
          $('.slide').first().addClass('active');
        }
        else {
          $('.oldActive').next().addClass('active')
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(this.speed);
        $('.active').fadeIn(this.speed);
      },

      prevSlide: function(){
        console.log("PREV CLICKED!");
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')){
          $('.slide').last().addClass('active');
        }
        else {
        $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(this.speed);
        $('.active').fadeIn(this.speed);
      },
      init:function(){
        var speed = 500;              //fade speed
        var autoswitch = true;        //Autoslider options
        var autoswitch_speed = 4000;
        var obj=this;
        obj.addActive();
        obj.bindFunctions();
      }
  }.init();

});
