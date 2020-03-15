 jQuery(document).ready(function(){
     var nav ={
            scrollUp: function(){
                        if($(window).scrollTop()) {
                              console.log("aaaaa");
                              $('nav').addClass('black');
                        }

                        else {
                              $('nav').removeClass('black');
                              console.log("ddddddaa");
                        }
            },
            menuToggle: function(){
                  console.log("asdada");
                 
                  $("nav ul").toggleClass("showing");

            },
            bindFunctions: function(){
                  console.log('aaa');
                  $(".menu-icon").on("click", this.menuToggle)
            
                  $(window).on("scroll", this.scrollUp)
                  console.log("hello");
            },
            init:function(){
                  var obj =this;
                  obj.bindFunctions();
            }

      }.init();
});