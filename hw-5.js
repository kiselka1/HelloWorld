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

function showTextButton() {
  let month = prompt('Введите номер месяца');
    if(month = 1 || 2 || 12) {
    console.log('Зима')
    } else if (month = 3 || 4 || 5) {
          console.log ('Весна')
    } else if (month = 6 || 7 || 8) {
      console.log('Лето')
    } else if (month = 9 || 10 || 11) {
      console.log('Осень')
    } else {
      console.log ('Что-то пошло не так')
    }
}

 