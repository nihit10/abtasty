
/*var nav=(function(){

      var menuToggle= function(){
            $("nav ul").toggleClass("showing");
      };
      var scrollUp= function(){

            if ($("window").scrollTop()){
                  
                  $('nav').addClass('black');
            }
            else{

                  $('nav').removeClass('black');
            }
      };
      return{
            bindFunction: function(){

                  $(window).on("scroll", scrollUp)
                  $(".menu-icon").on("click", menuToggle)
            }
      }

})();
nav.bindFunction();
*/

// Menu-toggle button
      
            var nav=(function(){
      
            
            var scrollUp= function(){
                        if($(window).scrollTop()) {
                              console.log("aaaaa");
                              $('nav').addClass('black');
                        }

                        else {
                              $('nav').removeClass('black');
                              console.log("ddddddaa");
                        }
            };
            var menuToggle= function(){
                  console.log("asdada");
                 
                  $("nav ul").toggleClass("showing");

            };
            return {
            bindFunctions: function(){
                  
                  $(function(){
                        $(".menu-icon").on("click", menuToggle)
                  });
                  $(window).on("scroll", scrollUp)
                  console.log("hello");

      }
      };
})();
nav.bindFunctions();