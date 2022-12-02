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
}
window.onclick = function(event) {
  if (!event.target.matches(".fa-cart-shopping")) {
    if(!event.target.matches(".cart_container")){
      var dropdowns = document.getElementsByClassName("header__cart");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        // console.log(openDropdown);
        if (openDropdown.classList.contains("activate")) {
            // openDropdown.classList.remove("activate"); 
          }
      }
    }
  }
}


// ---------------- phần này suy nghĩ lại chỗ header bên phải để làm lại

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('activate')) {
//         openDropdown.classList.remove('activate');
//       }
//     }
//   }
// }

