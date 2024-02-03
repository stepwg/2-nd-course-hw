
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
    console.log(`${key} - зарплата $(obj[key]) долларов`);
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
    console.log(`сегодня пятница, ${i} -е число. необходимо подготовить отчет`);
}

// дз 2.5 


// №1 

function minNumber(a,b) {
    if (a > b) {
        return b;
    }   

    return a;
}

// или return a > b ? b : a;


function evenOrOdd(a) {
    if (a % 2 === 0) {
        return "Число четное";
    }

    return "Число нечетное";
}



function square(a) {
    console.log (a ** 2);
}

function square2(a) {
    return a ** 2;
}




function howOld() {
    let urAge = prompt("how old are you?");

    if (urAge <= 0) {
        alert("wrong number");
        return;
    }

    else if (urAge <= 12) {
        alert("Привет, друг!");
        return;
    }

    alert("Добро пожаловать!");
}

howOld()





function isNumbers(a,b) {
    if (isNaN(a) && isNaN(b)){
        return "Одно или оба значения не являются числом";
    }

    return a * b;
}



function cube() {
    let urNumber = prompt("Введите число")

    if (isNaN(urNumber)) {
        return "Переданный параметр не является числом";
    }

    alert(`${urNumber} в кубе равняется ${urNumber ** 3}`);
}

cube()



const circle1 = {
    radius: 10,
    getArea: function() {
        return 3.14 * (this.radius ** 2);
    }
}

const circle2 = {
    radius: 5,
    getPerimeter: function() {
        return 3.14 * 2 * this.radius;
    }
}




function getSeason() {
    let month = prompt('enter ur number');
    if (month >= 3 && month <= 5) {
        alert("Spring");
    } else if (month >= 6 && month <= 8) {
        alert("summer");
    } else if (month >= 9 && month <= 11) {
        alert("automn");
    } else if (month === 12 || month === 1 || month === 2) {
        alert("winter");
    } else {
        alert("error");
    }
}



// дз 2.6

const arr = [1, 5, 4, 10, 0, 3]; 
for (let value of arr) {
    console.log(value);
    if (value === 10) {
        break;
    }
}


const arr1 = [1, 5, 4, 10, 0, 3];
const index = arr1.indexOf(4);
console.log(index);



const arr2 = [1, 3, 5, 10, 20];
const str = arr2.join(' ');
console.log(str);



let arr3 = [];
for (let i = 0; i < 3; i++) {
    let innerArr = [];
    for ( let j = 0; j < 3; j++) {
        innerArr.push(1);
    }
    arr3.push(innerArr);
}
console.log(arr3);



const arr4 = [1, 1, 1];
arr4.push(2, 2, 2);
console.log(arr4);



let arr5 = [9, 8, 7, 'a', 6, 5];
arr5.sort((a,b) => a - b).pop();
console.log(arr5);



const arr6 = [1, 2, 3, 4, 5];
const guessNumb = Number(prompt("guess a number"), 10);
if (arr6.includes(guessNumb)) {
    alert("correct");
} else {
    alert("wrong");
}



const str1 = 'abcdef';
const reverseStr = str1.split(''). reverse().join('');
console.log(reverseStr);



const arr7 = [[1,2,3], [4,5,6]];
const flatArr7 = arr7.flat();
console.log(flarArr7);



const arr8 = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < arr7.lenght - 1; i++) {
    console.log(arr7[i] + arr7[i + 1]);
}



function getSquareNumers(arr9) {
    return arr9.map(num => num ** 2);
}



function getLenghtWords(words) {
    return words.map(word => word.lenght);
}



function filterPositive(array) {
    let result = [];
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] < 0) {
            result.push(array[i]);
        }
    }
    return result;
}


// дз 2.7

let string = "js";
string = string.toUpperCase();
console.log(string);



function massive(array, str) {
    return array.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}



let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));



let nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums));



function allRandom() {
    console.log(Math.floor(Math.random() * 10) + 1);
}



function random(n) {
    let result = [];
    for (let i = 0; i < n/2; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}



function random1(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(new Date());



let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);



function getDates(date) {
    let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    let months =["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.get.FullYear()} - это ${days[date.getDay()]}\n Время: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`; 
}
console.log(getDates(new Date()));



function game2() {
    let fruits = ["Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let guess1 = prompt("Чему равнялся первый элемент массива?");
    let guessLast = prompt("Чему равнялся последний элемент массива?");

    if (guess1 === fruits[0] && guessLast === fruits[fruits.length - 1]) {
        alert("Поздравляем, вы угадали оба слова.");
    }
    else if (guess1 === fruits[0] || guessLast === fruits[fruits.length - 1]) {
        alert("Вы близки к победе");
    }
    else {
        alert("Вы не угадали ни одного слова");
    }
}


// дз 2.8

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));





const people1 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];

function isPositive(el) {
    return el > 0;
}
function isMale(el) {
    return el.gender === "male";
}
function filter(arr, callback) {
    const output = [];
    arr.map(el => {
        if (callback(el)) {
            output.push(el);
        }
    })
    return output;
}
console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people1, isMale));




function nowDate() {
    let timerId = setInterval(() => {
        const date = new Date();
        console.log(date);
    }, 3000)

    setTimeout(() => {
        clearInterval(timerId);
        console.log("30 sec is done");
    }, 30000);
}
nowDate()



function delay(callback) {
    setTimeout(() => callback(), 1000);
}
delay(function() {
    console.log("Привет, Глеб");
})




function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
		if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))