// Задание: Написать функцию, которая запрашивает ввод числового значения до тех пор пока его не введут. Если null т пустая строка, то вернуть null. Функция возвращает числовое значение.

// function readNumber() {
//     let a = prompt('Enter the number','');

//     while (!isFinite(a)) {
//         a = prompt('Enter the number again',''); 
//     }

//     if (a === null || a === '') {
//         return null;
//     } else {
//         return a;
//     }
// }

// console.log(readNumber());

// *********************************************************************


// Задание: Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max). Пример работы функции:

// function random(min, max) {
//     let result = (Math.random() * (max - min)) + min;
//     return result;
// }
// console.log(random(1, 5));

// ***********************************************************************

//  Задание: Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// function ucFirst(name) {
//     if (!name) return "empty name";

//     let result = name[0].toUpperCase();
//     let partOfName = name.slice(1);
//     let newName = result + partOfName;
//     return newName;
// }
// console.log(ucFirst(''));

// ***********************************************************************

// Задание: Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false. Функция должна быть нечувствительна к регистру.

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
//         return true;
//     } else {
//         return false;
//     } 
// }
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

// ************************************************************************


// Задание: Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength. Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function trunCate(str, maxlength) {
//     if (str.length > maxlength) {
//        let newStr = str.slice(0, maxlength - 1) + '...';
//         return newStr;
//     } else {
//         return str;
//     }
// }
// console.log(trunCate('Hello world', 8));

// ***************************************************************************


// Задание: Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число. Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// function extractCurrencyValue(str) {
//     let newStr = '';
//     for (let a of str) {
//         if (isFinite(a)) {
//             newStr = newStr + a.toString();
//         }
//     }
//     return newStr;
// }
// console.log(extractCurrencyValue('$120'));

// ***************************************************************************



// МЕТОДЫ СТРОК

// Задание: Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString». То есть дефисы удаляются, а все слова после них получают заглавную букву. Используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// Решение 1:

// function camelize(str) {
//     let arr = str.split(''); // превратили строку в массив символов
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] == '-') {
//             arr[i+1] = arr[i+1].toUpperCase();
//             arr.splice(i, 1);
//         }
//     }
//     let strNew = arr.join('');
   
//     return strNew;
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));


// Решение 2:

// function camelize(str) {
//     return str
//       .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//       .map(
//         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//   }
//   console.log(camelize("-webkit-transition"));

// ******************************************************************************


// Задание: Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива. Функция должна возвращать новый массив и не изменять исходный.

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     let arrNew = arr.filter(item => item >= a && item <= b);
//     return arrNew;
// }

// console.log(filterRange(arr, 1, 4));
// console.log(arr);

// ****************************************************************************


// Задание: Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна изменять принимаемый массив и ничего не возвращать.

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i ++) { //до .length чтобы проверялся последний элемент массива, иначе когда дойдет очередь длина масиива будет 1, следовательно последний элемент отбросится
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--; // т.к каждый раз удаляется первый элемент, для следующего прохода нужно вернуться на -1индекс
//         }
//     }
// }

// console.log(filterRangeInPlace(arr, 1, 4));
// console.log(arr);

// ******************************************************************************

// Задание: Сортировать в порядке убывания

// let arr = [5, 2, 1, -10, 8];

// arr.sort ((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
// });

// console.log (arr);

// ********************************************************************************


// Задание: У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым. Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {

//     // let arrCopy = arr.sort((a, b) => a.localeCompare(b));
//     let arrCopy = arr.sort();
//     return arrCopy;
// }

// console.log(arr);
// console.log(copySorted(arr));

// *********************************************************************************

// Задание: У вас есть массив объектов users, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name); // создался новый массив, имя - это строка, а примитивы копирауются 

// console.log(names); //['Вася', 'Петя', 'Маша']

// ************************************************************************************

// Задание: У вас есть массив объектов user, и у каждого из объектов есть name, surname и id. Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

/* создать такой массив объектов:
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// РЕШЕНИЕ 1:

// let usersMapped = users.map(person => {
//     if (person.name && person.surname) {
//         return { id: person.id, fullName: person.name + " " + person.surname};
//     } else {
//         return { id: person.id, fullName: 'no person' };
//     }
// });

// РЕШЕНИЕ 2 : тоже самое, только расписано больше

// let usersMapped = users.map(person => {
//     let personNew = {};
//     if (person.name && person.surname) {
//         personNew.fullName = person.name + " " + person.surname;
//         personNew.id = person.id;
//         return personNew;
//         }
// });

// console.log(usersMapped);
// console.log(usersMapped[0].id) // 1
// console.log(usersMapped[0].fullName) // Вася Пупкин

// ********************************************************************************************

// Задание: Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(arr) {
//     arr.sort((a,b) => a.age == b.age ? 0 : a.age > b.age ? 1 : -1);
// }
// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr);
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

// *********************************************************************************************

// Задание: Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.    Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// let vasya = { name: "Вася", age: 20 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(users) {
//     let sumAge = users.reduce((sum, item) => sum + item.age , 0);
//     let averageAge = Math.floor(sumAge / users.length);
//     return averageAge;
// }
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// **************************************************************************************************

// Задание: Пусть arr – массив строк. Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// РЕШЕНИЕ 1:

// function unique(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] == ' ') continue;

//         for (let j  = i+1; j < arr.length - 1 ; j++) {
//             if (arr[i] == arr [j]) {
//                 arr.splice(j, 1, ' ');
//             } 
//             if (arr[j] == ' ') continue; 
//         } 
//         if (arr[i+1] == ' ') i++;  
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == ' ') {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//      return arr;
//   }


// РЕШЕНИЕ 2:

// function unique(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
//     return result;
// }
//  console.log(unique(strings)); // кришна, харе, :-O

// *********************************************************************************

// Задание: Есть массив пользователей в виде {id:..., name:..., age:... }. Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений. Используйте метод .reduce в решении.

  /*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/


// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];

// function groupById(users) {
  
//      return users.reduce ((objUsers, person) => {
//         objUsers[person.id] = person;
//         return objUsers;
//     }, {});    
// }

// let usersById = groupById(users);
// console.log(usersById);

// *************************************************************************************