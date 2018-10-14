// fetch data from Spacex API
fetch('http://api.open-notify.org/astros.json')
  .then(result => result.json())
  .then((res) => {
    peopleInSpace(res);
    console.log(res.length);
  })
  .catch(err => console.log(err))

  function peopleInSpace(res) {
      var peopleDiv = document.getElementById('astronautsInSpace');
      var peopleNumber = '<h1 class="headerMainBold shadow">There are currently <span class="orange" id="astronauts">'
      + res.number + '</span> people travelling in space</h1>';
      peopleDiv.innerHTML += peopleNumber;

    }
