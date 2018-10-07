
(function (){

  var body = document.body,
  html = document.documentElement;

     var controller      = new ScrollMagic.Controller(),
         scroller        = document.getElementById('scroller'),
         bigLeft         = document.getElementById('big-left'),
         bigRight        = document.getElementById('big-right'),

var sectionTwo_DrawLineRight2 = new TimelineMax();
sectionTwo_DrawLineRight2
    .fromTo('#tworightDrawToRightBold', .33, {drawSVG:"0%", ease:Linear.easeNone}, {drawSVG:"100%", ease:Linear.easeNone})
    .fromTo('#tworightDrawToRightLite', .67, {drawSVG:"0%", ease:Linear.easeNone}, {drawSVG:"100%", ease:Linear.easeNone});
new ScrollMagic.Scene({
    triggerElement: '#two',
    reverse: false
})
.setTween(sectionTwo_DrawLineRight2)
.addTo(controller);
}
