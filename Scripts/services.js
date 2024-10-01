import { getServices } from "./database.js"

const useServices = getServices() 

export const serviceList = () => {
    let serviceHTML = `<ul id="serviceList">`

    for (const service of useServices) {
        serviceHTML += `<li class="service">
        ${service.name}
        </li>`
    }
    serviceHTML += `</ul>`
    return serviceHTML
}