const userURL = 'mongodb+srv://manyabbr0209:HkqthBm0LNxHKcMA@cluster0.b0ntkf3.mongodb.net/userdata?retryWrites=true&w=majority';

import mongoose from "mongoose";

const DataConnection= mongoose.connect(userURL);
  DataConnection.then(data=>{
    console.log(" DB Connected..");
}).catch(err=>{
    console.log("Error during DB Connection...", err);
});


export  default mongoose;