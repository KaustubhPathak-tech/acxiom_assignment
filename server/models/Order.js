const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",//Item.js  //kon sa item liya hai
        required: true,

      },],
    vendor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",//Vendor.js //kis vendor se liya gya hai
        required: true,

      },],
    user:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",//Consumer.js // kon sa consumer kharida hai
        required: true,

      },],
      address:{
        type:"string",
        required:true
      },
      price:{
        type:"string",
      }
      ,
      payment:{
        type:"string",
        enum: ["cash", "UPI"],
        required:true,

      }
,
      status: {
        type: String,
        enum: ["Recieved", "Shipped", "Deleivered"],
        required: true,
      },

   
   
    
   
   
  
   
   
  
    
    
    
   
  });

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("order", userSchema)
