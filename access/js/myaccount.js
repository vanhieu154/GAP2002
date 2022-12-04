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


