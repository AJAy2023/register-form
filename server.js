const  express  =  require("express");
const app  =  express();
const  dotenv  =  require("dotenv").config({path:(__dirname , ".env")});

const PORT =  process.env.PORT;

app.get('/',(req, res)=>{
    res.status(200).json({
        msg:"welcome  to the  home page"
    });
});
app.listen(PORT, ()=>{
    console.log(`server is running  on the  port ${PORT}`);
});

