const  mongoose =  require("mongoose");

// connted to  db 
const connectDB =  async()=>{
    try
    {
        await mongoose.connect('mongodb://127.0.0.1:27017/myapp')
        console.log("mongodb is connected  locally ");
    }catch(error)
    {
        console.log("db connection errro" )
    }
};

module.exports=connectDB;

