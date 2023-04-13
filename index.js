// Make the Checkbox for XI toggle the Calculator display

const checkbox = document.getElementById('xiCheckbox');
const div = document.getElementById('xiCalculator');

if (checkbox.checked) {
  div.style.display = 'block';
}

checkbox.addEventListener('change', function() {
  if (this.checked) {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
});




// Open the full screen search box
function openWindow() {
  document.getElementById("xiTableOverlay").style.display = "inline-block";
}






// Close the full screen search box
function closeWindow() {
  document.getElementById("xiTableOverlay").style.display = "none";
}






//table/sub-table js
function toggleTable(row) {
  var subTable = row.nextElementSibling;
  if (subTable.style.display === "none") {
    subTable.style.display = "table-row";
  } else {
    subTable.style.display = "none";
  }
}