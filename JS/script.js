let a = 10;
alert(a); 
a = 20; 
alert(a); 
 
 
const since = 2007; 
alert(since); 
 
 
const creator = "Brendan Eich"; 
alert(creator); 
 
 
let b = 10; 
let c = 2; 
alert(b + c); 
alert(b - c); 
alert(b * c); 
alert(b / c); 
 
 
let result = 2 ** 5; 
alert(result); 
 
 
a = 9; 
b = 2; 
alert(a % b); 
 
 
let num = 1; 
num += 5; 
num -= 3; 
num *= 7; 
num /= 3; 
num += 1; 
num -= 1; 
alert(num); 
 
 
let age = prompt("Сколько вам лет?"); 
alert(age); 
 
 
let user = { 
    name: "Joe", 
    age: 25, 
    isAdmin: true, 
} 
console.log(user.name); //'Joe' 
console.log(user.age); //25 
console.log(user.isAdmin); //(true) 
 
 
user['city of residence'] = "Moscow"; 
console.log(user['city of residence']); 
 
 
user.age = 30; 
 
 
delete user['city of residence']; 
 
 
 
let info = prompt("Какую инормацию хотите узнать о пользователе?"); 
alert(user[info]); 
 
 
 
let yourName = prompt("Введите ваше имя"); 
alert(`Привет,${yourName}!`);



let place = string(prompt("Введите пароль"));
let password = 'пароль';
if (place === password) {
    alert("Пароль введен верно");
}
else {
    alert("Пароль введен неправильно");
}



let p = 6;
if (p > 0 && p < 10) {
    console.log("Верно");
}
else {
    console.log("Неверно");
}

p = 0; //false
p = 10; //false
p = -3; //false
p = 2; //true



let t = 150;
let o = 25;
if (t > 100 || o > 100) {
    console.log("Верно");
}
else {
    console.log("Неверно");
}



let q = '2';
let w = '3';
alert(Number(q) + Number(w));





let monthNumber = Number(prompt("Введите номер месяца"));
switch(monthNumber) {
    case 3-5:
        alert("Весна");
        break;
    case 6-8:
        alert("Лето");
        break;
    case 9-11:
        alert("Осень");
        break;
    case 12,1,2:
        alert("Зима");
        break;
}



let choice = prompt("Пожалуйста введите любое число");
if (isNaN(choice)) {
    alert("Нет такого числа");
}
else if (choice % 2 === 0) {
    alert("Четное");
}
else {
    alert("Нечетное");
}



let clientOS = 1;
if (clientOS == 1) {
    console.log("Для андроид");
}
console.log("Для ИОС");




let clientDeviceYear = 2010;
if ((clientOS === 1) && (clientDeviceYear >= 2015)) {
    console.log("Установите версию приложения для Андроид по ссылке");
} 
else if ((clientOS === 1) && (clientDeviceYear < 2015)) {
    console.log("Установите облегченную версию приложения для андроид по ссылке");
}
else if ((clientOS === 0) && (clientDeviceYear >= 2015)) {
    console.log("Установите версию прилоэения для Иос по ссылке");
}
else {
    console.log("Устновите облегченную версиб приложения для Иос по ссылке");
}