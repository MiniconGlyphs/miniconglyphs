

function clickHide(id) {
  var ele = document.getElementById(id);
  //wait a bit
  document.getElementById("Down").style.animation = "animation: flyAway 1s ease-in-out 0s 1 forwards";
  
  setTimeout(() => {ele.style.display = "none";}, 2000);
  
}