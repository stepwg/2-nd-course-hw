
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




function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "summer";
    } else if (month >= 9 && month <= 11) {
        return "automn";
    } else if (month === 12 || month === 1 || month === 2) {
        return "winter";
    } else {
        return "error";
    }
}

console.log(getSeason(prompt("enter ur number")));



