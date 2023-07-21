const joke=require('give-me-a-joke')
const colors=require('colors')
const figlet=require('figlet')
joke.getRandomDadJoke(function(joke)
{
    console.log(joke.rainbow);
})


figlet('Hello World !',function(err,data){
    if(err)
    {
        console.log(err);
    }
    console.log(data.rainbow);
})
