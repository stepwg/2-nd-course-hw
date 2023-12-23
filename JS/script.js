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
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
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


user.city_of_residence = "Moscow";


user.age = 30;


delete user.city_of_residence;



let info = prompt("Какую инормацию хотите узнать о пользователе?");
alert(user[info]);



let yourName = prompt("Введите ваше имя");
alert(`Привет,${yourName}!`);