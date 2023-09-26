function whatsapp() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;
  var i = true;
  if (name == "" || email == "" || subject == "" || message == "") {
    document.querySelector(".val").innerHTML =
      "<p>Enter the required field</p>";
    document.querySelector(".val").style = "color:red;";
    i = false;
  }
  if (i) {
    const url =
      "https://wa.me/919733230418?text=" +
      "Name :" +
      name +
      "%0a" +
      "Email :" +
      email +
      "%0a" +
      "Subject :" +
      subject +
      "%0a" +
      "Message :" +
      message;

    window.open(url, "_blank").focus();
  }
}
