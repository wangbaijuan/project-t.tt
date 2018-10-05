(function(){

    var nav_cart = document.getElementById('nav-cart');
    if(nav_cart){ // 个人中心
        var nav_cart_wrapper = document.querySelector('#nav-cart > .nav-cart-wrapper');
        
        nav_cart.addEventListener("mouseenter", function(){
            nav_cart_wrapper.classList.add("active");
        });
        nav_cart.addEventListener("mouseleave", function(){
            nav_cart_wrapper.classList.remove("active");
        });
    }

    var nav_user = document.getElementById('nav-user');
    var nav_user_list = document.querySelector('#nav-user > .nav-user-list');
    nav_user.addEventListener("mouseenter", function(){
        nav_user_list.classList.add("active");
    })
    nav_user.addEventListener("mouseleave", function(){
        nav_user_list.classList.remove("active");
    })
})();