const numbers = [1, 5, 4, 10, 0, 3];
for(let i = 0 ; i < numbers.length ; i++) {
    if (numbers [i] == 10) break;
    console.log(numbers[i]);
}

let arr = [1, 5, 4, 10, 0, 3]; 
for (let numbers of arr) {
    if (numbers == 4) {
        break;
    }
}
console.log(arr.indexOf(numbers));

let numbs = [1, 3, 5, 10, 20];
let str = numbs.join( );
console.log(str);

let massives = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];
console.log(massives);

const items = [1, 1, 1];
items.push(2,2,2);
console.log(items);

let greetings = [9, 8, 7, 'a', 6, 5];
greetings = greetings.sort();
console.log(greetings);
console.log(greetings.pop());
console.log(greetings);

let guess = [9, 8, 7, 6, 5];
    prompt('Угадай число');


let letters = 'abcdef';
let a  = letters.revers();
console.log(a);

let b = [
    [1,2,3],
    [4,5,6],
];
b = b.push();
console.log(b);


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

let n = [
  [1, 2, 3,],
  [4, 5, 6]
]
n = n.join();
console.log(n);

let randomNubers = [1,3,5,7];
let result = 0;
for (let i = 0; i < randomNubers.length ; i++) {
    result += randomNubers[i];
}
console.log(result);

const g = [1, 2, 3, 4, 5]
   const squares = g.map(function(num) {
    return num * num
   })
   console.log(squares)

   let negativeNumbers = [
   [-1, 0, 5, -10, 56],
   [-25, 25, 0, -1000, -2]
  ]
   let res = negativeNumbers.filter(function(elem) {
	  if (elem <= 0) {
		return true;
	  } else {
		return false;
	}
});
console.log(res);



