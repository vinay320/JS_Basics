const express =require('express')
const app=express()


app.get('/',(req,res)=>
{
    res.send("Hello");
})

app.get('/r/:subredit',(req,res)=>
{
    const {subredit}=(req.params);
    res.send(`This is ${subredit} subredit`);
})


app.get("/user/:userid/comments/:commentsid", (req, res) => {
  const { userid,commentsid } = req.params;
  res.send(`UserId: ${userid} and commentsid:${commentsid}`);
});


app.get('/search',(req,res)=>
{
    const  {q}=(req.query);
    res.send(`Ypur are trying to Search ${q}`)
})


app.get('/products/:productid',(req,res)=>
{
    console.log(req.params);
    console.log(req.query);

    res.send('Product Page')
})


app.listen(3000,()=>
{
    console.log("Started at 3000");
})