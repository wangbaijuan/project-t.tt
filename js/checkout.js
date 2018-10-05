$("#address-items > .address-item:not('.add-new')").on("click", function(){
    $(this).addClass("selected").siblings(".selected").removeClass("selected");
})