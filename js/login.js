let emailLogInpt = document.getElementById("emailLog");
let passwordLogInpt = document.getElementById("passwordLog");
let errorLogMess = document.getElementById("errorLogMess");
let usersList = [];
usersList = JSON.parse(localStorage.getItem("users"));

var loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function (e) {
  if (checkValidation()) {
    checkLogin();
  }
});
emailLogInpt.addEventListener("input", function () {
  validationInputs(this);
});
passwordLogInpt.addEventListener("input", function () {
  validationInputs(this);
});

function checkValidation() {
  if (!emailLogInpt.value || !passwordLogInpt.value) {
    errorLogMess.innerHTML = "All Inputs are required";
    errorLogMess.style.cssText = "color: #d03545 !important;";
    console.log("errorLogMess");
    return false;
  }
  return true;
}
function checkLogin() {
  for (let i = 0; i < usersList.length; i++) {
    if (
      emailLogInpt.value === usersList[i].email &&
      passwordLogInpt.value === usersList[i].password
    ) {
      localStorage.setItem("userName", usersList[i].userName);
      window.location = "./home.html";
      return;
    }
  }
  errorLogMess.innerHTML = "Incorrect Email Or Password !!";
  errorLogMess.style.cssText = "color: #d03545 !important;";
}
function validationInputs(elem) {
  var regex = {
    emailLog: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
    passwordLog: /^[a-zA-Z0-9. _-]{6,12}$/,
  };
  var text = elem.value;
  if (regex[elem.id].test(text)) {
    elem.classList.add("is-valid");
    elem.classList.remove("is-invalid");
    return true;
  } else {
    elem.classList.remove("is-valid");
    elem.classList.add("is-invalid");
    return false;
  }
}
