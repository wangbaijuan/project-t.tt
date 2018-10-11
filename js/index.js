$(".remen .story-title .arrow .fa-chevron-circle-right").on("click", function(){
    $(this).addClass("disable-arrow").siblings().removeClass("disable-arrow");
    $(".remen .category").css('transform','translate(-1218px)');
})
$(".remen .story-title .arrow .fa-chevron-circle-left").on("click", function(){
    $(this).addClass("disable-arrow").siblings().removeClass("disable-arrow");
    $(".remen .category").css('transform','translate(0px)');
})

