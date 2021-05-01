window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById('loaderDiv').style.display = 'none';
  }, 1000);
})
function navigateTo(destination){
  window.location = destination;
}

$("#magzine").turn({
  gradients:true,
  acceleration:true,
  autoCenter: true
});