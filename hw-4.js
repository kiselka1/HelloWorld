alert('Привет');
alert('Привет');

let i = 1;
do {
  console.log (i);
	i++;
} while (i < 6);
endwhile

let a = 7;
while (a <= 22) {
  console.log(i)
  i++;
}
endwhile

const obj = {
    'Коля': '200',
	'Вася': '300',
	'Петя': '400',
};
for (var key in obj) {
    alert(key + 'Коля - зарплата ' + obj[key] + '200$');
}

let day = prompt('7');
if (day == 1) {
alert('Сегодня пятница, 7-е число. Необходимо подготовить отчет.');
} else if (day == 14) {
alert('Сегодня пятница, 14-е число. Необходимо подготовить отчет.');
} else if (day == 21) {
alert('Сегодня пятница, 21-е число. Необходимо подготовить отчет.');
} else if (day == 28) {
alert('Сегодня пятница, 28-е число. Необходимо подготовить отчет.');
}


const puzzle = (a, b) => {
  if (a > b) {
    return a + b;
  } else {
    return a * b;
  }
}
console.log(puzzle(20, 3))