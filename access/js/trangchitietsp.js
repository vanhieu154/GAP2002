function getUrlParams() {
    const params = new URLSearchParams (window.location.search);
    return params;
}
var maSp=getUrlParams().get("maSp");
console.log(maSp);
function LoadJson(){
    fetch("./access/json/listproduct.json")
    .then(function(response){
        if(!response.ok){
            throw new Error("có lỗi: (")
        }
        return response.json()
    })
    .then(
        function(data){
            let items="";
            let slider="";
            let productPrice="";
            for(let p of data){
                let productDescription="";
                var priceDisount=0;
                priceDisount = p.Price-p.Discount*p.Price/100;
                if(p.MaSP == maSp){
                    console.log(maSp)
                    items="<div class='item'  data-bs-target='#carouselExampleDark' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1' alt=''>";
                    items+="<img class='w-100' src='./access/Img/sanpham/"+p.Hinhanh[0]+"' />";
                    items+="</div>";

                    slider="<div class='carousel-item active' data-bs-interval='5000'>";
                    slider+="<img src='./access/Img/sanpham/"+p.Hinhanh[0]+"' class='d-block w-100' alt=''>";
                    slider+="</div>"
                    for (let a = 1; a < p.Hinhanh.length; a++) {
                        items+="<div class='item '  data-bs-target='#carouselExampleDark' data-bs-slide-to='"+a+"' aria-label='Slide "+(a+1)+"' alt=''>";
                        items+="<img class='w-100 ' src='./access/Img/sanpham/"+p.Hinhanh[a]+"' />"; 
                        items+="</div>";

                        slider+="<div class='carousel-item' data-bs-interval='5000'>";
                        slider+="<img src='./access/Img/sanpham/"+p.Hinhanh[a]+"' class='d-block w-100' alt=''>";
                        slider+="</div>";
                    }

                    if(p.Discount == 0){
                        productPrice="<span class='product__price-current'>"+p.Price+".000đ</span>";
                    }else{
                        productPrice="<span class='product__discount' >-"+p.Discount+"%</span>";
                        productPrice+="<span class='product__price-current'>"+priceDisount+".000đ</span>";
                        productPrice+="<span class='product__price-old'>"+p.Price+".000đ</span>";
                    }
                    document.getElementById("product__price").innerHTML=productPrice;
                    for (let b = 0; b < Object.keys(p.Mota).length; b++) {
                        productDescription+="<p>"+p.Mota[b]+"</p>"
                        
                    }
                    document.getElementById("product-name").innerHTML=p.TenSP;
                    document.getElementById("product-brand").innerHTML=p.Hang;
                    document.getElementById("items").innerHTML=items;
                    document.getElementById("slider").innerHTML=slider;
                    document.getElementById("product__description-detail").innerHTML=productDescription;
                    document.getElementById("curent_product").innerHTML=p.TenSP;
                
                
                
                }




























        }
    }
)
.catch(function(err){
    throw new Error(err.message);
})
}
let amountElement = document.getElementById('amount');
let amount=amountElement.value;
let render=(amount) =>{
amountElement.value=amount
}
let handlePlus=()=>{
    amount++;
    render(amount);
}
let handleMinus=()=>{
    amount--;
    render(amount)
}
let showDescription=()=>{
    document.getElementById("product__description-detail").classList.toggle("activate");
    document.getElementById("minus-icon-1").classList.toggle("deactivate");
    document.getElementById("plus-icon-1").classList.toggle("activate");
}
let showEvaluate=()=>{
    document.getElementById("product-evaluate").classList.toggle("activate");
    document.getElementById("minus-icon-2").classList.toggle("deactivate");
    document.getElementById("plus-icon-2").classList.toggle("activate");
}