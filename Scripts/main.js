import { guestList } from "./guests.js"
import { serviceList } from "./services.js"
import { destinationList } from "./destinations.js"

const servicesList = document.getElementById("services-list")
const guestsList = document.getElementById("guests-list")
const destinationsList = document.getElementById("destinations-list")

servicesList.innerHTML = serviceList()
destinationsList.innerHTML = destinationList()
guestsList.innerHTML = guestList()

