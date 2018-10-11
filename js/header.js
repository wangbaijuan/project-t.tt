(function(){
    var nav_cart = document.getElementById('nav-cart');
    var nav_user = document.getElementById('nav-user');// 个人中心
    var nav_user_list = document.querySelector('#nav-user > .nav-user-list');
    var fix_bottom_bar = document.getElementById("fix-bottom-bar");
    var bodyHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    var fHeight = $("footer").height() * 3;
    var fixHeight = ($("#fix-bottom-bar").height())*4;

    // 购物车图标操作
    if(nav_cart){ 
        var nav_cart_wrapper = document.querySelector('#nav-cart > .nav-cart-wrapper');
        
        nav_cart.addEventListener("mouseenter", function(){
            nav_cart_wrapper.classList.add("active");
        });
        nav_cart.addEventListener("mouseleave", function(){
            nav_cart_wrapper.classList.remove("active");
        });
    }
    console.log("url:::",);
    //给人中心图标操作
    if(location.search) {
        nav_user.addEventListener("mouseenter", function(){
            nav_user_list.classList.add("active");
        })
        nav_user.addEventListener("mouseleave", function(){
            nav_user_list.classList.remove("active");
        })
    }
    
    //导航栏固定操作
    window.addEventListener('scroll',function(){
        var scrollTop=document.documentElement.scrollTop
        ||document.body.scrollTop;
        if($(".nav-sub")){
            if(scrollTop > 75){
                $("header > .nav-sub").addClass("fix-nav-sub");
            }
            else {
                $("header > .nav-sub").removeClass("fix-nav-sub");
            }
        }
        if(fix_bottom_bar){
            
            console.log(fHeight,fixHeight,scrollTop + fHeight + fixHeight, bodyHeight);
            if(scrollTop + fHeight + fixHeight  > bodyHeight){
                fix_bottom_bar.style.position="static";
            }
            else if(scrollTop + fHeight + fixHeight < bodyHeight) {
                fix_bottom_bar.style.position="fixed";
            }
        }
        
        
    },false);    
})();