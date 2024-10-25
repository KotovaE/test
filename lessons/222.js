// Задание 1

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many film have you watched?','');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many film have you watched?','');
//     }
// }

// start();

// let personalMoviDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false,
// };

// его решение *******************************************************

// let numberOfQuestions = 2;

// for (let i = 0; i < numberOfQuestions; i++) {
//     let a = prompt('What was the last movie you watched',''),
//         b = prompt('How do you rate this film?','');

//         if (a !== '' && a !== null && a.length < 50 && b !== null && b !== '') {
//             personalMoviDB.movies[a] = b; 

//         } else {
//             i--;
//         };        
// }

// мое решение ********************************************************

// function rememberMyFilms() {
//     let numberOfQuestions = 2;

//     for (let i = 0; i < numberOfQuestions; i++) {
//         let a = prompt('What was the last movie you watched','').trim(),
//         b = prompt('How do you rate this film?','');

//         if (a === '' || a === null || a.length > 10 || b === null || b === '') {
//             i--;
//         } else {
//             personalMoviDB.movies[a] = b; 
//         };      
//    }
// }

// rememberMyFilms();


//  мое решение цикл while ***********************************************
// let i = 0;

// while (i < 2) {
//     let a = prompt('What was the last movie you watched',''),
//         b = prompt('How do you rate this film?','');

//     if (a !== '' && a !== null && a.length < 5 && b !== null && b !== '') {
//         personalMoviDB.movies[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }


//  мое решение цикл do...while *********************************************

// let i = 0;
// do {
//     let a = prompt('What was the last movie you watched',''),
//         b = prompt('How do you rate this film?','');

//     if (a === '' || a === null || a.length > 5 || b === null || b === '') {
//         i--;
//     } else {
//          personalMoviDB.movies[a] = b; 
//     };

//     i++;
// }
// while(i < 2);


// function detectPersonalLevel() {
//     if (personalMoviDB.count < 10) {
//         alert ('few mivies you wached');
//     } else if (personalMoviDB.count >= 10 && personalMoviDB.count <= 30) {
//         alert ('You are a simple watcher');
//     } else if (personalMoviDB.count > 30) {
//         alert ('You are fan of movies');
//     } else { 
//         alert ('ERROR');
//     };
// }
// detectPersonalLevel();


// function showMyDB() {
//     if (!personalMoviDB.privat) {
//         console.log (personalMoviDB);
//     }
// }
// showMyDB();


// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         let answer = prompt(`Is your favorite movie number ${i+1}?`, '');
//         personalMoviDB.genres[i] = answer;
//     }
// }
// writeYourGenres();



//  console.log(personalMoviDB);

// *****************************************************************************************************
// *****************************************************************************************************

//************************************************************************
//  ЦИКЛЫ

// Задание2: создать картинку

// *
// **
// ***
// ****

// for (let i = 1; i < 5; i++) {
//     let star = '';

//     for(let j = 0; j < i; j++){
//         star = star + '*';   
//     } 
//     console.log(star); 
// };


//***********************************************************************
// Задание3: создать картинку

//    *
//   ***
//  *****
// *******

// let lines = 5;
// let result = '';

//  for (let i = 1; i <= 6; i++ ) {

//     for (let k = 6; k > i; k--) {
//         result = result + ' ';
//     }

//     result = result +'*'; 

//     for (let j = 2; j <= i; j++) {
//             result = result + '**';
//         }

//     result = result + '\n';
//     }
 
//  console.log(result);

//*********************************************************************

// let i = 5;
// while (i < 11) {
//     console.log (i);
//     i++;
// }

//*********************************************************************

// for (let i = 5; i <= 10; i++) {
//     console.log (i);
// }

// for (let i = 20; i >= 10; i--){
//     if (i === 13) break;
//     console.log(i);
// }

//*********************************************************************
//вывод четных чисел

// for (let i = 2; i <= 10; i++){
//     if (i % 2 === 0) {
//         console.log(`Even number: ${i}`);
//     }
// };


//********************************************************************
//вывод нечетных чисел

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// *******************************************************************
//вывод нечетных чисел используя while
// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//       i++;
//       continue;
//     } else {
//         console.log(i);
//         i++;
//     };
// }


// ******************************************************************
// заполнение пустого массива элементами

// let array = [];

// for (let i = 0; i <= 3; i++) {
//         array[array.length] = i;
//     }
//     console.log (array);

// ******************************************************************

// let array = [];
// for (let i = 5; i <= 10; i++) {
//     array[i-5] = i;
// }
// console.log (array);

// *******************************************************************

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if ((typeof(data[i])) == 'number') {
//         data[i] = data[i] * 2;
//     } else if ((typeof(data[i])) == 'string') {
//        data[i] = data[i] + ' - done';
//     }
// }
// console.log(data);

// ********************************************************************

// Задание:  поменять местами первый с последним, второй с предпоследним и так далее

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = data.length - 1; i >= 0; i--) {
//     result[data.length - 1 - i] = data[i];
// }
// console.log(result);  

// *********************************************************************


// ********************************************************************************************************
// ФУНКЦИИ

// Задание 1:  функция, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку "Привет, Антон!".

// function sayHello(name) {
//     return (`Привет, ${name}!`);
// }
// console.log(sayHello("Антон"));

// ********************************************************************

// Задание 2: Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.   Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

//  let arr = [];

// function returnNeighboringNumbers(number) {
//     for (let i = 0; i < 3; i++) {
//         arr[i] = number - 1 + i;
//     }
//     return (arr);
// }
// console.log(returnNeighboringNumbers(5));


// ******************************************************************

// Задание 3: Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.                                                                                                                    Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof) Примеры:
        // Вызов функции getMathResult(5, 3) даст ответ 5---10---15

        // Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

        // Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

        // Вызов функции getMathResult(10, '5') даст ответ 10

        // Вызов функции getMathResult(10, 0) даст ответ 10

        // Вызов функции getMathResult(20, -5) даст ответ 20

        // Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. 


//  1 вариант решения:

// function getMathResul(x,y) {
//     let str = '';
//     if (typeof (y) === 'number' && y > 0) {
//         for (let i = 1; i <= y; i++) {
//             str = str + x * i;
//             if (i === y) break;
//             str = str + '---';
//         }
//         return str;
//     } else {
//         str = x;
//         return str;
//     }
// }   

// console.log(getMathResul(5,5));

// 2 вариант решения:

// function getMathResul(x,y) {
//     let str = '';
//     if (typeof (y) === 'number' && y > 0) {
//         for (let i = 1; i <= y; i++) {
//             if (i === y) {
//                 str = str + x * i;
//             } else {
//                 str = str + x * i + '---'; 
//             }
//         }
//         return str;
//     } else {
//         str = x;
//         return str;
//     }
// }   

// console.log(getMathResul(3,10));

// ***********************************************************************


// Задание: Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.                                                                                            Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка".  НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
            //     Примеры:

            //    calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

            //    calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

            //    calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

            //    calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

            //    calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// function calculateVolumeAndArea (length) {
//     let volume = length * length * length;
//     let area = 6 * (length * length);

//     if (typeof(length) === 'number' && length > 0 && Math.round(length) === length) {
//         return (`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
//     } else {
//         return ("При вычислении произошла ошибка");
//     }
// }
// console.log(calculateVolumeAndArea(5.5));

// *************************************************************************

// Задание: Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно: 1купе(места:1,2,3,4), 2купе(места:5,6,7,8), 3купе(места:9,10,11,12), 4купе(места:13,14,15,16), 5купе(места:17,18,19,20), 6купе(места:21,22,23,24), 7купе(места:25,26,27,28), 8купе(места:29,30,31,32), 9купе(места:33,34,35,36).                                                     Функция принимает только целое число от 1 до 36. Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение: "Ошибка. Проверьте правильность введенного номера места".                                                            Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует". Пример:

            //   getCoupeNumber(33)  => 9

            //   getCoupeNumber(7)  => 2

            //   getCoupeNumber(300)  => "Таких мест в вагоне не существует"

            //   getCoupeNumber(0)  => "Таких мест в вагоне не существует"

            //   getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

            //   getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

            //   getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"


// РЕШЕНИЕ 1:

// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) === 'number' && seatNumber > 0 && seatNumber <= 36 && Number.isInteger(seatNumber)) {
//         if (seatNumber % 4 === 0) {
//             let trainCompartment = seatNumber / 4;
//             return trainCompartment;
//         } else {
//             let trainCompartment = Math.floor(seatNumber / 4) + 1;
//             return trainCompartment;
//         }
//     } else if (seatNumber === 0 || seatNumber > 36) {
//         return ("Таких мест в вагоне не существует");
//     } else {
//         return ("Ошибка. Проверьте правильность введенного номера места");
//     }
// }
// console.log(getCoupeNumber(8.8));


// РЕШЕНИЕ 2:

// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) === 'number' && seatNumber > 0 && seatNumber <= 36 && Number.isInteger(seatNumber)) {
//             let trainCompartment = Math.ceil(seatNumber / 4);
//             return trainCompartment;
//     } else if (seatNumber === 0 || seatNumber > 36) {
//         return ("Таких мест в вагоне не существует");
//     } else {
//         return ("Ошибка. Проверьте правильность введенного номера места");
//     }
// }
// console.log(getCoupeNumber(8));

// ***************************************************************************

// Задание: Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные".                                                                                                                    Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
            //    Пример:

            //    getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

            //    getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

            //    getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

            // getTimeFromMinutes(-150) => "Ошибка, проверьте данные"


// РЕШЕНИЕ 1: до 10 часов 
// function getTimeFromMinutes(minute) {
//     if (typeof(minute) !== 'number' || !Number.isInteger(minute) || minute < 0) {
//         return("Ошибка, проверьте данные");
//     } else {
//         let hours = Math.floor(minute / 60);
//         let minutes = minute - (60 * hours);
//         if (hours === 0 || hours >= 5 && hours <=10) {
//             return (`Это ${hours} часов и ${minutes} минут`);
//         } else if (hours == 1) {
//             return (`Это ${hours} час и ${minutes} минут`);
//         } else {
//             return (`Это ${hours} часа и ${minutes} минут`);
//         }
//     }
// }  
// console.log(getTimeFromMinutes(700));      



// РЕШЕНИЕ 2: включены все часы

// function getTimeFromMinutes(minute) {
//     if (typeof(minute) !== 'number' || !Number.isInteger(minute) || minute < 0) {
//         return("Ошибка, проверьте данные");
//     } else {
//         let hours = Math.floor(minute / 60);
//         let minutes = minute - (60 * hours);

//         let newHours = hours.toString(); // возвращаем число в строковом виде

//         if (newHours[newHours.length - 1] >= 2 && newHours[newHours.length - 1] <= 4 && newHours.slice(-2) != 12 && newHours.slice(-2) != 13 && newHours.slice(-2) != 14) {
//             return (`Это ${hours} часа и ${minutes} минут`);
//         } else if (newHours[newHours.length - 1] === 0 || newHours[newHours.length - 1] >= 5 && newHours[newHours.length - 1] <= 9 || newHours.slice(-2) >= 11 && newHours.slice(-2) <= 19) {
//             return (`Это ${hours} часов и ${minutes} минут`);
//         } else {
//             return (`Это ${hours} час и ${minutes} минут`);
//         }
       
//     }
// }  
// console.log(getTimeFromMinutes(122));  
// console.log(getTimeFromMinutes(186));  
// console.log(getTimeFromMinutes(245));  
// console.log(getTimeFromMinutes(722));  
// console.log(getTimeFromMinutes(786));  
// console.log(getTimeFromMinutes(845));  

// console.log(getTimeFromMinutes(65));  
// console.log(getTimeFromMinutes(1265));  
// console.log(getTimeFromMinutes(1865));  
// console.log(getTimeFromMinutes(3669));  
// console.log(getTimeFromMinutes(67260)); 

// console.log(getTimeFromMinutes(306));  
// console.log(getTimeFromMinutes(546)); 
// console.log(getTimeFromMinutes(661));  
// console.log(getTimeFromMinutes(1145));   

// *******************************************************************************


// Задание: Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены. 
                    //   Пример:

                    //  findMaxNumber(1, 5, 6.6, 11); =>  11

                    //  findMaxNumber(1, 5, '6', '10');  =>  0

// РЕШЕНИЕ 1:

// function findMaxNumber(a, b, c, d) {
//      let arr = [a, b, c, d];

//     if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number' || arr.length < 4) {
//         return 0;
//     } else {
//         let maxNumber = Math.max(a, b, c, d);
//         return maxNumber;
//     }
// }


// РЕШЕНИЕ 2:

// function findMaxNumber(a, b, c, d) {
//     let arr = [a, b, c, d];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof(arr[i]) !== 'number') {
//             return 0;
//         } else if (arr.length < 4) {
//             return 0;
//         }
//      } 

//      let maxNumber = Math.max(a, b, c, d);
//      return maxNumber;
// }

// console.log(findMaxNumber(1, 5, 6.6, 11));
// console.log(findMaxNumber(1, 5, '6', 11));
// console.log(findMaxNumber(1, 3, 6));

// *********************************************************************************


// ЗАДАНИЕ: Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. Сразу скажу, что есть варианты решения через прием, называемый рекурсия. Он дальше по курсу. Но этот вариант нужно решить без её применения. Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому.                                                                                                                     Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу. Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии!!!
                    // Пример:

                    // fib(4) => ''0 1 1 2"

                    // fib(7) => ''0 1 1 2 3 5 8"

                    // fib('7') => ''

                    // fib(1) => "0"

                    // fib(0) => ''

// РЕШЕНИЕ МОЕ:

//  function fibonachi(length) {
//     let str = [];
//     let strFib = '';

//     if (length <= 0 || typeof(length) !== 'number' || !Number.isInteger(length)) {
//         return '';
//     }

//     for (let i = 1; i <= length; i++) {
//         if (i === 1) {
//             str[0] = i-1;
//         } else if (i === 2) {
//             str[1] = i-1;
//         } else if (i > 2) {
//             str[i-1] = (str[i-2] + str[i-3]);
//         }
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (i < str.length - 1) {
//             strFib = strFib + str[i] + ' ';
//         } else {
//             strFib = strFib + str[i];
//         }
//     }
//     return strFib;
//  }                  
// console.log(fibonachi(5));


// РЕШЕНИЕ ЕГО: 

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     return result;
// }
// fib(5);

// ********************************************************************************
// function getMax(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
  
//     for (let item of arr) { // для каждого элемента массива
//       partialSum += item; // добавляем значение элемента к partialSum
//       maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//       if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//     }
//     return maxSum;
//   }

// ******************************************************************************************
// ******************************************************************************************

// ОБЪЕКТЫ

// Задание: 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом. P.S. желательно использовать деструктуризацию, но не обязательно. 

                //    Пример:
                //   showExperience(personalPlanPeter) => '1 month'

        // 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде. Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка. P.S. Для переноса строки используется \n в конце строки.

                    //    Пример:
                    //   showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"

        //    3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде. Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

                //    Пример:
                //   personalPlanPeter.showAgeAndLangs(personalPlanPeter) => 'Мне 29 и я владею языками: RU ENG'

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan){
//         // let str = `Мне ${this.age} и я владею языками: ${this.skills.languages[0].toUpperCase()} ${this.skills.languages[1].toUpperCase()}`; // первый способ

//         let a = this.skills.languages;  // второй способ
//         let languages = a.map((item) => item.toUpperCase())
//                          .join(' ');
//         let str = `Мне ${this.age} и я владею языками: ${languages}`;
//         return str;
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//   let {exp} = plan.skills;
//   return exp;
// }
// console.log(showExperience(personalPlanPeter));


// function showProgrammingLangs(plan) {
//   let {programmingLangs} = plan.skills;
//   let str = '';
//   for (let key in programmingLangs) {
//     str = str + `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//   }
//   return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

// ********************************************************************************************
// ********************************************************************************************

// МАССИВЫ:

// Задание: 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате. Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'.
                //  ПРИМЕР:
                //  showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

        //    2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре. В КОНСОЛЬ !!!!
                    // Пример:
                    // standardizeStrings(favoriteCities)  выведет в консоль
                                                                            // lisbon
                                                                            // rome
                                                                            // milan
                                                                            // dublin

// const family = ['Peter', 'Ann', 'Alex', 'Linda']; 

// function showFamily(arr) {
//     if (arr.length > 0) {
//         return `Семья состоит из: ${arr.join(' ')}`;
//     } else {
//         return 'Семья пуста';
//     }
// }
// console.log(showFamily(family));


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// РЕШЕНИЕ 1:
// function standardizeStrings(arr) {
//     arr.forEach((item) => {
//         console.log(item.toLowerCase());
//     });
// }
// standardizeStrings(favoriteCities);

// РЕШЕНИЕ 2:
// function standardizeStrings(arr) {
//     let arrLowerCase = arr.map((item) => item.toLowerCase());
//     let str = arrLowerCase.join('\n');
//     console.log (str);
// }
// standardizeStrings(favoriteCities);

// ********************************************************************************************

// Задание: Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке. Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

        //    Пример:
        //    const someString = 'This is some strange string';
        //    reverse(someString) => 'gnirts egnarts emos si sihT'


// const someString = 'This is some strange string';

// РЕШЕНИЕ 1: через цикл

// function reverse(str) {
//     let strNew = '';
//     if (typeof str === 'string') {
//         for (let i = str.length - 1; i >= 0; i--) {
//         strNew = strNew + str[i];
//        }
//     } else {
//         strNew = 'Ошибка!';
//     }
//     return strNew;
// }
// console.log(reverse(someString));


// РЕШЕНИЕ 2: через методы массива

// function reverse(str) {
//    if (typeof str !== 'string') {
//     return 'Ошибка!';
//    } else {
//     let arr = str.split('');
//    return arr.reverse().join('');
//    }
// }
// console.log(reverse(someString))

// ***********************************************************************************

// Задание: У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами: 
                                                //  const baseCurrencies = ['USD', 'EUR'];
                                                // const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

//    Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате.  Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
                                        //   Пример:
                                        //                availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
                                        //   Вернет строку:
                                        //                 Доступные валюты:
                                        //                 UAH
                                        //                 RUB   
//       Заметьте:
//   - CNY (юань) исчез из списка валют, значит такая валюта закончилась
//   - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
//   - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку     

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// const allAvailableCurrencies = [...baseCurrencies, ...additionalCurrencies];


// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0) {
//         return 'Нет доступных валют';
//     } else {
//         let message = 'Доступные валюты:\n';
//         for (let item of arr) {
//             if(item !== missingCurr){
//                 message += item + '\n';
//             } else {
//                 continue;
//             }
//         }
//         return message;
//     }
// }
// console.log(availableCurr(allAvailableCurrencies, 'UAH'));

// **********************************************************************************************