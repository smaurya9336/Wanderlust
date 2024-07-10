const mongoose= require("mongoose");
const initData= require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() =>{
    console.log("connected DB");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB =async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj, 
        owner:"668bf25e70ba1d208e867738"
      }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}
initDB();