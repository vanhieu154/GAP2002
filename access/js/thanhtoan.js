const deliveryInfo=document.querySelector(".delivery");
const deliveryInfo2=document.querySelector(".delivery2");
if(deliveryInfo){
    deliveryInfo.addEventListener("click",function(){
        document.querySelector(".delivery-info2").style.display="block"
        document.querySelector(".delivery-info").style.display="none"
    })
}
if(deliveryInfo2){
    deliveryInfo2.addEventListener("click",function(){
        document.querySelector(".delivery-info2").style.display="none"
        document.querySelector(".success-order").style.display="block"
    })
}
function showCartDetail(){
    var cart='';
    var pay=0;
    var p=JSON.parse(sessionStorage.getItem("Cart"));
    for (let i = 0; i < p.length; i++) {
        pay = pay+ p[i].total;
        cart+='<div class="col row">';
        cart+='<div class="col-3 text-left">';
        cart+='<img src="./access/Img/sanpham/'+(p[i].Hinhanh[0])+'"class="w-100"  alt="">';
        cart+='<iconify-icon icon="material-symbols:lens" class="icon--soluong" style="color: #6b4932;" width="30px"></iconify-icon>';
        cart+='<span class="number--soluong">'+p[i].quantity+'</span>';
        cart+='</div>';
        cart+='<div class="col-5 font--sp text-left">'+p[i].TenSP+'</div>';
        cart+='<div class="col-4 color--gia">'+((p[i].Price-p[i].Price*p[i].Discount/100)*p[i].quantity)+'<u>đ</u></div>';
        cart+='</div>';
        cart+='<br>';
    }
    document.getElementById('cart__product-container').innerHTML=cart;
    document.getElementById('productPrice').innerHTML=pay;

}
function dP(Number) {
    var pay=0;
    var p=JSON.parse(sessionStorage.getItem("Cart"));
    for (let i = 0; i < p.length; i++) {
        pay = pay+ p[i].total;
    }
    document.getElementById('deliveryP').innerHTML=Number
    document.getElementById('totalPrice').innerHTML=pay+Number;
}
function showEwallet(Number){
    if(Number == 0){
        document.querySelector(".icon__qr").style.display="none";
    }else{
        document.querySelector(".icon__qr").style.display="flex";
    }
}