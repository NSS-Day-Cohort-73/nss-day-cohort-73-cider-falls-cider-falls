// Import getGuests() from database
import { getGuests } from "./database.js";

// Invoke guests = getGuests() and store its value
const guests = getGuests()

// Define and export the buildGuestsHTML() 
export const buildGuestsHTML = () => {
// Define HTML variable = opening <ul> tag
    let guestsHTML = "<ul>"
    // Create the for...of loop to iterate the guest of guests
    for (const guest of guests) {
        guestsHTML += `<li data-id="${guest.id}"
            data-name="${guest.name}"
            >${guest.name}
        </li>`
    }
    // Close HTML </ul> tag
    guestsHTML += "</ul>"
    // Return HTML string
    return guestsHTML
}
    
