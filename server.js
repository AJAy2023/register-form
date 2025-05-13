const  express  =  require("express");
const app  =  express();
const  dotenv  =  require("dotenv").config({path:(__dirname , ".env")});
const connectDB = require("./config/db");
const PORT =  process.env.PORT;
// mongoconnection 
connectDB();

// middlerwares
app.use(express.json());

app.get('/',(req, res)=>{
    res.status(200).json({
        msg:"welcome  to the  home page"
    });
});
app.listen(PORT, ()=>{
    console.log(`server is running  on the  port ${PORT}`);
});

