let userNameInput = document.getElementById("userName");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("pass");
let signupBtn = document.getElementById("signupBtn");
let errorMess = document.getElementById("errorMess");
let userList = [];
if(localStorage.getItem("users")){
userList = JSON.parse(localStorage.getItem("users"));
}
function addUser() {
  let user = {
    userName: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  userList.push(user);
  localStorage.setItem("users", JSON.stringify(userList));
  errorMess.innerHTML = "Success";
  errorMess.style.cssText = "color: green !important;";
}
userNameInput.addEventListener("input", function () {
  validationInputs(this);
});
emailInput.addEventListener("input", function () {
  validationInputs(this);
});
passwordInput.addEventListener("input", function () {
  validationInputs(this);
});
signupBtn.addEventListener("click", function () {
  if (!userNameInput.value || !emailInput.value || !passwordInput.value) {
    errorMess.innerHTML = "All Inputs are required";
    errorMess.style.cssText = "color: #d03545 !important;";
    return;
  }
  if (!checkEmailExist()) {
    addUser();
  }
});
function checkEmailExist() {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].email == emailInput.value) {
      errorMess.innerHTML = "Email Already Exists !";
      errorMess.style.cssText = "color:#d03545  !important;";
      return true;
    }
  }
  return false;
}

function validationInputs(elem) {
  var regex = {
    userName: /^[A-Za-z]{3,}/,
    email: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
    pass: /^[a-zA-Z0-9. _-]{6,12}$/,
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
