import { getServices } from "./database.js"

const useServices = getServices() 

export const serviceList = () => {
    let serviceHTML = `<article id="serviceList"> Park Services: `

    for (const service of useServices) {
        serviceHTML += `
        ${service.name}
        `
    }
    serviceHTML += `</article>`
    return serviceHTML
}