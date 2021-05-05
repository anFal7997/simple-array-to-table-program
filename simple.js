const array = [];
const myTable = document.querySelector("#table");

const fname = document.getElementById("Fname");
const lname = document.getElementById("Lname");
const Email = document.getElementById("email");
const phn = document.getElementById("phn");
const pass = document.getElementById("pass");

let headers = ["FirstName", "LastName", "Email", "PhoneNum"];

const add = () => {
  array.push(fname.value, lname.value, Email.value, phn.value);
  clearAndDisplay();
};
function clearAndDisplay() {
  fname.value = "";
  lname.value = "";
  Email.value = "";
  phn.value = "";
  pass.value = "";

  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  headers.forEach((headerText) => {
    const header = document.createElement("th");
    const textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  array.forEach((event) => {
    let row = document.createElement("tr");

    Object.values(event).forEach((text) => {
      const cell = document.createElement("td");
      const textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  myTable.appendChild(table);
}
