export default function reducer(state = {
    Cart: [
        {
            info: '2 Classic Collection Garage Door, 2 Entry Door',
            name: 'Johnson_Classic14209123',
            shipping: 'Russia Plant',
            created: 'Manoj Bajpayee',
            expiry: '01/25/2023',
            share: true,
            id: 70452444
        },
        {
            info: "10' 0'' X 10' 0.0'' CAN211CCW1 COMPLETE DOOR INTELLICORE",
            name: 'Chiristopher_Classic14209123',
            shipping: 'Russia Plant',
            created: 'Steve Benneth...',
            expiry: '01/23/2023',
            share: true,
            id: 70452444
        },
        {
            info: 'Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®',
            name: 'Michigan_Classic14209123',
            shipping: 'ABC Plant',
            created: 'Steve Benneth...',
            expiry: '03/20/2023',
            share: false
        },
        {
            info: 'Hardware Special - Stock. W4.HB.8.0.7.0.None.Sol - WH.9.G.2J.B..S',
            name: 'JohnDavid_Classic14209123',
            shipping: 'Russia Plant',
            created: 'Manhatton Cree...',
            expiry: '03/20/2023',
            share: false,
            id: 70452444
        },
        {
            info: `8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE`,
            name: 'Chiristopher_Classic14209123',
            shipping: 'ABC Plant',
            created: 'Jamie Sunshine',
            expiry: '01/24/2023',
            share: true
        },
        {
            info: `8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE`,
            name: 'Johnson_Classic14209123',
            shipping: 'Russia Plant',
            created: 'Jonathon Peter',
            expiry: '01/25/2023',
            share: true,
            id: 70452444
        },
        {
            info: '1 Classic Collection Garage Door, 1 Entry Door',
            name: 'Johnson_Classic14209123',
            shipping: 'Russia Plant',
            created: 'Cristine Agape',
            expiry: '03/25/2023',
            share: false
        },
        {
            info: '2 Classic Collection Garage Door, 2 Entry Door',
            name: 'Johnson_Classic14209123',
            shipping: 'ABC Plant',
            created: 'Cristine Agape',
            expiry: '03/25/2023',
            share: true
        },
        {
            info: '8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE',
            name: 'Johnson_Classic14209123',
            shipping: 'ABC Plant',
            created: 'Cristine Agape',
            expiry: '01/25/2023',
            share: false
        },
        {
            info: '8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE',
            name: 'Johnson_Classic14209123',
            shipping: 'ABC Plant',
            created: 'Casette Snowads',
            expiry: '01/26/2023',
            share: false,
            id: 70452444
        },
        {
            info: '8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE',
            name: 'Johnson_Classic14209123',
            shipping: 'Russia Plant',
            created: 'Casette Snowads',
            expiry: '01/23/2023',
            share: true,
            id: 70452444
        }
    ]
}, action) {
    switch (action.type) {
        case "ADD_Cart":
            return {
                ...state,
                Cart: action.payload
            };
        case "Delete_Cart":
            return {
                ...state,
                Cart: action.payload
            };
        default:
            return state;
    }
}