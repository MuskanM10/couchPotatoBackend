const mongoose = require('mongoose');
const mongoURI='mongodb+srv://test123:test123@cluster0.htgvg57.mongodb.net/couchpotato?retryWrites=true&w=majority';
const mongoconnect=async()=>{
    await mongoose.connect(mongoURI, {useNewUrlParser:true})
    .then( async function(){
        console.log("Connected to db");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data= await fetched_data.find({}).toArray().catch((err)=>{
            console.log(err);
        });
        global.food_items=data;
        const foodCategory=await mongoose.connection.db.collection("foodCategory");
        const catData= await foodCategory.find({}).toArray().catch((err)=>{
            console.log(err);
        });
        global.foodCategory=catData;
 
        // console.log(global.food_items)
    })
    .catch(function(err){
        console.log("---",err);
    })
    
}

module.exports=mongoconnect;