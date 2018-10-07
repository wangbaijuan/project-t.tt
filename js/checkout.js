$("#address-items > .address-item:not('.add-new')").on("click", function(){
    $(this).addClass("selected").siblings(".selected").removeClass("selected");
})

$('#addr-modal').on('show.bs.modal', function (e) {
    var _this = $(e.relatedTarget).parent();
    var name = _this.siblings(".name").text();
    var tel = _this.siblings(".contact-number").text();
    var provice = _this.siblings(".province-city").children(".province").text();
    var city = _this.siblings(".province-city").children(".city").text();
    var village = _this.siblings(".province-city").children(".village").text();
    var detail = _this.siblings(".address-detail").text();

    $("#name").val($.trim(name));
    $("#tel").val($.trim(tel));
    $("#detail").val($.trim(detail));

    $("#Province").val(_this.siblings(".province-city").children(".province").attr('value'))
    CityBind();
    $("#City").val(_this.siblings(".province-city").children(".city").attr('value'))
    VillageBind();
    $("#Village").val(_this.siblings(".province-city").children(".village").attr('value'))
})


$(".personal").on("click", function(){
    document.querySelector(".invoice-box .box-inner .corporation-form").style.display = "none";
})
$(".corporation").on("click", function(){
    document.querySelector(".invoice-box .box-inner .corporation-form").style.display = "block";
})

// 提交订单
document.querySelector(".payment-blue-btn").addEventListener("click", function(){
    $(".pay-success-box").removeClass("d-none").siblings().addClass("d-none");
    $(".checkout-fix-bar").addClass("d-none");
})
// 支付方式
$(".payment-info .tag-list .tag-item ").on("click", function(){
    $(this).addClass("select-tag").siblings().removeClass("select-tag");
    let theTarget ="."+$(this).data("type");
    $(theTarget).removeClass("d-none").siblings().addClass("d-none");
})
// 分期方式
$(".instalment-pay-container .common-pay li").on("click", function(){
    $(this).addClass("select-pay").siblings().removeClass("select-pay");
    let theTarget =".instalment-panel > ."+$(this).data("instal");
    $(theTarget).removeClass("d-none").siblings().addClass("d-none");
})


$(function(){
    ProvinceBind();
    $("#Province").change(function(){
        CityBind();
        VillageBind();
    })
    $("#City").change(function(){
        VillageBind();
    })
})


function ProvinceBind(){
    $("#Province").html("");
    var str="<option> 请选择省份 </option>";
    var provice = [
        {areaId:'1', areaName: '北京市' },
        {areaId:'2', areaName: '天津市' },
        {areaId:'3', areaName: '山西省' },
    ]

    $.each(provice,function(i,item){
        str+="<option value="+item.areaId+">"+item.areaName+"</option>"
    })

    $("#Province").append(str);
}

function CityBind(){
    $("#City").html("");
    var options=$("#Province option:selected");
    var province=options.val();
    if(province==""){

        return;
    }
    var str="<option> 请选择城市 </option>";
    var city = [
        {id:'1', city: [
            {areaId:'1-1', areaName: '市辖区' },
            {areaId:'1-2', areaName: '县' }
        ] },
        {id:'2', city: [
            {areaId:'2-1', areaName: '市辖区' },
            {areaId:'2-2', areaName: '县' }
        ] },
        {id:'3', city: [
            {areaId:'3-1', areaName: '太原市' },
            {areaId:'3-2', areaName: '大同市' },
            {areaId:'3-3', areaName: '晋城市' },
            {areaId:'3-4', areaName: '运城市' },
            {areaId:'3-5', areaName: '忻州市' },
        ] },
    ];
    for(var item of city){
        if(item.id == province){
            $.each(item.city,function(i,item){
                str+="<option value="+item.areaId+">"+item.areaName+"</option>";
            })
        }
    }
    $("#City").append(str);
}

function VillageBind(){  
    $("#Village").html("");

    var options=$("#City option:selected");

    var city=options.val();
    if(city==""){
        return;
    }
    var str="<option> 请选择区县 </option>";

    var village = [
        {id:'1-1', city: [
            {areaId:'1', areaName: '海淀区' },
            {areaId:'2', areaName: '朝阳区' },
            {areaId:'3', areaName: '昌平区' },
            {areaId:'4', areaName: '西城区' },
            {areaId:'5', areaName: '顺义区' },
            {areaId:'6', areaName: '东城区' }
        ] },
        {id:'1-2', city: [
            {areaId:'1', areaName: '密云县' },
            {areaId:'2', areaName: '延庆县' },
            {areaId:'3', areaName: '其他' }
        ] },
        {id:'2-1', city: [
            {areaId:'1', areaName: '河东区' },
            {areaId:'2', areaName: '河西区' },
            {areaId:'3', areaName: '南开区' }
        ] },
        {id:'2-2', city: [
            {areaId:'1', areaName: '宁河县' },
            {areaId:'2', areaName: '静海县' },
            {areaId:'3', areaName: '蓟县' },
            {areaId:'4', areaName: '其他' }
        ] },
        {id:'3-1', city: [
            {areaId:'1', areaName: '古交市' },
            {areaId:'2', areaName: '晋源区' },
            {areaId:'3', areaName: '小店区' }
        ] },
        {id:'3-2', city: [
            {areaId:'1', areaName: '城区' },
            {areaId:'2', areaName: '矿区' },
            {areaId:'3', areaName: '南郊区' }
        ] },
        {id:'3-3', city: [
            {areaId:'1', areaName: '城区' },
            {areaId:'2', areaName: '高平市' },
            {areaId:'3', areaName: '沁水县' }
        ] },
        {id:'3-4', city: [
            {areaId:'1', areaName: '夏县' },
            {areaId:'2', areaName: '平陆县' },
            {areaId:'3', areaName: '盐湖区' }
        ] },
        {id:'3-5', city: [
            {areaId:'1', areaName: '保德县' },
            {areaId:'2', areaName: '河曲县' },
            {areaId:'3', areaName: '静乐县' }
        ] }
    ];

    $.each(village,function(i,item){
        if(item.id === city) {
            $.each(item.city,function(i,item){
                str+="<option value="+item.areaId+">"+item.areaName+"</option>";
            })
        }
    })
    $("#Village").append(str);
}