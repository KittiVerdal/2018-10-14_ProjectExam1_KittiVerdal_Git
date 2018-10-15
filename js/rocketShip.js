

function showRocket(){
document.getElementById('rocketFixed').style.visibility = "visible";
}:

var waypoints = $('#travelOne').waypoint({
  handler: function(direction) {
    if(direction === "down"){
      console.log("time to show the rocket");
      showRocket();
    }
  }
})
