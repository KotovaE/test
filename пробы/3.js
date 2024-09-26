// объявление функции return

let x = prompt('vedi chislo x:','');
let n = prompt('vedi stepen n:','');

if (n>=1 && n%1==0){
    let result = pow(x,n);
    console.log(result);
} else{
    console.log (`stepen ${n} ne natyralnoe chislo`);
}

/*function pow(x,n){
   let a=1;
   for (i=1;i<=n;i++){
       a*=x;
       //console.log(a,i);
   }
   return a;
}*/

function pow(x,n){
    let a=x**n;
   return a;
}

