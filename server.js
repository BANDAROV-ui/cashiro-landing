const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const DB = "./database.json";

app.post("/login", (req,res)=>{
  const {user, pass} = req.body;

  if(user === "admin" && pass === "1234"){
    res.json({success:true});
  } else {
    res.json({success:false});
  }
});

app.get("/data", (req,res)=>{
  const data = JSON.parse(fs.readFileSync(DB));
  res.json(data);
});

app.listen(3000, ()=>console.log("Server running"));
