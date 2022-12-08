// Write your JavaScript code here!
const {formSubmission,myFetch,pickPlanet,addDestinationInfo}= require("./scriptHelper")
// import{myFetch,pickPlanet,addDestinationInfo} from "./scriptHelper"
window.addEventListener("load", function() {
    // let form = document.querySelector("form");
    // form.addEventListener("submit", function(event){
    //    let pilotInput = document.querySelector("input[name=pilotName]")
    //    let copilotInput = document.querySelector("input[name=copilotName]")
    //    let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
    //    let CargoMassInput = document.querySelector("input[name=CargoMass]")
    //    if(pilotInput.value===''|| copilotInput.value===''||fuelLevelInput===''||CargoMassInput===''){
    //     alert("ALL FIELDS ARE REQUIRED!!!");
    //     event.preventDefault();}
    // window.document.getElementById("launchStatusCheck").style.visibility="hidden"
    let form = window.document.getElementById("formId")
    let listedPlanets;
   let listedPlanetsResponse= myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       addDestinationInfo(pickPlanet(listedPlanets),window.document)
   })
if(form!==null)
    form.addEventListener("submit",function (event){
        event.preventDefault()
        
        const fuelLevel = window.document.getElementById("fuelLevelNum")
        const cargoLevel = window.document.getElementById("cargoMassNum")
        const pilot= window.document.getElementById("pilotName")
        const copilot= window.document.getElementById("copilotName")
        if([pilot.value,copilot.value,fuelLevel.value,cargoLevel.value].some((value) => validateInput(value)=== "Empty")){
            alert("pilot, copilot, fuelLevel, cargoMass all must be filled to submit")
    }
        formSubmission(window.document,window.document.getElementById("faultyItems"), pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
    })

    // let target= document.getElementById("missionTarget")
    // form.addEventListener("')

   
   
}) 