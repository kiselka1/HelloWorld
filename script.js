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









function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }  
  }
  function num (n) {
    return n% 2 ==0;
  }

  function num (n) {
    if (n% 2 == 0) {
        alert('Четное')
    } else {
        alert('Нечетное')
    }
  }

  function number (a) {
    return a*a;
  }

  function checkAge (age) {
    alert('Сколько тебе лет?')
    if(age < 0) {
        console.log('Вы ввели неправильное значение')
    } else if (age <= 12) {
        console.log ('Привет,друг!')
    }else if (age >= 13) {
        console.log ('Добро пожаловать!')
    }
  }

  function numbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return 'Одно или оба значения не являются числом';
    } else {
      return a * b;
    }
  }

  function cubeNumber() {
    const user = prompt("Введите число:");
    const number = Number(user);
    if (isNaN(number)) {
      return "Переданный параметр не является числом";
    }
    const cube = Math.pow(number, 3);
    return `${number} в кубе равняется ${cube}`;
  }
  for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
  }
