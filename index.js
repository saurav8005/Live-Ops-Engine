const express = require("express");
const mongoose = require("mongoose");
const bodyparse = require("body-parser");

const app = express();

const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer");
const SERVER_PORT = process.env.PORT || 5000 ;

mongoose.connect('mongodb+srv://sauravchauhan8005:backenddb1234@cluster0.dgiwkut.mongodb.net/?retryWrites=true&w=majority').then(()=>{
        console.log("sucessfully connected to DB");
    }).catch(()=>{
        console.log("failed to connect to DB");
    });
    

app.use(bodyparse.json());
app.listen(SERVER_PORT,  ()=>{
    
    console.log("server is Up"+" "+ SERVER_PORT)
    
});

app.use("/user", userRoutes);
app.use("/offer", offerRoutes);