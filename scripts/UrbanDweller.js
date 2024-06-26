import { setSocioLocationId } from "./TransientState.js"

export const LocationTypeChoices = async () => {

    document.addEventListener("change", locationOwnershipChange)

    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    let choicesHTML = "<h2> Which type of area do you live in? </h2>"
    for (const location of locations) {
        
        choicesHTML+= `<input type="radio" name= "location" value ="${location.id}"/> ${location.label}`
    }
    return choicesHTML
}

const locationOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInt = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInt)
    }
}