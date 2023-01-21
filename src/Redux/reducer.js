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
    ],
    Category: '',
    DoorStyle: '',
    DoorType: '',
    ShippingPoint: '',
    Assembly: '',
    WidthOne: '',
    WidthTwo: '',
    HeightOne: '',
    HeightTwo: '',
    Windcode: '',
    Design: '',
    Color: '',
    GlassType: '',
    Section: '',
    Framing: '',
    Spring: '',
    TrackSize: '',
    TrackMount: '',
    TrackLift: '',
    TrackRadius: '',
    Lock: '',
    Packaging: '',
    MICS: false
}, action) {
    switch (action.type) {
        case "Add_MICS":
            return {
                ...state,
                MICS: action.payload
            };
        case "Add_Packaging":
            return {
                ...state,
                Packaging: action.payload
            };
        case "Add_Lock":
            return {
                ...state,
                Lock: action.payload
            };
        case "Add_TrackRadius":
            return {
                ...state,
                TrackRadius: action.payload
            };
        case "Add_TrackLift":
            return {
                ...state,
                TrackLift: action.payload
            };
        case "Add_TrackMount":
            return {
                ...state,
                TrackMount: action.payload
            };
        case "Add_TrackSize":
            return {
                ...state,
                TrackSize: action.payload
            };
        case "Add_Spring":
            return {
                ...state,
                Spring: action.payload
            };
        case "Add_Framing":
            return {
                ...state,
                Framing: action.payload
            };
        case "Add_Section":
            return {
                ...state,
                Section: action.payload
            };
        case "Add_GlassType":
            return {
                ...state,
                GlassType: action.payload
            };
        case "Add_Color":
            return {
                ...state,
                Color: action.payload
            };
        case "Add_Design":
            return {
                ...state,
                Design: action.payload
            };
        case "Add_Windcode":
            return {
                ...state,
                Windcode: action.payload
            };
        case "Add_HeightTwo":
            return {
                ...state,
                HeightTwo: action.payload
            };
        case "Add_HeightOne":
            return {
                ...state,
                HeightOne: action.payload
            };
        case "Add_WidthTwo":
            return {
                ...state,
                WidthTwo: action.payload
            };
        case "Add_WidthOne":
            return {
                ...state,
                WidthOne: action.payload
            };
        case "Add_Category":
            return {
                ...state,
                Category: action.payload
            };
        case "Add_DoorStyle":
            return {
                ...state,
                DoorStyle: action.payload
            };
        case "Add_DoorType":
                return {
                    ...state,
                    DoorType: action.payload
                };
        case "Add_ShippingPoint":
                return {
                    ...state,
                    ShippingPoint: action.payload
                };
        case "Add_Assembly":
                    return {
                        ...state,
                        Assembly: action.payload
                    };
        default:
            return state;
    }
}