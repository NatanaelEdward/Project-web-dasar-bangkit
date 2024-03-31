document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.getElementById("myDropdown");
  dropdown.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

function toggleMenu() {
  var dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
}

function changeContent(title, content) {
  var contentElement = document.getElementById("content");
  contentElement.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
  toggleMenu();
}
