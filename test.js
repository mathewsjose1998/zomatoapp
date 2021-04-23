
db.user.insert({"_id": "3",
"name": "mathews",
"city": "kochi",
"locality": "kundannoor kochi"})


db.user.find({$or:[{"city":"Bangalore"},{"city":"Pune"}]}).pretty()

db.user.find({"city":"Bangalore","id":"61381"}).pretty()

