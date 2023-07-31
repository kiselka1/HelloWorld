let password = 'круто';
let enter = String(prompt('Введите пароль'));
enter = enter.toLocaleLowerCase();
if (enter === password) {
    console.log ('Пароль введен верно')
} else {
    console.log ('Пароль введен неверно')
}

let q = 2;
if (q > 0 && q < 10) {
    console.log ('Верно')
} else {
    console.log ('Неверно')
}

let d = 99;
let e = 102;
if (d > 100 || e > 100) {
    console.log ('Верно')
} else {
    console.log ('Неверно')
}

let n = '2';
let m = '3';
alert(Number(n) + Number(m));

let month = Number(prompt('Введите номер месяца'));
switch(month) {
    case 1:
        console.log('Зима')
        break;
    case 2:
        console.log('Зима')
        break;
    case 3:
        console.log('Весна')
        break;
    case 4:
         console.log('Весна')
        break;
    case 5:
        console.log('Весна')
        break;
    case 6:
        console.log('Лето')
        break;
    case 7:
        console.log('Лето')
        break;
    case 8:
        console.log('Лето')
        break;
    case 9:
        console.log('Осень')
        break;
    case 10:
        console.log('Осень')
        break;
    case 11:
        console.log('Осень')
        break;
    case 12:
        console.log('Зима')
        break;
    default:
        console.log('Что-то пошло не так')
        break;
}
