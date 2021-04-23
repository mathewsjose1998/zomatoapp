db.restaurant.insertMany(
    [

{
        "_id" : "13",
        "name" : "Zaika Spice Cream",
        "city_name" : "Delhi",
        "city":'1',
        "area":'11',
        "locality" : "Pitampura, New Delhi",
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "cost": 870, 
        "address":"Shop 1, Plot D,  Laxmi Nagar, New Delhi Complex, Delhi-110076, Delhi",
        "type":[
                {
                    "mealtype":'5',
                    "name":"drinks"
                },
                {
                    "mealtype":'2',
                    "name": "lunch"
                }

            ]  ,
        "Cuisine":[
                {
                    "cuisine":'1',
                    "name": "North Indain"
                },
                {
                    "cuisine":'5',
                    "name":"Street Food"
                }

            ]
    },

    {
        "_id" : "14",
        "name" : "Oriental Fusion Restaurant - Ramee Grand Hotel",
        "city_name" : "Delhi",
        "city":'1',
        "area":'11',
        "locality" : "Pitampura, New Delhi",
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "cost": 440, 
        "address":"Shivaji Nagar, New Delhi Complex, Delhi-110076, Delhi",
        "type":[
                {
                    "mealtype":'6',
                    "name":"nightlife"
                },
                {
                    "mealtype":'5',
                    "name": "drinks"
                }

            ]  ,
        "Cuisine":[
                {
                    "cuisine":'3',
                    "name": "Chineese"
                },
                {
                    "cuisine":'2',
                    "name":"South Indian"
                }

            ]
    }
]
)