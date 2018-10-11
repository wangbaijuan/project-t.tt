let data = '[{ "id":"1", "src":"./img/product/product-lg-1.png" },{ "id":"2", "src":"./img/product/product-lg-2.png" },{ "id":"3", "src":"./img/product/product-lg-3.png" },{ "id":"4", "src":"./img/product/product-lg-4.png" }]';
data = JSON.parse(data);
console.log(data);
$(".product-info .product-spec-color .product-spec").on("click", ".spec-color > li", function(){
    var id = $(this).attr("id");
    console.log(id);
    for(var item of data){
        if(id == item.id){
            $(".product-view img").attr("src",item.src);
        }
    }
})