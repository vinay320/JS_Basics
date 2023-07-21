const express=require('express')
const app=express()
const port=process.env.PORT || 3000;

app.get('/',(req,res)=>
{
    res.send('<h1>You Made a Req</h1>');
})

app.get('/cat',(req,res)=>
{
    res.send("<h1>You Made a Req 2</h1>");
})
app.get("/dog", (req, res) => {
  res.send("<h1>You Made a Req 3</h1>");
});
app.l;
app.listen(port,()=>
{
    console.log("Running....");
})