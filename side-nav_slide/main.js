/* sidebar */
var closeNav = document.getElementById('closenav');  
var openNav = document.getElementById('openNav');

openNav.onclick = function openNav() {
  document.getElementById("sideNav").classList.toggle("sidenav-show");
  document.getElementById("openNav").classList.toggle("openNav-show");
  document.getElementById("links").classList.toggle("links-show");
}