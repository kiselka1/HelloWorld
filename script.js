let a;
a = '20';

alert(a);

let year;
year = 2007;

alert(year);

let creator;
creator = "Brendan";

alert(creator);

let l = 10;
let h = 2;

alert(l + h);

alert(l - h);

alert(l * h);

alert(l / h);

let x = 2;
let y = 5;

alert(x ** y);

let c = 9;
let b = 2;
let result = c % b;

alert(result);

let num = 1;
num += 5;

num -= 3;

num *= 7;

num /= 3;

num += 1;

num -= 1;

alert(num);

let age = prompt('Сколько вам лет?');

alert(age);

const user = {
    name: 'Lera',
    age: 21,
    IsAdmin: true,
}

user['city of residence'] = true;
delete user['city of residence'];
let info = prompt('Какую информацию хотите узнать о пользователе? ${name} ');

alert(user[info]);
console.log(user[info]);

let userName = prompt('Как тебя зовут?');

alert(`Привет, ${userName} !`);