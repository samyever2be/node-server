const express = require("express");
const cors = require('cors');
const users   = require("./sample.json");
const app = express();
app.use(cors({
    origin : "http://localhost:3000",
    methods : ["GET","POST","PATCH","DELETE"],
     allowedHeaders: 'Content-Type' // Allowed headers
}));
const port = 8000;
//Route Creation
app.get("/users",(req, res)=>{
    return res.json(users);
})
//server start
app.listen(port, (err)=>{ //port, callback function
    console.log(`App is running ${port}`);
});
