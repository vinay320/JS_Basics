const { log } = require('console');
const fs=require('fs')
const path=require('path')

const f1=path.join(__dirname,'inp1.txt');
const f2 = path.join(__dirname, 'inp2.txt');

const f3 = path.join(__dirname, 'out.txt');

// fs.readFile(f1,(err,data)=>
// {
  
//     const arr1=data.toString().split('\r\n');
//     fs.readFile(f2,(err,data)=>
//     {
//         const arr2 = data.toString().split("\r\n");
//         let ans=arr1.concat(arr2);
        
//         // console.log(ans);
//         ans.sort((a,b)=>a-b);
//         // console.log(ans);

//         ans=ans.join('\n');
//         console.log(ans);

//         fs.writeFile(f3,ans,{encoding:'utf-8'},(err)=>
//         {
//             if(err) throw err;
//             console.log("Merged");  
//         })


//     });
// })

//not good way


function readF1()
{
    return new Promise((res,rej)=>
    {
        fs.readFile(f1,(err,data)=>
        {
            if(err) rej(err);
             res(data.toString().split("\r\n"));
        })

       
    })
}

function readF2()
{
    return new Promise((res, rej) => {
      fs.readFile(f2, (err, data) => {
        if (err) rej(err);
        res(data.toString().split("\r\n"));
      });
    });
}



function writeF3(data)
{
    return new Promise((res, rej) => {
      
        fs.writeFile(f3,data,{encoding:'utf-8'},(err)=>
        {
            if(err) rej(err);
            res();
            console.log("Everything done");
        })
    });
}

let ans = null;

readF1()
.then((data)=>
{
    ans=data;
    return readF2();
})
.then((data) => {

    //merging two arrays
  ans = ans.concat(data);
  //sorting in asceding
  ans.sort((a, b) => a - b);
  //joining array to make string
  ans = ans.join("\n");
  return writeF3(ans);
}).catch((err)=>
{
    console.log(err);
})