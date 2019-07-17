var modal = document.getElementById("modal");
var open = document.getElementById("open");
var close = document.getElementById("close");
var openOver = document.getElementById("openOver");
var overlay = document.getElementById("overlay");
var overlayP = document.getElementById("overlayP")

open.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


openOver.onclick = function () {
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlayP.classList.add("overlayPactive")
}

openOver.onmouseover = function () {
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlayP.classList.add("overlayPactive")
}
  
  /* Close */
  function closeOver() {
    document.getElementById("overlay").style.height = "0%";
    document.getElementById("overlay").style.width = "100%";
  } 