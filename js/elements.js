function whatsapp(){
     let f = document.querySelector(".fname").value;
     let l = document.querySelector(".lname").value;
     let p = document.querySelector(".phone").value;
     let e = document.querySelector(".email").value;
     let a = document.querySelector(".address").value;
     let c = document.querySelector(".city").value;
     let co = document.querySelector(".country").value;
     let pl = document.querySelector(".plan").value;
     var val = true
     if(f== "" || l== ""||p==""||e==""||a==""||c==""||co==""){
        val = false
        console.log(5)
     }
     else{
        console.log(6)

        val = true
     }
     if (val) {
        
    
        const url =
          "https://wa.me/919733814168?text=" +
          "First Name :" +
          f +
          "%0a" +
          "Last Name :" +
          l +
          "%0a" +
          "Email :" +
          e +
          "%0a" +
          "Phone-No :" +
          p +
          "%0a" +
          "Address :" +
          a+
          "%0a" +
          "City :" +
          c +
          "%0a" +
          "country :" +
          co +
          "%0a" +
          "Travel plan :" +
          pl;
        window.open(url, "_blank").focus();
      }

}