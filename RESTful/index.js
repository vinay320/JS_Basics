const { log } = require('console');
const express=require('express')
const app=express()
const path=require('path')
const {v4:uuid}=require('uuid');
const methodOverride=require('method-override');

let comments = [
  { id: uuid(), username: "vinay", text: "Eat Sleep Repeat" },
  { id: uuid(), username: "karan", text: "Just Do It" },
  { id: uuid(), username: "shyam", text: "Always Good!!" },
];

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));  //to parse data sent from html form
app.use(methodOverride('_method'));

app.get('/',(req,res)=>
{
    res.send("Ok");
})



//all comments route
app.get("/comments", (req, res) => {
  res.render('index',{comments});
});


//new comment route
app.get("/comments/new", (req, res) => {
  res.render('new');
});

// post new comment
app.post("/comments", (req, res) => {
  
    const {username,text}=req.body;
    comments.push({
        username,text,id:uuid()
    });
    res.redirect('/comments');  //redirecting to all comments page

});


// display perticuler comment
app.get('/comments/:commentid',(req,res)=>
{
  const {commentid}=req.params;
  const foundComment =comments.find((comment)=>comment.id===commentid);

  console.log(foundComment);
    res.render('show',{foundComment});
})

app.get("/comments/:commentid/edit", (req, res) => {
  
  const{commentid}=req.params;
  const foundComment = comments.find((comment) => comment.id === commentid);
  res.render('edit',{foundComment});

});


// for update  // brower cannot send patch req so use mathod override
app.patch('/comments/:commentid',(req,res)=>
{
  const { commentid } = req.params;
  const foundComment = comments.find((comment) => comment.id === commentid);

  const {text}=req.body;
  foundComment.text=text;
  res.redirect('/comments');

})

app.delete('/comments/:commentid',(req,res)=>
{
  const{commentid}=req.params;
  const newComArray=comments.filter((comment)=>comment.id!==commentid)
  comments=newComArray;
  res.redirect('/comments');
})

app.listen(3000,()=>
{
    console.log("Running at 3000");
})