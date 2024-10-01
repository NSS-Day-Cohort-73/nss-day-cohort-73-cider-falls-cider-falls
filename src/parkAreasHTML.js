// Import getAreas() from database
import { getAreas } from "./database.js";

// Invoke areas = getAreas() and store its value
const areas = getAreas()

// Define and export the buildAreasHTML() 
export const buildAreasHTML = () => {
// Define HTML variable = opening <ul> tag
    let areasHTML = "<ul>"
    // Create the for...of loop to iterate the area of areas
    for (const area of areas) {
        areasHTML += `<li data-id="${area.id}"
            data-name="${area.name}"
            >${area.name}
        </li>`
    }
    // Close HTML </ul> tag
    areasHTML += "</ul>"
    // Return HTML string
    return areasHTML
}
    

/* Add onclick function for when we click on an area, it displays how many
    guests are in an area */
    