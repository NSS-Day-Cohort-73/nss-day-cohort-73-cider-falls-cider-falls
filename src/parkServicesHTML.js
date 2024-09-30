import { getServices} from "./database.js"

const services = getServices()

export const parkServices = () => {
    let buildServicesHTML = "<ul>"

    for (const service of services) {
        buildServicesHTML += `<li>${service.name}</li>`
    }
    buildServicesHTML += "</ul>"
    return buildServicesHTML
}

// Import getServices() from database

// Invoke services = getServices() and store its value

// Define and export the buildServicesHTML() 
    // Define HTML variable = opening <ul> tag
    // Create the for...of loop to iterate the service of services
    // Close HTML </ul> tag
    // Return HTML string

/* Add onclick function for when we click on a service, it displays what areas have
    that service */
    