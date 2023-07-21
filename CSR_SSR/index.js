const express=require('express')
const app=express()
const path=require('path')
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})) //this is working
app.use(express.json()); //in case of axios this will work

const Todos=["go to gym","buy food","play pubg","watch Kdrama"];

app.get('/todos',(req,res)=>
{
    res.json(Todos);
})

app.post("/todos", (req, res) => {
 try {
    
     console.log(req.body);
     const { todo } = req.body;

     Todos.push(todo);
     res.status(200).json({ message: "Todo added" });
 } catch (error) {
    res.status(400).json({msg:"Something went Wring"});  
 }
});


app.listen(3000,()=>
{
    console.log("Running at 3000");
})