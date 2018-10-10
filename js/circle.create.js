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
  duration: 700,
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
  duration: 700,
  wrpClass: 'circles-wrp',
  textClass: 'circles-text',
  valueStrokeClass: 'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper: true,
  styleText: true
});

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
  duration: 700,
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
  duration: 700,
  wrpClass: 'circles-wrp',
  textClass: 'circles-text',
  valueStrokeClass: 'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper: true,
  styleText: true
});


$(window).scroll(function() {
  var hT = $('#circles-1').offset().top,
    hH = $('#circles-1').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT + hH - wH)) {
    myCircle.update(true);
    console.log('I have updated');

  }
});

$(window).scroll(function() {
  var hT = $('#circles-2').offset().top,
    hH = $('#circles-2').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT + hH - wH)) {
    myCircle2.update(true);
    console.log('I have updated');

  }
});

$(window).scroll(function() {
  var hT = $('#circles-3').offset().top,
    hH = $('#circles-3').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT + hH - wH)) {
    myCircle3.update(true);
    console.log('I have updated');

  }
});

$(window).scroll(function() {
  var hT = $('#circles-4').offset().top,
    hH = $('#circles-4').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT + hH - wH)) {
    myCircle4.update(true);
    console.log('I have updated');

  }
});
