const express=require('express')
const app=express()
const path=require('path')


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));  //joins the path
//override the default value by express


app.use(express.static(path.join(__dirname,'public')));

const todos=["Go to Gym","Buy Drinks","Learn React","Sleep","Eat","Repeat"];

app.get('/',(req,res)=>
{
    res.render('index');
})

app.get('/random',(req,res)=>
{
    const randomNum=Math.floor(Math.random()*100);
    res.render('random',{randomNum});
})

app.get('/todos',(req,res)=>
{
    res.render('todos',{todos});
})


app.listen(3000,()=>
{
    console.log("Started");
})