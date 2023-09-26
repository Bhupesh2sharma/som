function validateform() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#number").value;
  let checkin = document.querySelector("#checkin").value;
  let checkout = document.querySelector("#checkout").value;
  let select3 = document.querySelector("#select3").value;
  let child = document.querySelector("#child").value;
  let adults = document.querySelector("#adults").value;
  var val = true;
  if (name != "") {
    document.querySelector("#vname").innerHTML = "";
    console.log(11);
  } else {
    console.log(10);
    document.querySelector("#vname").innerHTML = "<p>Enter your name</p>";

    document.querySelector("#vname").style = "color:red;";
    val = false;
  }
  if (email == "") {
    document.querySelector("#vemail").innerHTML = "<p>Enter your email</p>";
    document.querySelector("#vemail").style = "color:red;";
    val = false;
  } else {
    document.querySelector("#vemail").innerHTML = "";
  }
  if (phone == "") {
    document.querySelector("#vphone").innerHTML = "<p>Enter your phone</p>";
    document.querySelector("#vphone").style = "color:red;";
    val = false;
  } else {
    document.querySelector("#vphone").innerHTML = "";
  }
  if (checkin == "") {
    document.querySelector("#vcheckin").innerHTML = "<p>Enter your checkin</p>";
    document.querySelector("#vcheckin").style = "color:red;";
    val = false;
  } else {
    document.querySelector("#vcheckin").innerHTML = "";
  }
  if (checkout == "") {
    document.querySelector("#vcheckout").innerHTML =
      "<p>Enter your checkout date</p>";
    document.querySelector("#vcheckout").style = "color:red;";
    val = false;
  } else {
    document.querySelector("#vcheckout").innerHTML = "";
  }
  if (child == "") {
    document.querySelector("#vchild").innerHTML = "<p>Enter No. child</p>";
    document.querySelector("#vchild").style = "color:red;";
    val = false;
  } else {
    document.querySelector("#vchild").innerHTML = "";
  }
  if (adults == "") {
    document.querySelector("#vadult").innerHTML = "<p>Enter No of Adults</p>";
    document.querySelector("#vadult").style = "color:red;";
    val = false;
  } else {
    document.querySelector("#vadult").innerHTML = "";
  }
  if (val) {
    document.querySelector(".val").innerHTML = "";
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const number = document.querySelector("#number").value;
    const checkin = document.querySelector("#checkin").value;
    const checkout = document.querySelector("#checkout").value;
    const adults = document.querySelector("#adults").value;
    const child = document.querySelector("#child").value;
    const select3 = document.querySelector("#select3").value;
    const message = document.querySelector("#message").value;

    const url =
      "https://wa.me/919733230418?text=" +
      "Name :" +
      name +
      "%0a" +
      "Email :" +
      email +
      "%0a" +
      "Phone-No :" +
      number +
      "%0a" +
      "Date-Of-CheckIn :" +
      checkin +
      "%0a" +
      "Date-Of-CheckOut :" +
      checkout +
      "%0a" +
      "Number Of Adults :" +
      adults +
      "%0a" +
      "Number Of Children :" +
      child +
      "%0a" +
      "Type Of Room required :" +
      select3 +
      "%0a" +
      "Special Request :" +
      message;
    window.open(url, "_blank").focus();
  }
}
