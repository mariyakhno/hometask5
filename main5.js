// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle (a,b) {
//     let res = a * b;
//     return res
//     }
//     console.log(rectangle(4,6));

// створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle (r) {
//     let res = 3.14 * r**2
//     return res;
// }
// console.log(circle(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cilinder (h,r) {
//     let res = 3.14 * 2 * h * r
//     return res;
// }
// console.log(cilinder(6,5))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function userList (arrayName) {
//     for (let user of arrayName) {
//         console.log (user);
//     }
// }
// userList (users);

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph (text) {
//  document.write(`<p>${text}</p>`)
// }
// paragraph (`Lorem ipsum dolor sit amet`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list (item){
//     document.write(`<ul>`);
//      document.write(`<li>${item}</li>`,`<li>${item}</li>`,`<li>${item}</li>`);
//      document.write(`</ul>`);
// }
// list(`apple`)

// функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//  function list (item,number){
//     document.write(`<ul>`);
//     for(let i=0;i<number;i++)
//       document.write(`<li>${item}</li>`);
//      document.write(`</ul>`);
//  }
//  list(`apple`,10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function userList(array) {
//     document.write(`<ul>`);
//     for (let item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
// let item = [1,3, true, 'oleg']
// userList(item)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// - створити функцію яка повертає найменьше число з масиву
let num =[1,2,3,4,5,6];
function minNumber (array) {
    let min=array [0];
    for (number of array) {
     if (min<number) {
         
     }
    }
}
