export const defaultState = {
    currentUser: {
        userId: 9876,
        name: 'John Doe',
        location: 'Springfield',
        // email: 'fake7@email.com',
        // password: 'password',
        token: '',
        events: [
            {
                eventId: 123,
                eventName: "Block Party",
                picture: "http://www.livingthestory.com/wp-content/uploads/2012/09/2012-block-party.gif",
                creator: "John Doe",
                date: '2017-03-15',
                time: '21:06:42.510',
                description: "A block party or street party is a crowded party in which many members of a single community congregate, either to observe an event of some importance or simply for mutual enjoyment. The name comes from the form of the party, which often involves closing an entire city block to vehicle traffic. Many times, there will be a celebration in the form of playing music and dance and activities like pony rides, inflatable slides, pop corn machines and barbecues.",
                participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                location: {
                  locationId: 123,
                  city: 'Zurich',
                },
                open: false
            },
            {
                eventId: 124,
                eventName: "Lan Party",
                picture: "https://s-media-cache-ak0.pinimg.com/originals/75/81/07/7581074473f802298a2ebfa63ef97936.jpg",
                creator: "John Doe",
                date: '2017-03-16',
                time: '21:06:42.510',
                description: "A LAN party is a gathering of people with computers or compatible game consoles, between which they establish a local area network (LAN) connection between the devices using a router or switch, primarily for the purpose of playing multiplayer video games together. ",
                participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                location: {
                  locationId: 123,
                  city: 'London',
                },
                open: false
            },
            {
                eventId: 125,
                eventName: "Beach Party",
                picture: "http://www.samuitimes.com/wp-content/uploads/2014/10/beach-party-ban.jpg",
                creator: "Jane Doe",
                date: '2017-03-17',
                time: '21:06:42.510',
                description: "A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach",
                participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                location: {
                  locationId: 123,
                  city: 'Rimini',
                },
                open: false
            }
        ],
        friends: [
            {
                userId: 5432,
                name: 'Jane Doe',
                location: 'Springfield',
                events: [
                    {
                        eventId: 125,
                        eventName: "Beach Party",
                        picture: "http://www.samuitimes.com/wp-content/uploads/2014/10/beach-party-ban.jpg",
                        creator: "Jane Doe",
                        date: '2017-03-17',
                        time: '21:06:42.510',
                        description: "A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach",
                        participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                        location: {
                          locationId: 123,
                          city: 'Rimini',
                        },
                        open: false
                    }
                ]
            }
        ]
    },
    events: [
        {
            eventId: 123,
            eventName: "Block Party",
            picture: "http://www.livingthestory.com/wp-content/uploads/2012/09/2012-block-party.gif",
            creator: "John Doe",
            date: '2017-03-15',
            time: '21:06:42.510',
            description: "A block party or street party is a crowded party in which many members of a single community congregate, either to observe an event of some importance or simply for mutual enjoyment. The name comes from the form of the party, which often involves closing an entire city block to vehicle traffic. Many times, there will be a celebration in the form of playing music and dance and activities like pony rides, inflatable slides, pop corn machines and barbecues.",
            participants: [{name: "John Doe"}, {name: "Jane Doe"}],
            location: {
              locationId: 123,
              city: 'Zurich',
            },
            open: false
        },
        {
            eventId: 124,
            eventName: "Lan Party",
            picture: "https://s-media-cache-ak0.pinimg.com/originals/75/81/07/7581074473f802298a2ebfa63ef97936.jpg",
            creator: "John Doe",
            date: '2017-03-16',
            time: '21:06:42.510',
            description: "A LAN party is a gathering of people with computers or compatible game consoles, between which they establish a local area network (LAN) connection between the devices using a router or switch, primarily for the purpose of playing multiplayer video games together. ",
            participants: [{name: "John Doe"}, {name: "Jane Doe"}],
            location: {
              locationId: 123,
              city: 'London',
            },
            open: false
        },
        {
            eventId: 125,
            eventName: "Beach Party",
            picture: "http://www.samuitimes.com/wp-content/uploads/2014/10/beach-party-ban.jpg",
            creator: "Jane Doe",
            date: '2017-03-17',
            time: '21:06:42.510',
            description: "A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach",
            participants: [{name: "John Doe"}, {name: "Jane Doe"}],
            location: {
              locationId: 123,
              city: 'Rimini',
            },
            open: false
        }
    ],
    users: [
        {
            userId: 9876,
            name: 'John Doe',
            location: 'Springfield',
            // email: 'fake7@email.com',
            // password: 'password',
            token: '',
            events: [
                {
                    eventId: 123,
                    eventName: "Block Party",
                    picture: "http://www.livingthestory.com/wp-content/uploads/2012/09/2012-block-party.gif",
                    creator: "John Doe",
                    date: '2017-03-15',
                    time: '21:06:42.510',
                    description: "A block party or street party is a crowded party in which many members of a single community congregate, either to observe an event of some importance or simply for mutual enjoyment. The name comes from the form of the party, which often involves closing an entire city block to vehicle traffic. Many times, there will be a celebration in the form of playing music and dance and activities like pony rides, inflatable slides, pop corn machines and barbecues.",
                    participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                    location: {
                      locationId: 123,
                      city: 'Zurich',
                    },
                    open: false
                },
                {
                    eventId: 124,
                    eventName: "Lan Party",
                    picture: "https://s-media-cache-ak0.pinimg.com/originals/75/81/07/7581074473f802298a2ebfa63ef97936.jpg",
                    creator: "John Doe",
                    date: '2017-03-16',
                    time: '21:06:42.510',
                    description: "A LAN party is a gathering of people with computers or compatible game consoles, between which they establish a local area network (LAN) connection between the devices using a router or switch, primarily for the purpose of playing multiplayer video games together. ",
                    participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                    location: {
                      locationId: 123,
                      city: 'London',
                    },
                    open: false
                },
                {
                    eventId: 125,
                    eventName: "Beach Party",
                    picture: "http://www.samuitimes.com/wp-content/uploads/2014/10/beach-party-ban.jpg",
                    creator: "Jane Doe",
                    date: '2017-03-17',
                    time: '21:06:42.510',
                    description: "A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach",
                    participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                    location: {
                      locationId: 123,
                      city: 'Rimini',
                    },
                    open: false
                }
            ],
            friends: [
                {
                    userId: 5432,
                    name: 'Jane Doe',
                    location: 'Springfield',
                    events: [
                        {
                            eventId: 125,
                            eventName: "Beach Party",
                            picture: "http://www.samuitimes.com/wp-content/uploads/2014/10/beach-party-ban.jpg",
                            creator: "Jane Doe",
                            date: '2017-03-17',
                            time: '21:06:42.510',
                            description: "A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach",
                            participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                            location: {
                              locationId: 123,
                              city: 'Rimini',
                            },
                            open: false
                        }
                    ]
                }
            ]
        },
        {
            userId: 5432,
            name: 'Jane Doe',
            location: 'Springfield',
            // email: 'fake7@email.com',
            // password: 'password',
            token: '',
            events: [
                {
                    eventId: 125,
                    eventName: "Beach Party",
                    picture: "http://www.samuitimes.com/wp-content/uploads/2014/10/beach-party-ban.jpg",
                    creator: "Jane Doe",
                    date: '2017-03-17',
                    time: '21:06:42.510',
                    description: "A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach",
                    participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                    location: {
                      locationId: 123,
                      city: 'Rimini',
                    },
                    open: false
                }
            ],
            friends: [
                {
                    userId: 9876,
                    name: 'John Doe',
                    location: 'Springfield',
                    events: [
                        {
                            eventId: 123,
                            eventName: "Block Party",
                            picture: "http://www.livingthestory.com/wp-content/uploads/2012/09/2012-block-party.gif",
                            creator: "John Doe",
                            date: '2017-03-15',
                            time: '21:06:42.510',
                            description: "A block party or street party is a crowded party in which many members of a single community congregate, either to observe an event of some importance or simply for mutual enjoyment. The name comes from the form of the party, which often involves closing an entire city block to vehicle traffic. Many times, there will be a celebration in the form of playing music and dance and activities like pony rides, inflatable slides, pop corn machines and barbecues.",
                            participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                            location: {
                              locationId: 123,
                              city: 'Zurich',
                            },
                            open: false
                        },
                        {
                            eventId: 124,
                            eventName: "Lan Party",
                            picture: "https://s-media-cache-ak0.pinimg.com/originals/75/81/07/7581074473f802298a2ebfa63ef97936.jpg",
                            creator: "John Doe",
                            date: '2017-03-16',
                            time: '21:06:42.510',
                            description: "A LAN party is a gathering of people with computers or compatible game consoles, between which they establish a local area network (LAN) connection between the devices using a router or switch, primarily for the purpose of playing multiplayer video games together. ",
                            participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                            location: {
                              locationId: 123,
                              city: 'London',
                            },
                            open: false
                        },
                        {
                            eventId: 125,
                            eventName: "Beach Party",
                            picture: "http://www.samuitimes.com/wp-content/uploads/2014/10/beach-party-ban.jpg",
                            creator: "Jane Doe",
                            date: '2017-03-17',
                            time: '21:06:42.510',
                            description: "A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach A relaxed party on the beach",
                            participants: [{name: "John Doe"}, {name: "Jane Doe"}],
                            location: {
                              locationId: 123,
                              city: 'Rimini',
                            },
                            open: false
                        }
                    ]
                }
            ]
        }
    ]
}
