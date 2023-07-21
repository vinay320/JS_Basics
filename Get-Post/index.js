const express =require('express')
const app=express()
const path=require('path')
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded({extended:true}));  // used to parse data sent from html Form as req.body
app.use(express.json());  // for json data
app.get('/',(req,res)=>
{
    res.render('index');
})


app.get('/user',(req,res)=>
{
    console.log(req.query);
    res.send("Get Request")
})

app.post('/user',(req,res)=>
{
    console.log(req.body);
    res.send("Post Rqest")
})
app.listen(3000,()=>
{
    console.log("Running at 3000");
})