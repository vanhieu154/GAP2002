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
        let html ="";
        for(let p of data){
            function showProduct(p) {
                var s = 0;
                s=p.Price-p.Discount*p.Price/100;
                let price ="";
                let discountTag="";
                if (p.Discount==0) {
                    price+="<div class='home-product-item__price'>";
                    price+="<span class='home-product-item__price-no-discount'>"+p.Price+".000đ</span>";
                    price+="</div>";
                }else{
                    price+="<div class='home-product-item__price'>";
                    price+="<span class='home-product-item__price-current'>"+s+".000đ</span>";
                    price+="<span class='home-product-item__price-old'>"+p.Price+".000đ</span>";
                    price+="</div>";
                    
                    discountTag+="<div class='home-product-item__sale-off'>";
                    discountTag+="<div class='home-product-item__sale-off-percent'>"+p.Discount+"%</div>";
                    discountTag+="<div class='home-product-item__sale-off-label'>GIẢM</div>";
                    discountTag+="</div>";
                }
                html+="<div class='col-xl-2 col-lg-3 col-4 product' id='"+p.MaSP+"'>";
                html+="<button class='home-product-item'  type='submit' name='maSp' id='"+p.MaSP+"' value='"+p.MaSP+"'>";
                html+="<div class='home-product-item__img' style='background-image:url(./access/Img/sanpham/"+p.Hinhanh[0]+")'></div>";
                html+="<h4 class='home-product-item__name'>"+p.TenSP+"</h4>";
                html+=price;
                html+="<div class='home-product-item__action'>";
                html+="<span class='home-product-item__like home-product-item__like--liked'>";
                html+="<i class='home-product-item__like-icon-emty fa-regular fa-heart'></i>";
                html+="<i class='home-product-item__like-icon-fil fa-solid fa-heart'></i>";
                html+="</span>";
                html+="</div>";
                html+="<div class='home-product-item__origin'>";
                html+="<div class='home-product-item__grand'>"+p.Hang+"</div>";
                html+="<div class='home-product-item__origin-name'>Nhật bản</div>";
                html+="</div>";
                html+="<div class='home-product-item__favor'>";
                html+="<i class='fa-solid fa-check'></i>";
                html+="<span>Yêu thích</span>";
                html+="</div>";
                html+=discountTag;
                html+="</button>";
                html+="</div>";
                document.getElementById("total_product").innerHTML=html;
            }
            showProduct(p)
            const typeCategorys = document.querySelectorAll(".type_category");
            for(let i=0; i<typeCategorys.length;i++){
                typeCategorys[i].onclick=function(){
                    document.getElementById("total_product").innerHTML="";
                    html="";
                    for(let p of data){
                        switch (i){
                            case 0: 
                                if(p.LoaiSP =='Váy'){
                                    showProduct(p)
                                    // showPPdetail()

                                }  
                                break;
                            case 1: 
                                if(p.LoaiSP =='Áo'){
                                    showProduct(p)
                                    // showPPdetail()                                    
                                }  
                                break;
                            case 2: 
                                if(p.LoaiSP =='Phụ kiện'){
                                    showProduct(p)
                                    // showPPdetail()                                    
            

                                }  
                                break;
                            case 3: 
                                if(p.LoaiSP =='Quần'){
                                    showProduct(p)
                                    // showPPdetail()                                    

                                }  
                                break;
                        }
                    }
                }
            }

            const btnCategory = document.getElementById("btn_list");
            btnCategory.onclick=function() {
                document.getElementById("total_product").innerHTML="";
                html="";
                let all_brand_check = document.querySelectorAll('input[class="brand_category"]:checked');
                let all_price_check = document.querySelectorAll('input[class="price_category"]:checked');
                for(let x = 0; x < all_brand_check.length;  x++)
                {
                    let brand=all_brand_check[x].value;
                    for(let p of data ){
                        if (p.Hang==brand) {
                            for(let y = 0 ; y<all_price_check.length;y++){
                                let gia=all_price_check[y].value;
                                let s = 0;
                                s=p.Price-p.Discount*p.Price/100;
                                if (s>(gia-100) && s<gia || s==gia) {
                                    showProduct(p);
                                }
                            }
                        }
                    }
                }
                // showPPdetail()
            }
            // console.log(showPdetail.item(0));
            // function showPPdetail(){
            //     const showPdetail=document.querySelectorAll(".product")
            //     for (let i = 0; i < showPdetail.length; i++) {
            //         let items="";
            //         let slider="";
            //         showPdetail[i].onclick=function(){
            //             // console.log(showPdetail[i]);
            //             for(let p of data){
            //                 if(p.MaSP == i+1){
            //                     items+="<div class='item'  data-bs-target='#carouselExampleDark' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1' alt=''>";
            //                     items+="<img class='w-100' src='./access/Img/sanpham/"+p.Hinhanh[0]+"' />";
            //                     items+="</div>";

            //                     slider+="<div class='carousel-item active' data-bs-interval='5000'>";
            //                     slider+="<img src='./access/Img/sanpham/"+p.Hinhanh[0]+"' class='d-block w-100' alt=''>";
            //                     slider+="</div>"
            //                     for (let a = 1; a < p.Hinhanh.length; a++) {
            //                         items+="<div class='item '  data-bs-target='#carouselExampleDark' data-bs-slide-to='"+a+"' aria-label='Slide "+(a+1)+"' alt=''>";
            //                         items+="<img class='w-100 ' src='./access/Img/sanpham/"+p.Hinhanh[a]+"' />"; 
            //                         items+="</div>";

            //                         slider+="<div class='carousel-item' data-bs-interval='5000'>";
            //                         slider+="<img src='./access/Img/sanpham/"+p.Hinhanh[a]+"' class='d-block w-100' alt=''>";
            //                         slider+="</div>";
            //                     }
            //                     document.getElementById("items").innerHTML=items;
            //                     document.getElementById("slider").innerHTML=slider;
            //                 }
            //             }
            //         }
                    
            //     }
            // }
            // showPPdetail()



















        }
        }
    )
    .catch(function(err){
        throw new Error(err.message);
    })
    
}
