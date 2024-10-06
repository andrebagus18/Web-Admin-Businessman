const navToggle = document.querySelector(".navbar-toggler");
const sideBar = document.querySelector(".sidebar");
const btnClose = document.querySelector(".btn-close");
const dashboard = document.querySelector(".dashboard");

navToggle.addEventListener("click", function () {
  navToggle.style.display = "none";
  sideBar.classList.toggle("active");

  if (sideBar.classList.contains("active")) {
    dashboard.style.marginLeft = "200px";
  } else {
    dashboard.style.marginLeft = "0";
  }
});

btnClose.addEventListener("click", function () {
  // alert("ok");
  navToggle.style.display = "block";
  sideBar.classList.toggle("active");
  dashboard.style.marginLeft = "0";
});
