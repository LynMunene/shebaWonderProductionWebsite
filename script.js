const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('fullscreen-menu');
const closeBtn = document.getElementById('close-btn');
const turToggle = document.getElementById('turpentine-menu-toggle');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

//code for project menu
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.dropdownMenu('active');
});

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-toggle");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});
