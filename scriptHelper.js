// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(planet) {
  let mission = document.getElementById('missionTarget');
  mission.innerHTML = ` <h2>Mission Destination</h2>
                 <ol>
                    <li>Name: ${planet.name} </li>
                    <li>Diameter: ${planet.diameter} </li>
                    <li>Star: ${planet.star} </li>
                     <li>Distance from Earth: ${planet.distance} </li>
                    <li>Number of Moons: ${planet.moons} </li>
                </ol>
                <img src="${planet.image}">`;
}

function validateInput(inputValue) {
  //treating zero as empty
  if (!inputValue) {
    return 'Empty';
  }
  return isNaN(inputValue) ? 'Not a Number' : 'Is a Number';
}
//this is passed implicitly by add event listener and is = to the HTML form(documents)
function formSubmission(doc, list, pilot, copilot, fuelLevel, cargoLevel) {
 
let outputStatus = true


  if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
    outputStatus=false
    alert('Enter in a number for fuel level and/or cargo mass');
  }
  if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number') {
    alert('pilot and copilot should have a name not a number');
    outputStatus=false
  }
// if fuellevel below 10000
// if cargoMass above 10000
if(outputStatus){
  let launchReady= true
 
let output = `<ol> 
<li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
<li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>`
  if (fuelLevel < 10000) 
  {output += `<li id="fuelStatus" data-testid="fuelStatus">fuel level too low for launch</li>`;
launchReady=false
  }else{
    output+= `<li id="fuelStatus" data-testid="fuelStatus">fuel level high enough for launch</li>`
  }

  if (cargoLevel > 10000) {
   output+=`<li id="cargoStatus" data-testid="cargoStatus">cargo mass too high for launch</li>`;
   launchReady=false
  }else{
    output+=`<li id="cargoStatus" data-testid="cargoStatus">cargo mass low enough for launch</li>`
  }
  output+=`</ol>` 
  list.innerHTML= output
  list.style.visibility ='visible'
  let launchStatusEl= document.getElementById("launchStatus")
if(!launchReady){
  launchStatusEl.style.color= '#ff0000'
  launchStatusEl.innerText= "Shuttle Not Ready For Launch"
}else{
  launchStatusEl.style.color= '#00ff00'
  launchStatusEl.innerText= "Shuttle Is Ready For Launch"
}
  
}
}
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (
    response,
  ) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.round(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
