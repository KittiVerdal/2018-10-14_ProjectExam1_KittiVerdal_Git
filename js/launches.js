
// fetch data from Spacex API
fetch('https://api.spacexdata.com/v3/launches')
  .then(result => result.json())
  .then((res) => {
    createLaunch(res);
    console.log(res.length);
  })
  .catch(err => console.log(err))


// Display data from the API
function createLaunch(res) {
    var launchDiv = document.getElementById('launchFeed');

    for(i = 0; i < res.length; i++){
      if (res[i].upcoming === true){
        var launchElement = '<div class="col-md-1 flightNumberColumn">'
            +'<h5 class="flightNrTxt">Flight:</h5>'
            +'<h4 id="flightNumber">'+ res[i].flight_number +'</h4>' +
            '</div>'
            +'<div class="col-md-10">'
            +'<div class="eventColumn">'
            +'<h5 class="headerDate"><strong>Date: <span id="missionDate">'
            + res[i].launch_date_local
            + '</span></strong> | Rocket: <span id="missionRocket">'
            + res[i].rocket.rocket_name + '</span> | Payload-type: <span id="missionPayload">'
            + res[i].rocket.second_stage.payloads[0].payload_type + '</span></h5>'
            +'<h3 class="headerEvent"><span id="missionCountry">'
            + res[i].rocket.second_stage.payloads[0].nationality
            + '</span> | Mission: <span id="missionName">'+ res[i].mission_name + '</span><h3>'
            +'<h6 class="headerLaunch">Launch location: <span id="missionLaunch">'+ res[i].launch_site.site_name_long + '</span></h6>'
            +'</div>'
            +'</div>'
            +'<div class="clearfix">';
        launchDiv.innerHTML += launchElement;

  }

}
}
