 myFunction=(a,b)=> a*b;
 console.log(myFunction(10,20));

 function name1(a=20, b=a+myFunction(10,20)){
    let sum=a+b;
    return sum;
 }
 console.log(name1());

 function name1(a=20, b=a-myFunction()){
    let sum=a+b;
    return sum;
 }


    
