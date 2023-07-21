const fs=require('fs')
const path=require('path')
const data='hello from file System'

// fs.writeFile('abc.txt',data,{encoding:'utf-8',flag:'w'},(err)=>
// //            file name,data,options,                   callback funtions 
// {
//     if(err)
//     {
//         throw err;
//     }
//     console.log("Done");
// })


// fs.readFile('abc.txt',{encoding:'utf-8',flag:'r'},(err,data)=>
// {                                   // in read we have two callback funtions err and data
//     if(err) throw err;
//     console.log(data);
// })


const file1=path.join(__dirname,'files','xyz.txt');
const file2=path.join(__dirname,'files','def.txt');
// __diranme give path of current file system on whcih we are working





// fs.readFile(file1, { encoding: "utf-8", flag: "r" }, (err, data) => {
//   // in read we have two callback funtions err and data
//   if (err) throw err;
//   console.log(data);
// });



fs.writeFile(file2,data,{encoding:'utf-8',flag:'w'},(err)=>
//            file name,data,options,                   callback funtions 
{
    if(err)
    {
        throw err;
    }
    console.log("Done");
})