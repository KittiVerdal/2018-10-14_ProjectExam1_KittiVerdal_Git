var myCircle = Circles.create({
  id: 'circles-1',
  radius: 100,
  value: 67,
  maxValue: 100,
  width: 10,
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
  radius: 100,
  value: 33,
  maxValue: 100,
  width: 10,
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

function createCircles(){
  var myCircle3 = Circles.create({
    id: 'circles-3',
    radius: 65,
    value: 20,
    maxValue: 100,
    width: 7,
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
    radius: 65,
    value: 80,
    maxValue: 100,
    width: 7,
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

var waypoints = $('#EngineClocks').waypoint({
  handler: function(direction) {
    if(direction === "down"){
      console.log("time to load the circles baby");
      createCircles();
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
