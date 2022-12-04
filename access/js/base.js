// hiện header khi scoll lên
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-105px";
    document.getElementById("header").style.marginTop = "0px";
  }
  prevScrollpos = currentScrollPos;
}
const nav = document.querySelector('.navbar')
fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})
const footer = document.querySelector('.footer')
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    footer  .innerHTML=data
})

//------------------------------nav-header----------------------
function showSubnav() {
  document.getElementById("showSubnav").classList.toggle("activate");
}
function showHeaderList() {
  document.getElementById("header__list-container").classList.toggle("activate");
}
function showCart(){
  document.getElementById("header__cart").classList.toggle("activate");
  var cart=""; 
  if(sessionStorage.getItem("Cart")==null){
  cart += "<svg style='color: var(--background-color)' xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' class='cart-icon bi bi-cart2' viewBox='0 0 16 16'>";
  cart += "<path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z'/>";
  cart += "</svg>";
  cart += "<p>Hiện chưa có sản phẩm</p>"
  cart+="<hr style='border: 2px solid;border-radius: 45px;background-color: #c6c6c6;color: #c6c6c6; opacity: 1;'>"
  }else{
    var pay=0;
    var p=JSON.parse(sessionStorage.getItem("Cart"))
    for (let i = 0; i < p.length; i++) {
      pay=pay+p[i].total;
      cart+="<div class='row'>"
      cart+="<div class='col-2'>"
      cart+="<img class='w-100' src='./access/Img/sanpham/"+p[i].Hinhanh[0]+"' alt=''>"
      cart+="</div>"
      cart+="<div style='position: relative; text-align: left;' class='col-10'>"
      cart+="<div class='header__cart-item__delete'>"
      cart+="<i class='fa-solid fa-xmark'></i>"
      cart+="</div>"
      cart+="<div class='header__cart-item__infor'>"
      cart+="<div class='header__cart-item__header'>"+p[i].TenSP+"</div>"
      cart+="<div class='header__cart-item__price-container row'>"
      cart+="<div class='col-7'>"
      cart+="<div class='header__cart-item__price'>"
      if(p[i].Discount>0){
        cart+="<span class='header__cart-item__price-current'>"+((p[i].Price-p[i].Price*p[i].Discount/100)*p[i].quantity)+",000<u>đ</u></span>"
        cart+="<span class='header__cart-item__price-old'>("+((p[i].Price)*p[i].quantity)+",000đ)</span>"
      }else{
        cart+="<span class='header__cart-item__price-current'>"+((p[i].Price)*p[i].quantity)+",000<u>đ</u></span>"
      }
      cart+="</div>"
      cart+="<div class='header__cart-item__quantity'>"
      cart+="<span  class='header__cart-item-minus'><i class='fa-solid fa-minus'></i></span>"
      cart+="<input type='number' min='1' name='header__cart-item-amount' class='header__cart-item-amount' value='"+p[i].quantity+"'>"
      cart+="<span  class='header__cart-item-plus' ><i class='fa-solid fa-plus'></i></span>"
      cart+="</div>"
      cart+="</div>"
      cart+="<div class='col-5' style='align-items: center;display:flex;justify-content: flex-end'>"
      cart+="<span class='header__cart-item__price-finnal'>"+(p[i].Price-p[i].Price*p[i].Discount/100)*p[i].quantity+",000<u>đ</u></span>"
      cart+="</div>"
      cart+="</div>"  
      cart+="</div>"
      cart+="</div>"
      cart+="</div>"
      cart+="<hr style='border: 2px solid;border-radius: 45px;background-color: #c6c6c6;color: #c6c6c6; opacity: 1;'>"

    }

  }
  document.getElementById("header__cart-container").innerHTML=cart;
  const plusP=document.querySelectorAll(".header__cart-item-plus");
  const amountP=document.querySelectorAll(".header__cart-item-amount");
  const minusP=document.querySelectorAll(".header__cart-item-minus");
  for (let i = 0; i < minusP.length; i++) {
    let amount=amountP[i].value;
    let render=(amount)=>{amountP[i].value=amount};
    minusP[i].onclick=function(){
      if(amount<2) {
        amount =1;
      }else{
        amount--;
      }
      render(amount);
    }
    plusP[i].onclick=function(){
      var p=JSON.parse(sessionStorage.getItem("Cart"))
      if(amount>p[i].Soluong-1){
        amount=p[i].Soluong;
      }else{
      amount++;
      }
      render(amount);
    }
  }
}

window.onclick = function(event) {
  if (!event.target.matches(".fa-cart-shopping,.cart_container,.fa-xmark,.header__cart-item-plus,.header__cart-item-minus,.header__cart-item-amount,.fa-minus,.fa-plus")){
      var dropdowns = document.getElementsByClassName("header__cart");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("activate")) {
            openDropdown.classList.remove("activate");  
          }
      }
  }
}

