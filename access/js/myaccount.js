const butTon=document.querySelector(".btn")
if(butTon){
    butTon.addEventListener("click",function(){
        document.querySelector(".btn-content").classList.toggle(("activeB"))
    })
}
    
const hoso=document.querySelector(".hoso");
const diachi=document.querySelector(".diachi");
const matkhau=document.querySelector(".doi-mat-khau");
if(hoso){
    hoso.addEventListener("click",function(){
        document.querySelector(".myaccount-body-right-ho-so-cua-toi").style.display="block"
        document.querySelector(".address").style.display="none"
        document.querySelector(".body__container-doi-mat-khau").style.display="none"

    })
}
if(diachi){
    diachi.addEventListener("click",function(){
        document.querySelector(".myaccount-body-right-ho-so-cua-toi").style.display="none"
        document.querySelector(".address").style.display="block"
        document.querySelector(".body__container-doi-mat-khau").style.display="none"

    })
}
if(matkhau){
    matkhau.addEventListener("click",function(){
        document.querySelector(".myaccount-body-right-ho-so-cua-toi").style.display="none"
        document.querySelector(".address").style.display="none"
        document.querySelector(".body__container-doi-mat-khau").style.display="block"

    })
}
const choxacnhan=document.querySelector(".myaccount-body-right-top-confirm");
if(choxacnhan){
    choxacnhan.addEventListener("click",function(){
        document.querySelector(".cho-xac-nhan").style.display="block"
        document.querySelector(".cho-lay-hang").style.display="none"
        document.querySelector(".dang-giao").style.display="none"
        document.querySelector(".da-giao").style.display="none"
        document.querySelector(".da-huy").style.display="none"
        document.querySelector(".chua-co-don-hang").style.display="none"
    })
}
const cholayhang=document.querySelector(".myaccount-body-right-top-cho-lay-hang");
if(choxacnhan){
    cholayhang.addEventListener("click",function(){
        document.querySelector(".cho-xac-nhan").style.display="none"
        document.querySelector(".cho-lay-hang").style.display="block"
        document.querySelector(".dang-giao").style.display="none"
        document.querySelector(".da-giao").style.display="none"
        document.querySelector(".da-huy").style.display="none"
        document.querySelector(".chua-co-don-hang").style.display="none"
    })
}
const danggiao=document.querySelector(".myaccount-body-right-top-dang-giao");
if(danggiao){
    danggiao.addEventListener("click",function(){
        document.querySelector(".cho-xac-nhan").style.display="none"
        document.querySelector(".cho-lay-hang").style.display="none"
        document.querySelector(".dang-giao").style.display="block"
        document.querySelector(".da-giao").style.display="none"
        document.querySelector(".da-huy").style.display="none"
        document.querySelector(".chua-co-don-hang").style.display="none"
    })
}   
const dagiao=document.querySelector(".myaccount-body-right-top-da-giao");
if(dagiao){
    dagiao.addEventListener("click",function(){
        document.querySelector(".cho-xac-nhan").style.display="none"
        document.querySelector(".cho-lay-hang").style.display="none"
        document.querySelector(".dang-giao").style.display="none"
        document.querySelector(".da-giao").style.display="block"
        document.querySelector(".da-huy").style.display="none"
        document.querySelector(".chua-co-don-hang").style.display="none"
    })
}   
const dahuy=document.querySelector(".myaccount-body-right-top-da-huy");
if(dahuy){
    dahuy.addEventListener("click",function(){
        document.querySelector(".cho-xac-nhan").style.display="none"
        document.querySelector(".cho-lay-hang").style.display="none"
        document.querySelector(".dang-giao").style.display="none"
        document.querySelector(".da-giao").style.display="none"
        document.querySelector(".da-huy").style.display="block"
        document.querySelector(".chua-co-don-hang").style.display="none"
    })
}  
const hoanhang=document.querySelector(".myaccount-body-right-top-tra-hang");
if(hoanhang){
    hoanhang.addEventListener("click",function(){
        document.querySelector(".cho-xac-nhan").style.display="none"
        document.querySelector(".cho-lay-hang").style.display="none"
        document.querySelector(".dang-giao").style.display="none"
        document.querySelector(".da-giao").style.display="none"
        document.querySelector(".da-huy").style.display="none"
        document.querySelector(".chua-co-don-hang").style.display="block"
    })
} 
// 
const btnDonHang=document.querySelector(".btn__donhang");
if(btnDonHang){
    btnDonHang.addEventListener("click",function(){
        document.querySelector(".body__container--hosocuatoi").style.display="none"
        document.querySelector(".body__container--Order").style.display="block"
        document.querySelector(".body__container--thongbao").style.display="none"
    })
}
const btnhsct=document.querySelector(".btn__myaccount");
if(btnhsct){
    btnhsct.addEventListener("click",function(){
        document.querySelector(".body__container--hosocuatoi").style.display="block"
        document.querySelector(".body__container--Order").style.display="none"
        document.querySelector(".body__container--thongbao").style.display="none"
    })
}
const btnthongbao=document.querySelector(".btn__thongbao");
if(btnthongbao){
    btnthongbao.addEventListener("click",function(){
        document.querySelector(".body__container--hosocuatoi").style.display="none"
        document.querySelector(".body__container--Order").style.display="none"
        document.querySelector(".body__container--thongbao").style.display="block"
    })
}
const view=document.querySelector(".btn-viewdetail");
if(view){
    view.addEventListener("click",function(){
        document.querySelector(".body__container--OrderDetail").style.display="block"
        document.querySelector(".body__container--thongbao").style.display="none"
    })
}
const trolai=document.querySelector(".return--orderdetail");
if(trolai){
    trolai.addEventListener("click",function(){
        document.querySelector(".body__container--OrderDetail").style.display="none"
        document.querySelector(".body__container--thongbao").style.display="block"
    })
}