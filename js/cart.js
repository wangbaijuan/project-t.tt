let $item_box = $(".cart-bottom > .shipping >.detail-box .item-box");
//每个商品 选择按钮
let $select_items = $(".cart-box  .purchased-goods li .select-btn input");
//全选按钮
let $select_all = $(".cart-bottom .cart-bar-operation .select-btn input");

let data = '[ {"id":"1","price":"1789","num":"1"},{"id":"2","price":"29","num":"1" }]';
data = JSON.parse(data);
// 购物车商品商品选中 - 应付总额函数
function calcAll(){
    var sum = 0;
    var total_count = 0;
    var total_price = 0;
    for(var i = 0; i < data.length; i++ ){
        var id = data[i].id-1;
        var num = parseInt(data[i].num);
        if($select_items[id].checked){
            total_price += data[i].price * data[i].num;
            total_count +=  num;
        }
        sum += num;
    }
    total_price = parseFloat(total_price).toFixed(2);
    $item_box.children(".head").children(".price").text(total_price);
    $item_box.children(".head").children(".selected-count").text(total_count);
    $item_box.children(".foot").children(".sum").text(sum);
}

// 购物车商品数量 - 操作
$(".cart-box  .purchased-goods ").on("click", ".count-modify .fa-minus", function(){
    let target = $(this).parent().parent().attr("id");
    for(var item of data){
        if(target == item.id){
           item.num = item.num > 1 ? --item.num:1;
            $(this).next().text(item.num);
            var subtotal = parseFloat(item.num * item.price).toFixed(2) ;
            $(this).parent().next().children().text(subtotal);
        }
    }
    calcAll();
})
// 购物车商品数量 + 操作
$(".cart-box  .purchased-goods ").on("click", ".count-modify .fa-plus", function(){
    let target = $(this).parent().parent().attr("id");
    for(var item of data){
        if(target == item.id){
           item.num = item.num < 5 ? ++item.num:5;
            $(this).prev().text(item.num);
            var subtotal = parseFloat(item.num * item.price).toFixed(2) ;
            $(this).parent().next().children().text(subtotal);
        }
    }
    calcAll();
})

// 全选操作
$select_all.on("click", function(){
    var checked_all = $(this)[0].checked;
   
   $select_items.each( function(index, value){
       this.checked = checked_all;
   } )
   calcAll();
})
//处理某一个商品选中
$(".cart-box .box-inner").on("click", ".purchased-goods li > .select-btn input",  function(){
    var result = true;
    for(var i = 0; i < $select_items.length; i++ ){
        result = result && $select_items[i].checked;
    }
    $select_all[0].checked = result;
    calcAll();
})
//处理某一个商品删除
$(".cart-box .box-inner").on("click", '.purchased-goods li > .fa-close', function(){
    var id ="#"+ $(this).parent().parent().attr("id");
    $("#confirm-modal .modal-content .subbar .confirm").on("click",function(){
        $(id).remove();
    })
})