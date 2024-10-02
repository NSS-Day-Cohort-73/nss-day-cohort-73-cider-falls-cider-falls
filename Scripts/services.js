import { getServices, getDestinations, getServicesDestinations } from "./database.js"

const useServices = getServices() 
const destinations = getDestinations()
const pairings = getServicesDestinations()

export const serviceList = () => {
    let serviceHTML = `<article id="serviceList"> Park Services: `

    for (const service of useServices) {
        serviceHTML += `
        <span data-id="${service.id}" data-name="${service.name}">
        ${service.name}, 
        </span>`
    }
    serviceHTML += `</article>`
    return serviceHTML
}

document.addEventListener(
    "click", 
    (clickEvent) => {
    // Check if the clicked element is a service
    const clickTarget = clickEvent.target
    if (clickEvent.target.classList.contains("service")) {
        const serviceId = parseInt(clickEvent.target.getAttribute("data-id"));


        let destinationNames = [];

        for (const pairing of pairings) {
            if (pairing.servicesId === serviceId) {
                // Find the destination that matches this pairing
                const destination = destinations.find(dest => dest.id === pairing.destinationsId);
                if (destination) {
                    destinationNames.push(destination.name); // Add the destination name to the array
                }
            }
        }

        // Create a message to display
            window.alert(`${clickTarget.dataset.name} is offered at: ${destinationNames.join(", ")}`)
    }
});
