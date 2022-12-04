function user( phone, nameDK, pass){
    this.phone =phone;
    this.nameDK =nameDK;
    this.pass = pass;
}
function check(){
    var temp= localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):[];
    var kt =document.getElementById('txt_name_dk').value;  
    var kt_sdt =document.getElementById("txt_phone").value;
    if( localStorage.getItem('user') == null){
        alert("Đăng ký thành công")
        var tmp= new user(document.getElementById("txt_phone").value, document.getElementById("txt_name_dk").value,document.getElementById("passDK").value);
        temp.push(tmp);
        localStorage.setItem('user',JSON.stringify(temp));
        console.log(localStorage.getItem('user',JSON.stringify(temp)));
        // window.location ="./trangchu.html";
        return;
    }
    for(i =0; i<temp.length;i++){
      if(kt === String(temp[i].nameDK))
        {
            alert("Tên đăng nhập đã tồn tại. Mời nhập tên đăng nhập khác")
            document.getElementById("txt_name_dk").focus()
            document.getElementById("txt_name_dk").select()
                break;
        }
        else if(kt_sdt === String(temp[i].phone)){
          alert("Số điện thoại đã được đăng kí. Mời nhập số điện thoại khác")
           document.getElementById("txt_phone").focus()
           document.getElementById("txt_phone").select()
           break;
        }
        else if(i === temp.length-1){
          alert("Đăng ký thành công")
          var tmp= new user(document.getElementById("txt_phone").value, document.getElementById("txt_name_dk").value,document.getElementById("passDK").value);
          temp.push(tmp);
        //   window.location ="./trangchu.html";
          break;
        }       
    }
    localStorage.setItem('user',JSON.stringify(temp))
}