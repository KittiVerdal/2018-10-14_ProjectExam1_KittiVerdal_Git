


/* Rocket fire shifter */
var scrollImage = 1;
var image = document.getElementById('rocketFire');
window.addEventListener('mousewheel', function(e){

  if(e.wheelDelta<0 && scrollImage<4){
    scrollImage++;
  }

  else if(e.wheelDelta>0 && scrollImage>1){
    scrollImage--;
  }
  image.src = "images/Rocket-launch-"+ scrollImage + ".svg";
});
