db.restaurant.insertMany(
    [

{
        "_id" : "7",
        "name" : "Taste Of Fortune",
        "city_name" : "Delhi",
        "city":'1',
        "area":'11',
        "locality" : "Pitampura, New Delhi",
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "cost": 750, 
        "address":"Shop 1, Plot D,  Laxmi Nagar, New Delhi Complex, Delhi-110076, Delhi",
        "type":[
                {
                    "mealtype":'2',
                    "name":"lunch"
                },
                {
                    "mealtype":'3',
                    "name": "dinner"
                }

            ]  ,
        "Cuisine":[
                {
                    "cuisine":'1',
                    "name": "North Indain"
                },
                {
                    "cuisine":'4',
                    "name":"Fast Food"
                }

            ]
    },

    {
        "_id" : "8",
        "name" : "Delhi Parantha Company",
        "city_name" : "Delhi",
        "city":'1',
        "area":'11',
        "locality" : "Pitampura, New Delhi",
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "cost": 450, 
        "address":"Gujranwala Town, New Delhi Complex, Delhi-110076, Delhi",
        "type":[
                {
                    "mealtype":'1',
                    "name":"breakfast"
                },
                {
                    "mealtype":'4',
                    "name": "snacks"
                }

            ]  ,
        "Cuisine":[
                {
                    "cuisine":'2',
                    "name": "South Indain"
                },
                {
                    "cuisine":'4',
                    "name":"Chineese"
                }

            ]
    },

    {
        "_id" : "9",
        "name" : "Istah - Shawarma & Biryani",
        "locality" : "Rajajinagar",
        "city name" : "Bangalore",
        "city": '4',
        "area":'41',
        "address":"madivaalaa, Bangalore-430006, Bangalore",
        "thumb": "https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg",
        "cost":230,
        "contact_number":"8731537",
        "type":[
                {
                    "mealtype":'1',
                    "name":"breakfast"
                },
                {
                    "mealtype":'2',
                    "name":"lunch"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":'2',
                    "name":"South Indian"
		        },
                {
		        "cuisine":'3',
		        "name":"Chineese"
		    }

        ]
    },

    {
        "_id" : "10",
        "name" : "Sardarji Londonwaley",
        "locality" : "Rajajinagar",
        "city name" : "Bangalore",
        "city": '4',
        "area":'41',
        "address":"Koramangala 7th Block, Bangalore-430006, Bangalore",
        "thumb": "https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg",
        "cost":370,
        "contact_number":"98731537",
        "type":[
                {
                    "mealtype":'3',
                    "name":"dinner"
                },
                {
                    "mealtype":'2',
                    "name":"lunch"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":'1',
                    "name":"North Indian"
		        },
                {
		        "cuisine":'5',
		        "name":"Street Food"
		    }

        ]
    },

    {
        "_id" : "11",
        "name" : "Pav Bhaji Mania",
        "locality" : "Magarpatta",
        "city name" : "Pune",
        "city":'3', 
        "area":'31',
        "address":"Deccan Gymkhana, Pune-210006, Pune",
        "thumb" :  "https://b.zmtcdn.com/data/res_imagery/6508401_RESTAURANT_21a925c42f2f93c9709e1945b9eae56f.jpg",
        "cost":180,
        "contact_number":"8075338401",
        "type":[
                {
                    "mealtype":'3',
                    "name":"dinner"
                },
                {
                    "mealtype":'5',
                    "name":"nightlife"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":'1',
                    "name":"North Indain"
		        },
                {
		        "cuisine":'5',
		        "name":"Street food"
		    }

        ]
    },

    {
        "_id" : "12",
        "name" : "La Sicilia Bistro & Patisserie",
        "locality" : "Magarpatta",
        "city name" : "Pune",
        "city":'3', 
        "area":'31',
        "address":"Kothrud, Pune-310078, Pune",
        "thumb" : "https://b.zmtcdn.com/data/res_imagery/6508401_RESTAURANT_21a925c42f2f93c9709e1945b9eae56f.jpg",
        "cost":680,
        "contact_number":"700753384",
        "type":[
                {
                    "mealtype":'4',
                    "name":"snacks"
                },
                {
                    "mealtype":'5',
                    "name":"nightlife"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":'3',
                    "name":"Chineese"
		        },
                {
		        "cuisine":'4',
		        "name":"Fast food"
		    }

        ]
    }

]
)

