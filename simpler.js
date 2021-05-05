const array = [];
const forms = document.getElementById("reg");
const messageBox = document.getElementById("display");

const fname = document.getElementById("Fname");
const lname = document.getElementById("Lname");

const Email = document.getElementById("email");
const phn = document.getElementById("phn");
const pass = document.getElementById("pass");

// const gender = document.querySelector('input[type ="radio"]:checked');





function submission(event) { event.preventDefault(); } 
forms.addEventListener('submit', submission);



const add = () => {
  const fnam = fname.value;
  if(fnam === ""){
    alert("Please Fill First Name");
    return false;}

  const lnam = lname.value;
  if(lnam === ""){
    alert("Please Fill Last Name");
    return false;}
  //   const mal = male.value;
  //   const fem = female.value;
  const gender = document.querySelector('input[type ="radio"]:checked').value;
  if(gender === ""){
    alert("Please Choose Your gender");
    return false;}
  const Em = Email.value;
  if(Em === ""){
    alert("Please Enter Your email");
    return false;}
  const ph = phn.value;
  if(ph === ""){
    alert("Please enter Your Number");
    return false;}
  array.push({ fnam: fnam, lnam: lnam, gen: gender, Em: Em, ph: ph });
  clearAndDisplay();
  
};
function clearAndDisplay() {
  fname.value = "";
  lname.value = "";
  Email.value = "";
  phn.value = "";
  pass.value = "";

  var html = "";

  // Show our output
  html += "<tr>";
  html += "<td>Name</td>";
  // html += "<td>LastName</td>";
  html += "<td>Gender</td>";
  html += "<td>Email</td>";
  html += "<td>Phone num</td>";
  html += "</tr>";
  for (i = 0; i <= array.length - 1; i++) {
    html += "<tr>";
    html += "<td>" + array[i].fnam +" "+ array[i].lnam +"</td>";
    // html += "<td>" +  "</td>";
    html += "<td>" + array[i].gen + "</td>";
    html += "<td>" + array[i].Em + "</td>";
    html += "<td>" + array[i].ph + "</td>";
    html += "</tr>";
  }
  messageBox.innerHTML = html;
}

