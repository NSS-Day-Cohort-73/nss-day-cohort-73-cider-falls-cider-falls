const database = {
    guests: [
        {
            id: 1,
            name: "Some Person",
            areaId: 0
        }, {
            id: 2,
            name: "Another Person",
            areaId: 0
        }, {
            id: 3,
            name: "Yet Another Person",
            areaId: 0
        }
    ],
    services: [
        {
            id: 1,
            name: "Lodging"
        }, {
            id: 2,
            name: "Parking"
        }, {
            id: 3,
            name: "Information"
        }, {
            id: 4,
            name: "Picknicking"
        }, {
            id: 5,
            name: "Hiking"
        }, {
            id: 6,
            name: "Rock Climbing"
        }, {
            id: 7,
            name: "Rafting"
        }, {
            id: 8,
            name: "Canoeing"
        }, {
            id: 9,
            name: "Fishing"
        }, {
            id: 10,
            name: "Zip Lining"
        }
    ],
    areas: [
        {
            id: 1,
            name: "Lodge",
        }, {
            id: 2,
            name: "Lost Wolf Hiking Trail",
        }, {
            id: 3,
            name: "Chamfort River",
        }, {
            id: 4,
            name: "Gander River",
        }, {
            id: 5,
            name: "Campgrounds",
        }, {
            id: 6,
            name: "Pine Bluff Trails",
        }
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