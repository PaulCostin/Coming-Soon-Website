let input = document.getElementById("email");
let error = document.getElementById("error");
let form = document.getElementById("form");

function validateEmail() {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value.match(mailFormat)) {
    error.style.setProperty("visibility", "hidden");
    input.style.borderColor = "";
  } else {
    error.style.setProperty("visibility", "visible");
    input.style.borderColor = "red";
  }
}

form.onsubmit = function () {
  validateEmail();
  return false;
};
