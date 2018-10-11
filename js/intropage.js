/* Countdown index */
var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 8;

countdownNumberEl.textContent = countdown;

setInterval(function() {
countdown = --countdown <= 0 ? 8 : countdown;

countdownNumberEl.textContent = countdown;
}, 1000);
