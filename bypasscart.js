var bypassminicart = {
        

        byPass : function(){
            cartURL = "https://secure.batteryjunction.com/theshorelinemarket/cgi-bin/wg-order?theshorelinemarket";
            window.location.replace(cartURL);
        },

 

        productAdded : function(){
            setInterval(function(){
                var foundProductinCart = $(".floating-cart-items").find("table.single-item").length;
                if(foundProductinCart > 0){
                    bypassminicart.byPass();
                }
            }, 2000);
        },

 

        atc_clicks : function(){
            $(document).on('click',function(){
                bypassminicart.productAdded();
            });
        },
        init : function(){
            bypassminicart.atc_clicks();
        },
};
$(function(){
    bypassminicart.init();
});

//response point
jQuery(document).on('click', '.add-to-cart', function(){
            ABTastyClickTracking('Clicks on Add To Cart [all recipes]', null, 558898);
            console.log('Clicks on Add To Carts [all recipes]');
        });

jQuery(document).on('click',"div[class='cart-icon fa fa-shopping-cart']", function(){
            ABTastyClickTracking('Clicks on mini-cart [all recipes]', null, 558898);
            console.log('Clicks on Add To Cart [all recipes]');
        });
