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
    ],
    areaServices: [
        { id: 1, areaId: 3, serviceId: 7 }, // Chamfort River - Rafting
        { id: 2, areaId: 3, serviceId: 8 }, // Chamfort River - Canoeing
        { id: 3, areaId: 3, serviceId: 9 }, // Chamfort River - Fishing
        { id: 4, areaId: 2, serviceId: 5 }, // Lost Wolf Hiking Trail - Hiking
        { id: 5, areaId: 2, serviceId: 4 }, // Lost Wolf Hiking Trail - Picknicking
        { id: 6, areaId: 2, serviceId: 6 }, // Lost Wolf Hiking Trail - Rock Climbing
        { id: 7, areaId: 1, serviceId: 1 }, // Lodge - Lodging
        { id: 8, areaId: 1, serviceId: 2 }, // Lodge - Parking
        { id: 9, areaId: 1, serviceId: 3 }, // Lodge - Information
        { id: 10, areaId: 1, serviceId: 4 }, // Lodge - Picknicking
        { id: 11, areaId: 4, serviceId: 9 }, // Gander River - Fishing
        { id: 12, areaId: 4, serviceId: 5 }, // Gander River - Hiking
        { id: 13, areaId: 5, serviceId: 3 }, // Campgrounds - Information
        { id: 14, areaId: 5, serviceId: 1 }, // Campgrounds - Lodging
        { id: 15, areaId: 5, serviceId: 2 }, // Campgrounds - Parking
        { id: 16, areaId: 6, serviceId: 5 }, // Pine Bluff Trails - Hiking
        { id: 17, areaId: 6, serviceId: 4 }, // Pine Bluff Trails - Picknicking
        { id: 18, areaId: 6, serviceId: 10 } // Pine Bluff Trails - Zip Lining
    ]
}

/* Export getGuests()
    getAreas()
    getServices()
    getAreaServices() */

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getAreaServices = () => {
    return database.areaServices.map(areaService => ({...areaService}))
}
