'use strict';

/*let yourAge = prompt('enter your age', '');

let allow = (yourAge >= 21) ? 'you can buy more 5% alcohol' :
            (yourAge >=18) ? 'you can buy less 5% alcohol': 'you can\'t buy';

console.log(allow);
*/ 
        
    // let people = false;
    // let paid = false;

    // if (paid) people = true;
    // if (people)  console.log('wow');

// ****************************************************************************************** 

// Задание: функции считает средную сумму в квартале

// let getAverage = (month1, month2, month3) => Math.round((month1 + month2 + month3) / 3);

// let dept1FirstQuarter = getAverage(35467, 29842, 38501);
// let dept2FirstQuarter = getAverage(70533, 50121, 33899);
// let dept1SecondQuarter = getAverage(50301, 21984, 19207);
// let dept2SecondQuarter = getAverage(72381, 41562, 29465);

// // просчет среднего объема продаж в каждом отделе
// let dept1AverSales = (dept1FirstQuarter + dept1SecondQuarter) /2;
// let dept2AverSales = (dept2FirstQuarter + dept2SecondQuarter) /2;

// console.log(`Средний объем продаж отдела1 = ${dept1AverSales}`);
// console.log(`Средний объем продаж отдела2 = ${dept2AverSales}`);

// function printBonus (dept1AverSales, dept2AverSales) {
  
//     if (dept1AverSales > dept2AverSales) {
//         let bonus = (dept1AverSales - dept2AverSales) / dept2AverSales * 100;
//         if (bonus >= 30) {
//             console.log(`отдел1 получил бонус в размере ${bonus}%`);
//         } 
//     } else {
//         let bonus = (dept2AverSales - dept1AverSales) / dept1AverSales * 100;
//         if (bonus >=30) {
//             console.log(`отдел2 получил бонус в размере ${bonus}%`);
//         }
//     }
// }
// printBonus(dept1AverSales, dept2AverSales);

// ******************************************************************************************

// Задание: Функция, которая высчитывает чаевые. Аргумент - это счет и возвращает значение чаевых. Создать массив для чаевых  для каждого счета. Создать массив счет + чаевые. Создать функцию, вычисляющую средний счет.

// let bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57]; 

// let tips = []; 
// let totalBill = [];

// let calculateTips = (bill) => {
//     let tips = (bill < 20) ? (bill * 20 / 100) : (bill * 15 / 100);
//     return tips;
// }

// for (let i = 0; i <= bills.length - 1; i++) {
//     tips.push(calculateTips(bills[i]));
//     totalBill.push(bills[i] + tips[i]);
// }

// let calculateAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i <= arr.length - 1; i++) {
//         sum = sum + arr[i];
//     }
//     let a = Math.round(sum / arr.length);
//     return a;
// }

// console.log(`Чаевые: ${tips}`); 
// console.log(`Конечный счет: ${totalBill}`);
// console.log(calculateAverage(totalBill));

// ***********************************************************************************************

// let myOdj = {
//     name : 'Yura',
//     birtYear : 1970,
//     'drive license' : true,
//     job : 'programming instraction',
//     calcAge() {
//         return 2024 - this.birtYear;
//     },
//     message : function(){
//          return (`${this.name} is a ${this.calcAge()}-year old ${this.job} and he has ${this['drive license'] ? 'a' : 'no'} driver license`);
//         }
// };
// console.log ( myOdj.message());

// ****************************************************************************************************

// Задание: ОБЪЕКТЫ и МЕТОДЫ через this

// let person1 = {
//     'fist name' : 'Jack',
//     'last name' : 'White',
//     weight : 79,
//     heigth : 1.70, // BMI = 27.33
// };

// let person2 = {
//     'fist name' : 'Mike',
//     'last name' : 'Black',
//     weight : 91,
//     heigth : 1.93, // BMI = 24.43
// };

// function getBMI() {      //// создали функции, к-рая будет методом для обоих объектов
//     let BMI = (this.weight / (this.heigth ** 2));
//     return BMI;
// }

// person1.myBMI = getBMI;  // создали свойство объекта, куда положили тело функции
// person2.myBMI = getBMI;

// console.log(`Jack : ${person1.myBMI()}`); // вызвали данный метод
// console.log(`Mike : ${person2.myBMI()}`);

// if (person1.myBMI() > person2.myBMI()) {
//     console.log (`${person1['fist name']} ${person1['last name']} BMI (${person1.myBMI()}) is higher than ${person2['fist name']} ${person2['last name']} (${person2.myBMI()})`);
//    } else {
//     console.log (`${person2['fist name']} ${person2['last name']} BMI (${person2.myBMI()}) is higher than ${person1['fist name']} ${person1['last name']} (${person1.myBMI()})`);
// }

// **************************************************************************************************

// Задание: Написать функцию, которая принимает массив и возвращает стороку

// let arr1 = [49, 51, 63];
// let arr2 = [31, 29, 43, 58, 52];

// function printHimiditiesForecast(arr) {
//     let str = '';
//     for (let i = 0; i <= arr.length - 1; i++) {
//         str = str + ` ... ${arr[i]}% humidity in ${i+1} day`;
//     }
//     str = str + ' ... '
//     return str;
// }

// console.log (printHimiditiesForecast(arr1));

// *****************************************************************************************************

let id = Symbol('id');
let user = {
    name : 'Petr',
    age : 30,
    [id] : 123
};
for (let key in user) {
    console.log(key);
}

console.log(user[id]);

