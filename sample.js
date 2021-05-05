const firstName = [];
const lastName = [];
const email = [];
const phoneNum = [];
const password = [];

const fname = document.getElementById("Fname");
const lname = document.getElementById("Lname");
const Email = document.getElementById("email");
const phn = document.getElementById("phn");
const pass = document.getElementById("pass");

function add() {
  firstName.push(fname.value);
  lastName.push(lname.value);
  email.push(Email.value);
  phoneNum.push(phn.value);
  password.push(pass.value);

  clearAnd();
}

function clearAnd() {
  fname.value = "";
  lname.value = "";
  Email.value = "";
  phn.value = "";
  pass.value = "";

//  document.getElementById("display").innerHTML = firstName;
// document.getElementById("display1").innerHTML = lastName;
//  document.getElementById("display2").innerHTML = email;
//   document.getElementById("display3").innerHTML = phoneNum;

firstName.forEach(element => {
  document.getElementById("display").innerHTML=firstName;
});

  lastName.forEach(element => {
    document.getElementById("display1").innerHTML=lastName;});

    email.forEach(element => {
      document.getElementById("display2").innerHTML=email;});

      phoneNum.forEach(element => {
        document.getElementById("display3").innerHTML=phoneNum;});
}
