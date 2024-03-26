import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/",(req,res)=>{
  res.render("index.ejs");
});


app.get("/Skills",(req,res)=>{
  res.render("Skills.ejs");
});

app.get("/Projects",(req,res)=>{
  res.render("Projects.ejs");
});

app.get("/Education",(req,res)=>{
  res.render("Education.ejs");
});

app.get("/Contact",(req,res)=>{
  res.render("Education.ejs");
});




app.listen(3000,()=>{
    console.log(`Server is running on port  ${port}`);
})