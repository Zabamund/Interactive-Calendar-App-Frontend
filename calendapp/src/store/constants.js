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
                creator: "John Doe",
                date: '2017-03-15',
                time: '21:06:42.510',
                description: "BYOB block party",
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
                creator: "John Doe",
                date: '2017-03-16',
                time: '21:06:42.510',
                description: "Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning ",
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
                creator: "Jane Doe",
                date: '2017-03-17',
                time: '21:06:42.510',
                description: "A relaxed party on the beach",
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
                        creator: "Jane Doe",
                        date: '2017-03-17',
                        time: '21:06:42.510',
                        description: "A relaxed party on the beach",
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
            creator: "John Doe",
            date: '2017-03-15',
            time: '21:06:42.510',
            description: "BYOB block party",
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
            creator: "John Doe",
            date: '2017-03-16',
            time: '21:06:42.510',
            description: "Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning ",
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
            creator: "Jane Doe",
            date: '2017-03-17',
            time: '21:06:42.510',
            description: "A relaxed party on the beach",
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
                    creator: "John Doe",
                    date: '2017-03-15',
                    time: '21:06:42.510',
                    description: "BYOB block party",
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
                    creator: "John Doe",
                    date: '2017-03-16',
                    time: '21:06:42.510',
                    description: "Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning ",
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
                    creator: "Jane Doe",
                    date: '2017-03-17',
                    time: '21:06:42.510',
                    description: "A relaxed party on the beach",
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
                            creator: "Jane Doe",
                            date: '2017-03-17',
                            time: '21:06:42.510',
                            description: "A relaxed party on the beach",
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
                    creator: "Jane Doe",
                    date: '2017-03-17',
                    time: '21:06:42.510',
                    description: "A relaxed party on the beach",
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
                            creator: "John Doe",
                            date: '2017-03-15',
                            time: '21:06:42.510',
                            description: "BYOB block party",
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
                            creator: "John Doe",
                            date: '2017-03-16',
                            time: '21:06:42.510',
                            description: "Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning,Gaming all night long until morning ",
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
                            creator: "Jane Doe",
                            date: '2017-03-17',
                            time: '21:06:42.510',
                            description: "A relaxed party on the beach",
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
