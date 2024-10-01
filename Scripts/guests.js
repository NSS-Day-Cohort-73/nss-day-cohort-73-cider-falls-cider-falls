import { getGuests } from "./database.js"

const useGuests = getGuests()

export const guestList = () => {
    let guestHTML = `<ul id="guestList">`

    for (const guest of useGuests) {
        guestHTML += `<li class="guest">
        ${guest.name}
        </li>`
    }
    guestHTML += `</ul>`
    return guestHTML
}