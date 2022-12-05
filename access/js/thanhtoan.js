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
const checkEwallet=document.querySelector('input[class="form-check-input e-wallet"]:checked');
console.log(checkEwallet);


if(checkEwallet !=""){
    console.log(1);
}