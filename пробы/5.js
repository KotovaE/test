// Последовательность 1,1,2,3,5,8,... состоит из чисел Фибоначчи.
//  Каждый элемент, начиная с третьего, равен сумме двух предыдущих. Найдите n-е число Фибоначчи.


// let a=1;
// let b=1;
// let c;

// function chislo(){
//     if ((n==1) || (n==2)) {
//         c=a;
//         i=n;
//     } 
//     else {
//        for (i=2; i<n; i++) {
//         c=a+b;
//         a=b;
//         b=c; 
//         }  
//     }
//     console.log(c,i);
// }


// let n=prompt('enter number:','');
// chislo (n);


let a=0;
let b=1;
let c=1;

function chislo(){
       for (i=1; i<n; i++) {
        c=a+b;
        a=b;
        b=c; 
        }  
    console.log(c,i);
}


let n=prompt('enter number:','');
chislo (n);