const database = {
    guests: [
        { id: 1, name: "Alice Smith", areaId: 1 },
        { id: 2, name: "Bob Johnson", areaId: 2 },
        { id: 3, name: "Charlie Brown", areaId: 3 },
        { id: 4, name: "Diana Prince", areaId: 4 },
        { id: 5, name: "Ethan Hunt", areaId: 5 },
        { id: 6, name: "Fiona Apple", areaId: 6 },
        { id: 7, name: "George Lucas", areaId: 1 },
        { id: 8, name: "Hannah Montana", areaId: 2 },
        { id: 9, name: "Ian McKellen", areaId: 3 },
        { id: 10, name: "Jessica Jones", areaId: 4 },
        { id: 11, name: "Kevin Spacey", areaId: 5 },
        { id: 12, name: "Laura Croft", areaId: 6 },
        { id: 13, name: "Mike Wazowski", areaId: 1 },
        { id: 14, name: "Nina Simone", areaId: 2 },
        { id: 15, name: "Oscar Wilde", areaId: 3 }
    ],
    services: [
        { id: 1, name: "Lodging" },
        { id: 2, name: "Parking" },
        { id: 3, name: "Information" },
        { id: 4, name: "Picknicking" },
        { id: 5, name: "Hiking" },
        { id: 6, name: "Rock Climbing" },
        { id: 7, name: "Rafting" },
        { id: 8, name: "Canoeing" },
        { id: 9, name: "Fishing" },
        { id: 10, name: "Zip Lining" }
    ],
    areas: [
        { id: 1, name: "Lodge" },
        { id: 2, name: "Lost Wolf Hiking Trail" },
        { id: 3, name: "Chamfort River" },
        { id: 4, name: "Gander River" },
        { id: 5, name: "Campgrounds" },
        { id: 6, name: "Pine Bluff Trails" }
    ]
}

/* Export getGuests()
    getAreas()
    getServices() */

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}
