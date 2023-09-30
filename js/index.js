function whatsapp() {
    let arr = document.querySelector(".arr").value;
    let dep = document.querySelector(".dep").value;
    let adult = document.querySelector(".adult").value;
    let child = document.querySelector(".child").value;
    let rooms = document.querySelector(".rooms").value;
    var i = true;
    if (arr == "" || dep == "" || adult == "" || child == ""|| rooms == "") {
      document.querySelector(".vr").innerHTML =
        "<p>Enter the required field</p>";
      document.querySelector(".vr").style = "color:red;";
      i = false;
    }
    if (i) {
      const url =
        "https://wa.me/918918208240?text=" +
        "Checkin :" +
        arr +
        "%0a" +
        "checkout :" +
        dep +
        "%0a" +
        "adult :" +
        adult +
        "%0a" +
        "child :" +
        child
        "Rooms :" +
        rooms;
  
      window.open(url, "_blank").focus();
    }
  }
  