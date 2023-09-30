function validation() {
  var tr = true;
  let arr = document.querySelector(".arr").value;
  let dep = document.querySelector(".dep").value;
  let adult = document.querySelector(".adult").value;
  let child = document.querySelector(".child").value;
  let rooms = document.querySelector(".rooms").value;
  let dri = document.querySelector(".dri").value;
  // let stay = document.querySelector(".stay").value;
  let type = document.querySelector(".type").value;
  if (
    arr == "" ||
    dep == "" ||
    adult == "" ||
    child == "" ||
    rooms == "" ||
    dri == "" ||
    type == ""
  ) {
    document.querySelector(".val").style = "display: inline; color : red;";
    tr = false;
  }else {
    document.querySelector(".val").style = "display: none;";
    tr = true;
  }
  if (tr) {
    let arr = document.querySelector(".arr").value;
    let dep = document.querySelector(".dep").value;
    let adult = document.querySelector(".adult").value;
    let child = document.querySelector(".child").value;
    let rooms = document.querySelector(".rooms").value;
    let dri = document.querySelector(".dri").value;
    // let stay = document.querySelector(".stay").value;
    let type = document.querySelector(".type").value;

    const url =
      "https://wa.me/918918208240?text=" +
      "Check in :" +
      arr +
      "%0a" +
      "Checkout :" +
      dep +
      "%0a" +
      "Room :" +
      rooms +
      "%0a" +
      "Driver :" +
      dri +
      "%0a" +
      "Room Type" +
      type;
      // "%0a" +
      // "Stay: " +
      // stay;
    window.open(url, "_blank").focus();
  }
}
