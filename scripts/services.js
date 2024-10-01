import { getServcies } from "./database.js";

const services = getServcies()

export const renderServices = () => {
    let html = "<ol>"

    for (const service of services) {
        html += `<li 
        data-type="service"
        data-id="${service.id}" 
        data-serviceType="${service.type}"
        >${service.type}</li>`
    }

    html += "</ol>"
    return html
}