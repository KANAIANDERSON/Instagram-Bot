const socialMediaType = document.getElementById("serviceType");
const dropDownMenuButton = document.getElementById("dropbtn");
const dropDownMenu = document.getElementById("myDropdown");
console.log(dropDownMenuButton.length);

dropDownMenuButton.onclick = function () {
  dropDownMenu.classList.toggle("show");
};

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
