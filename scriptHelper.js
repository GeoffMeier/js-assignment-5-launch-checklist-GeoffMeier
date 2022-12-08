// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(doc, name, diameter, star, distance, moons, imageUrl) {
    
    let mission = doc.getElementById("missionTarget")
           mission.innerHTML = ` <h2>Mission Destination</h2>
                 <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                     <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(inputValue) {
    //treating zero as empty
if(!inputValue){
return "Empty"
}
return isNaN(inputValue)?"Not a Number":"Is a Number"

}
//this is passed implicitly by add event listener and is = to the HTML form(documents)
function formSubmission(doc, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    
    
    
    
if(validateInput(fuelLevel)==="Not a Number"|| validateInput(cargoLevel)==="Not a Number"){
    alert("Enter in a number for fuel level and/or cargo mass")
}
if(validateInput(pilot)=== "Is a Number"|| validateInput(copilot)==="Is a Number"){
    alert("pilot and copilot should have a name not a number")
}  

    
if(fuelLevel<10000){
    
    return list.innerHTML=`
   
   
    <ol> 
    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
    <li id="fuelStatus" data-testid="fuelStatus">fuel level too low for launch</li>
    <li id="cargoStatus" data-testid="cargoStatus">cargo mass low enough for launch</li>
    </ol>
`
    
}


if(cargoLevel>10000){
    return list.innerHTML=`
   
    <ol> 
    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
    <li id="fuelStatus" data-testid="fuelStatus">fuel level high enough for launch</li>
    <li id="cargoStatus" data-testid="cargoStatus">cargo mass too high for launch</li>
    </ol>
`
        
} if(cargoLevel<10000 && fuelLevel>10000){
    return list.innerHTML= `
    
    <ol> 
    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
    <li id="fuelStatus" data-testid="fuelStatus">fuel level high enough for launch</li>
    <li id="cargoStatus" data-testid="cargoStatus">cargo mass low enough for launch</li>
    </ol>
    `
}

}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
return planets[Math.round(Math.random()* planets.length)]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
