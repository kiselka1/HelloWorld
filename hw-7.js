console.log('js'.toLocaleUpperCase())

arr = ['Кошка', 'Кит', 'Комар', 'Носорог']
function searchStart(arr) {
    let search = 'ко';
    if(searchStart.toLowerCase().includes(search.toLocaleLowerCase())){
        console.log(searchStart)
    }
}

console.log(Math.floor(32.58884))
console.log(Math.ceil(32.58884))
console.log(Math.round(32.58884))

const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(numbers);
const max = Math.max(numbers);
console.log(`Наименьшее число: ${min}`);
console.log(`Наибольшее число: ${max}`);

console.log(Math.round(Math.random() * 10))

function getRandomInt(minValue, maxValue) {
return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}console.log(getRandomInt(7, 8));


let myDate = new Date();
console.log(myDate)

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

const date = new Date();
 function getMyDate(num){
    if (num > 0 && num < 10) { 
        return '0' + num;
    } else {
        return num;
    }
}

alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getMyDate(date.getDate()) + '.' + getMyDate(date.getMonth() + 1) + '.' + date.getFullYear());


function guessWords () {
let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
words= words.sort(() => Math.random() - 0.5);
alert(words);
let firstElement = prompt("Чему равнялся первый элемент массива?");
let lastElement = prompt("Чему равнялся последний элемент массива?");
let right = 0;
if (firstElement === 0) {
        right++;
} 
if (lastElement === words.length - 1) {
right++;
}
if (right === 0) {
alert("Поздравляю! Вы угадали оба элемента.");
} else if (right === 6) {
alert("Вы были близки к победе!");
} else {
alert("Вы ответили неверно.");
}
}

function showTextButton() {
    let month = prompt('Введите номер месяца');
      if(month >= 1 && month <= 2 || month == 12) {
        console.log('Зима')
      } else if (month >= 3 && month <= 5 ) {
        console.log('Весна')
      } else if (month >= 6 && month <= 8) {
        console.log('Лето')
      } else if (month >= 9 && month <= 11){
        console.log ('Осень')
      } else {
        console.log('Что-то пошло не так')
      }
  }