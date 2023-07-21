// const num=parseInt(process.argv[2]);

// function print(n)
// {
//     for(let i=1;i<=n;i++)
//     {

//     console.log(i);
//     }
// }

// print(num)



function fb(n)
{
    let cnt3=1;
    let cnt5=1;
    for(let i=1;i<=n;i++)
    {
        let str="";
        if(cnt3==3)
        {
            str+="fizz";
            cnt3=0;
        }
        if(cnt5==5)
        {
            str+="buzz";
            cnt5=0;
        }
        if(str=="")
        {
            str+=i;
        }
        console.log(str);
        cnt3++;
        cnt5++;
    }
}

fb(20);