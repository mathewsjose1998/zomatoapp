const express=require('express');
const app=express()
const port=9000;
const mongo=require('mongodb')
const mongourl="mongodb://localhost:27017"
const MongoClient=mongo.MongoClient
var cors=require('cors');
let db;
app.use(cors());

const col_name1='city';

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
})

MongoClient.connect(mongourl,(err,client)=>{
    if(err) throw err

    db=client.db('myfirstdb')
    app.listen((port),()=> console.log('listening on http://localhost:9000'))
})


app.get('/location',(req,res)=>{

  //  let query=req.query.city_name;
   
    
    db.collection('city').find({}).toArray((err,result)=>{
        if(err){
            res.status(400).send(err)
        }

        res.status(200).send(result);
    })
    
})


app.get('/cusine',(req,res)=>{
  
      db.collection('cuisine').find({}).toArray((err,result)=>{
          if(err){
              res.status(400).send(err)
          }
  
          res.status(200).send(result);
      })
      
  })

  app.get('/mealtype',(req,res)=>{
  
    db.collection('mealtype').find({}).toArray((err,result)=>{
        if(err){
            res.status(400).send(err)
        }

        res.status(200).send(result);
    })
    
})

app.get('/restauranthome',(req,res)=>{
    let city=req.query.city;
    let query={}
     if(req.query.city && req.query.mealtype){
        query={city:req.query.city,"type.mealtype":req.query.mealtype}
    }
   else if(req.query.city){
        query={city:req.query.city}

    }
    
    else if(req.query.area){
        query={area:req.query.area}
    }
    else if( req.query.mealtype){
        query={"type.mealtype":req.query.mealtype}
    }
    
  console.log(query)
    db.collection('restaurant').find((query)).toArray((err,result)=>{
        if(err){
            res.status(400).send(err)
        } 

        res.status(200).send(result);
    })
    
})


app.get('/restaurantlist/:city/:mealtype',(req,res)=>{
    console.log(req.params.id)
    let query={}
    
    let sort={cost:1}

    if(req.query.lcost && req.query.hcost && req.query.cuisine && req.query.sort){
        query={city:req.params.city,"type.mealtype":req.params.mealtype, cost:{$gt:parseInt(req.query.lcost),$lt:parseInt(req.query.hcost)},'Cuisine.cuisine':req.query.cuisine }
        sort={cost:parseInt(req.query.sort)}
    }
   else if(req.query.lcost && req.query.hcost && req.query.cuisine ){
        query={city:req.params.city,"type.mealtype":req.params.mealtype, cost:{$gt:parseInt(req.query.lcost),$lt:parseInt(req.query.hcost)},'Cuisine.cuisine':req.query.cuisine }
       
    }

    else if(req.query.lcost && req.query.hcost && req.query.sort){
        query={city:req.params.city,"type.mealtype":req.params.mealtype, cost:{$gt:parseInt(req.query.lcost),$lt:parseInt(req.query.hcost)} }
        sort={cost:parseInt(req.query.sort)}
    }

    else if(req.query.cuisine && req.query.sort){
        query={city:req.params.city,"type.mealtype":req.params.mealtype,'Cuisine.cuisine':req.query.cuisine}
        sort={cost:parseInt(req.query.sort)}
    }

    else if(req.query.cuisine){
        query={city:req.params.city,"type.mealtype":req.params.mealtype,'Cuisine.cuisine':req.query.cuisine}

    }
    else if(req.query.lcost && req.query.hcost){
        query={city:req.params.city,"type.mealtype":req.params.mealtype, cost:{$gt:parseInt(req.query.lcost),$lt:parseInt(req.query.hcost)}}

    }
    else if(req.query.sort){
        query={city:req.params.city,"type.mealtype":req.params.mealtype}
        sort={cost:parseInt(req.query.sort)}
        

    }
    else{
        query={city:req.params.city,"type.mealtype":req.params.mealtype}
    }
   
    
    
  console.log(query)
    db.collection('restaurant').find(query).sort(sort).toArray((err,result)=>{
        if(err){
            res.status(400).send(err)
        }

        res.status(200).send(result);
    })
    
})




app.get('/restaurantdetail/:id',(req,res)=>{
    console.log(req.params.id)
    let query={_id:req.params.id}
    console.log(query)
  
    db.collection('restaurant').find(query).toArray((err,result)=>{
        if(err){
            res.status(400).send(err)
        }

        res.status(200).send(result);
    })
    
})


//POST
app.post('/placeOrder',(req,res)=>{
    console.log(req.body)
 
    var data={
        _id:req.body.order_id,
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        address:req.body.address,
        rest_name:req.body.rest_name,
        person:req.body.person
    }
    db.collection('orders').insert(data,(err,result)=>{
        if(err) throw err
        res.status(200).send('order placed')
    })
})


app.get('/getOrder',(req,res)=>{
    
    db.collection('orders').find({}).toArray((err,data)=>{
        if(err) throw err
        res.send(data)
    })
})

app.delete('/getOrder',(req,res)=>{
    
    db.collection('orders').deleteMany(({}),(err,data)=>{
        if(err) throw err
        res.send(data)
    })
})