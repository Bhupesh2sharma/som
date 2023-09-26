
function whatsapp(){
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;
  if(name ==""||email==""||subject==""||message==""){

  }

  const url =
    "https://wa.me/919733814168?text=" +
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
