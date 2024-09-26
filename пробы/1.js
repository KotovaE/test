//поиск простого числа


for (let n=2;n<=50;n++){
    // if (n==2){
    //  console.log(`chislo ${n} prostoe`); 
    //  continue;  
    // }
    if(n%2==0 && n!=2){
       continue;
    }
    let IsProstoe= 1; 
    for(let j=3;j<n/2;j+=2){
        if(n%j==0 && n!=j){
           // console.log(`chislo ${n} ne prostoe`);
            IsProstoe=0;
            break;
        } 
    }
    if (IsProstoe==1){
        console.log(`chislo ${n} prostoe`); 
    }
}
   









