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



let place = prompt("Введите пароль");
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
    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Лето");
        break;
    case 9:
    case 10:
    case 11:
        alert("Осень");
        break;
    case 12:
    case 1:
    case 2:
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
if (clientOS === 1) {
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


// дз 2.4

for (let i = 0; i < 2; i++) {
    console.log("Привет");
}




for(let i = 1; i <= 5; i++) {
    console.log(i);
}





for(let i = 7; i <= 22; i++) {
    console.log(i);
}





let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400",
};

for(let key in obj) {
    console.log("${key} - зарплата $(obj[key]) долларов");
}





let n = 1000;
let numb = 0;

while(n >= 50) {
    n /= 2;
    numb++;
}
console.log(n);
console.log(numb);



let firstFriday = 5;
for(let i = firstFriday; i <= 31; i += 7) {
    console.log("сегодня пятница, ${i} -е число. необходимо подготовить отчет");
}