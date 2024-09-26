// Совершенным числом называется число, равное сумме своих делителей,
//  меньших его самого. Например, 28=1+2+4+7+14.
//   Определите, является ли данное натуральное число совершенным.
//    Найдите все совершенные числа на данном отрезке.


//   Определите, является ли данное натуральное число совершенным.

// let number=prompt("enter chislo:", '');
// let result=0;

//     while(number<=30){
//         for(i=1; i<number; i++){
//             if (number%i==0) {
//                 result+=i;
//             }
//         } break;
//     }
//     if (result==number){
//         console.log(`Chislo ${number} sovershennoe`);
//     } else{
//         console.log(`Chislo ${number} NEsovershennoe`);
//     }



//    Найдите все совершенные числа на данном отрезке.

let result=0;

    for(j=1;j<30;j++){
        for(i=1; i<j; i++){
            if (j%i==0) {
                result+=i;
            } else continue;
        }
        if (result==j){
            console.log(`Chislo ${j} sovershennoe`);
        } else{
            console.log(`Chislo ${j} NEsovershennoe`);
        } 
        result=0;
    }
 
   