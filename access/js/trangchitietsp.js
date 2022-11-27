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
            for(let p of data){
                if(p.MaSP == maSp){
                    console.log(maSp)
                    items+="<div class='item'  data-bs-target='#carouselExampleDark' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1' alt=''>";
                    items+="<img class='w-100' src='./access/Img/sanpham/"+p.Hinhanh[0]+"' />";
                    items+="</div>";

                    slider+="<div class='carousel-item active' data-bs-interval='5000'>";
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
                    document.getElementById("items").innerHTML=items;
                    document.getElementById("slider").innerHTML=slider;}




























        }
    }
)
.catch(function(err){
    throw new Error(err.message);
})

}
