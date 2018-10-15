
var tablet = window.matchMedia("(min-width:376px) and (max-width: 740px)");
var mobile = window.matchMedia("(max-width: 375px)");


function createCirclesFirst(){
var myCircle = Circles.create({
  id: 'circles-1',
  radius: 120,
  value: 67,
  maxValue: 100,
  width: 14,
  text: function(value) {
    return value + '%';
  },
  colors: ['rgba(25,55,89,0.4)', '#193759'],
  duration: 3000,
  wrpClass: 'circles-wrp',
  textClass: 'circles-text',
  valueStrokeClass: 'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper: true,
  styleText: true
});

var myCircle2 = Circles.create({
  id: 'circles-2',
  radius: 120,
  value: 33,
  maxValue: 100,
  width: 14,
  text: function(value) {
    return value + '%';
  },
  colors: ['rgba(25,55,89,0.4)', '#F19120'],
  duration: 3000,
  wrpClass: 'circles-wrp',
  textClass: 'circles-text',
  valueStrokeClass: 'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper: true,
  styleText: true
});
};

function createCircles(){
  var myCircle3 = Circles.create({
    id: 'circles-3',
    radius: 120,
    value: 20,
    maxValue: 100,
    width: 14,
    text: function(value) {
      return value + '%';
    },
    colors: ['rgba(0,0,0,0.8)', '#4293CE'],
    duration: 3000,
    wrpClass: 'circles-wrp',
    textClass: 'circles-text',
    valueStrokeClass: 'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper: true,
    styleText: true
  });

  var myCircle4 = Circles.create({
    id: 'circles-4',
    radius: 120,
    value: 80,
    maxValue: 100,
    width: 14,
    text: function(value) {
      return value + '%';
    },
    colors: ['rgba(0,0,0,0.8)', '#F19120'],
    duration: 3000,
    wrpClass: 'circles-wrp',
    textClass: 'circles-text',
    valueStrokeClass: 'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper: true,
    styleText: true
  });
};

function showRocket(){
document.getElementById('rocketFixed').style.visibility = "visible";
};

function hideRocketOne(){
  document.getElementById('rocketLower').style.visibility = "hidden";
    if (mobile.matches) {
      document.getElementById('sequence').style.marginTop = "-69px";
    }
    else if (tablet.matches) {
      document.getElementById('sequence').style.marginTop = "-119px";
    }
    else {
      document.getElementById('sequence').style.marginTop = "-168px";
    }
};

function hideRocketTwo(){
  document.getElementById('rocketMedium').style.visibility = "hidden";
  if (mobile.matches) {
    document.getElementById('sequence').style.marginTop = "-138px";
  }
  else if (tablet.matches) {
    document.getElementById('sequence').style.marginTop = "-224px";
  }
  else {
document.getElementById('sequence').style.marginTop = "-321px";
  }
};

var waypoints = $('#journeyClocks').waypoint({
  handler: function(direction) {
    if(direction === "down"){
      console.log("time to load the first circles");
      createCirclesFirst();
    }
  }
})


var waypoints = $('#EngineClocks').waypoint({
  handler: function(direction) {
    if(direction === "down"){
      console.log("time to load the second circles");
      createCircles();
    }
  }
})

var waypoints = $('#showRocket').waypoint({
  handler: function(direction) {
    if(direction === "down"){
      console.log("time to show the rocket");
      showRocket();
    }
  }
})

var waypoints = $('#hideRocketOne').waypoint({
  handler: function(direction) {
    if(direction === "down"){
      console.log("time to fire stage two of journey");
      hideRocketOne();
    }
  }
})

var waypoints = $('#hideRocketTwo').waypoint({
  handler: function(direction) {
    if(direction === "down"){
      console.log("time to fire stage three of journey");
      hideRocketTwo();
    }
  }
})


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

/* Countdown index */
var count=10;

var counter=setInterval(timer, 1000);

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     document.getElementById('countdown-number').style.display = "none";
     return;
  }

  document.getElementById("countdown-number").innerHTML=count
}
