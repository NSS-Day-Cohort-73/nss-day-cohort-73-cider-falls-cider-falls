const database = {
    destinations: [{
      id: 1,
      name: "Chamfort River",
      location: "Northeast",
    }, {
      id: 2,  
      name: "Lost Wolf Hiking Trail",
      location: "North",
    }, {
      id: 3,
      name: "Lodge Area",
      location: "Northwest",
    }, {
      id: 4,
      name: "Gander River",
      location: "Southwest",
    }, {
      id: 5,
      name: "Campgrounds",
      location: "South",
    }, {
      id: 6,
      name: "Pine Bluffs Trails",
      location: "Southeast",
     }],
    services: [
        { id: 1, name: "Rafting" },
        { id: 2, name: "Canoeing" },
        { id: 3, name: "Fishing" },
        { id: 4, name: "Hiking" },
        { id: 5, name: "Picnicking" },
        { id: 6, name: "Rock Climbing" },
        { id: 7, name: "Lodging" },
        { id: 8, name: "Parking" },
        { id: 9, name: "Information" },
        { id: 10, name: "Zip Lines" }
    ],
    servicesDestinations: [
        {id: 1, destinationsId: 1, servicesId: 1},
        {id: 2, destinationsId: 1, servicesId: 2},
        {id: 3, destinationsId: 1, servicesId: 3},
        {id: 4, destinationsId: 2, servicesId: 4},
        {id: 5, destinationsId: 2, servicesId: 5},
        {id: 6, destinationsId: 2, servicesId: 6},
        {id: 7, destinationsId: 3, servicesId: 7},
        {id: 8, destinationsId: 3, servicesId: 8},
        {id: 9, destinationsId: 3, servicesId: 9},
        {id: 10, destinationsId: 3, servicesId: 5},
        {id: 11, destinationsId: 4, servicesId: 3},
        {id: 12, destinationsId: 4, servicesId: 4},
        {id: 13, destinationsId: 5, servicesId: 9},
        {id: 14, destinationsId: 5, servicesId: 7},
        {id: 15, destinationsId: 5, servicesId: 8},
        {id: 16, destinationsId: 6, servicesId: 4},
        {id: 17, destinationsId: 6, servicesId: 5},
        {id: 18, destinationsId: 6, servicesId: 10},
    ],
    guests: [
        { id: 1, name: "John Allen", destinationId: 1},
        { id: 2, name: "Jane Smith", destinationId: 1},
        { id: 3, name: "Robert Johnson", destinationId: 2},
        { id: 4, name: "Emily Brown", destinationId: 2},
        { id: 5, name: "Michael Davis", destinationId: 3},
        { id: 6, name: "Sarah Wilson", destinationId: 4},
        { id: 7, name: "David Taylor", destinationId: 5},
        { id: 8, name: "Jennifer Anderson", destinationId: 6},
        { id: 9, name: "William Thomas", destinationId: 6},
        { id: 10, name: "Elizabeth Jackson", destinationId: 6}
   ]
};

  
  
  
export const getDestinations = () => {
    return database.destinations.map(destinations => ({...destinations}))
}

export const getServices = () => {
    return database.services.map(services => ({...services}))
}

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}))
}
export const getServicesDestinations = () => {
    return database.servicesDestinations.map(servicesDestinations => ({...servicesDestinations}))
}