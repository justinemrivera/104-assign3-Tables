var pets = [
    { name: "Scooby",age: 50 , gender:"male", breed:"pitbull",service:"grooming", ownerName:"Thomas", contactPhone:"123-123-123"},
    { name: "Benny", age: 16, gender:"male", breed:"yorkie",service:"trim nails", ownerName:"Justine", contactPhone:"235-235-235" },
    { name: "Coco", age: 20, gender:"female", breed:"poodle",service:"haircut", ownerName:"Steph", contactPhone:"565-565-565" },
    { name: "Roscoe", age: 52, gender:"male", breed:"husky",service:"grooming", ownerName:"Christian", contactPhone:"888-888-888" },
    { name: "Bear", age: 38, gender:"male", breed:"poodle",service:"trim nails", ownerName:"Nathan", contactPhone:"777-777-777" }
  ];
  
 
    function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
  for (let key of data){
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
let table = document.querySelector("Table");
let data = Object.keys(pets[0]);
generateTable(table, pets);
generateTableHead(table, data);
deleteRow();


function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("pets").deleteRow(i);
}

