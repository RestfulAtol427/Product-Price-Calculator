
// Open the full screen search box
function openWindow() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeWindow() {
  document.getElementById("myOverlay").style.display = "none";
}

function displayOffice() {
  var coll = document.getElementsByClassName("collapsibleOffice");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}