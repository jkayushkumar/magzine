window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById('loaderDiv').style.display = 'none';
  }, 1000);
})
function navigateTo(page){
  window.location = page;
}

$("#magzine").turn({
  elevation: 10,
  gradients:true,
  acceleration:true,
  autoCenter: true,
  duration:1500
});