console.log('Task 3. 1-10');
//1
function f1(num) {
    let numStr = num.toString();
    for(let i = 0; i < numStr.length; i++) {
        if(numStr[i] <= numStr[i - 1]) {
            return false;
        }
    } return true;
}
console.log(121123, 12345);
console.log(f1(121123), f1(12345));
//2
let a = [1, '', 2, 3, '', 5];
let filt = a.filter(i => i !== '');
console.log(filt);
//3 
let arr = [
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
];
let sortArr = arr.map(subArr => subArr.sort((a, b) => a - b));
console.log(sortArr);
//4
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
let mini = Math.min(arr1.length, arr2.length);
arr2 = arr2.slice(0, mini);
console.log(arr2); 
//5
for (let i = 10; i <= 1000; i++) {
    let secondLastDigit = Math.floor(i / 10) % 10;
    if (secondLastDigit % 2 === 0) {
        console.log(i);
    }
}
//6
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 4; i < arr3.length; i += 4) {
    arr3.splice(i, 1); 
}
console.log(arr3);
//7
let num = 5;
let res = '0'.repeat(num);
console.log(res); 
//8
let str = 'aaa bbb ccc eee fff';
let abc = str.split(' ');
let res1 = abc.filter((arg, i) => i % 2 === 0).join(' ');
console.log(res1); 
//9
let arr4 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let sum = arr4.flat().reduce((acc, num) => acc + num, 0);
console.log(sum);
//10
let word = ['sd', 'fdf', 'dsdsd', 'sfg', 'sdsds'];
let words = word.filter(wor => wor.length <= 3);
console.log(words);
//11
const num1 = 1357;
const num2 = [...num1.toString()].every(digit => parseInt(digit) % 2 !== 0);
console.log(num2);
//12
const word1 = 'abcba';
const word2 = word1 === word1.split('').reverse().join('');
console.log(word2); 
//13
let arr5 = [
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]
let sum1 = arr5.flat(Infinity).reduce((arg, num) => arg + num, 0);
console.log(sum1);
//14
for(let i = 10; i < 1000; i++) {
    let a = parseInt(i.toString()[0])
    if(a % 2===0) {
        console.log(i);
    }
}
//15
const arr6 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr6.length; i += 2) {
  if (i + 1 < arr6.length) { 
    [arr6[i], arr6[i + 1]] = [arr6[i + 1], arr6[i]]; 
  }
}
console.log(arr6); 
//16
let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
const sum3 = Object.values(obj).flatMap(innerObj => Object.values(innerObj)).reduce((acc, num) => acc + num, 0);
console.log(sum3);
//17
let text = "hello gfgfg fdfdf";
let words1 = text.split(" ");
let wordsS = words1.filter(word => word.toLowerCase().startsWith('a'));
console.log(wordsS);
//18
let numbers = [10, 15, 22, 30, 42, 50, 61, 75];
let number1 = numbers.filter(number => number % 5 === 0);
console.log(number1);
//19
let numbers1 = [10, 25, 30, 42, 50, 61, 70, 82, 100];
let numbeZero = numbers1.filter(number => number.toString().includes('0'));
console.log(numbeZero);
//20
let number = 35142;
let sortedNum = number.toString().split('').sort().join('');
console.log(sortedNum);
let obj1 = {
	1: {
	  1: {
		1: 111,
		2: 112,
		3: 113,
	  },
	  2: {
		1: 121,
		2: 122,
		3: 123,
	  },
	},
	2: {
	  1: {
		1: 211,
		2: 212,
		3: 213,
	  },
	  2: {
		1: 221,
		2: 222,
		3: 223,
	  },
	},
	3: {
	  1: {
		1: 311,
		2: 312,
		3: 313,
	  },
	  2: {
		1: 321,
		2: 322,
		3: 323,
	  },
	},
  };
function sumObj(obj1) {
	let sum = 0;
  
	for (let key in obj1) {
	  if (typeof obj1[key] === 'object') {
		sum += sumObj(obj1[key]);  
	  } else {
		sum += obj1[key];  
	  }
	}
	return sum;
  }
let totalSum = sumObj(obj1);
console.log(totalSum);
//21
let numbe = [123, 45, 6789, 56, 1000, 999, 42, 9876];
let filtNumbers = numbe.filter(numbe => numbe.toString().length <= 3);
console.log(filtNumbers);
//22
let nume = 12345;
let allDig = nume.toString().split('').every(digit => parseInt(digit) > 0);
console.log(allDig);
//23 
let data = [
	{
	  1: 11,
	  2: 12,
	  3: 13,
	},
	{
	  1: 21,
	  2: 22,
	  3: 23,
	},
	{
	  1: 24,
	  2: 25,
	  3: 26,
	},
  ];
  let sume = data.reduce((sum, obj) => {
	for (let key in obj) {
	  sum += obj[key];
	}
	return sum;
  }, 0);
  console.log(sume);
//24 
let str1 = "banana apple cherry orange grape";
let sortedStr = str1.split(' ').sort().join(' ');
console.log(sortedStr);
//25 
let nume1 = 36;
function getDiv(nume1) {
  let div = [];
  for (let i = 1; i <= nume1; i++) {
    if (nume1 % i === 0) {
      div.push(i);
    }
  }

  return div;
}
let div = getDiv(num);
console.log(div);
//26
let str2 = "10, 20, 30, 5, 50, 40";
let maxNum = Math.max(...str2.split(',').map(num => parseInt(num.trim())));
console.log(maxNum);
//27
let numbe1 = [1, 15, 2, 123, 9, 8];
let result = [];
for (let i = 0; i < numbe1.length; i++) {
  result.push(numbe1[i]); 
  if (numbe1[i] >= 0 && numbe1[i] <= 9) {
    result.push(numbe1[i]); 
  }
}
console.log(result);
//28
let str3 = "hello world how are you";
let worde = str3.split(' ');
let resu = worde.map(worde => {
  if (worde.length > 0) {
    return worde.slice(0, -1) + worde.slice(-1).toUpperCase();
  }
  return worde;
}).join(' ');
console.log(resu);
//29
let data1 = [
	{
	  1: [1, 2, 3],
	  2: [1, 2, 3],
	  3: [1, 2, 3],
	},
	{
	  1: [1, 2, 3],
	  2: [1, 2, 3],
	  3: [1, 2, 3],
	},
	{
	  1: [1, 2, 3],
	  2: [1, 2, 3],
	  3: [1, 2, 3],
	},
  ];
let sum2 = data1.reduce((sum, obj) => {
	for (let key in obj) {
	  sum += obj[key].reduce((arraySum, num) => arraySum + num, 0);
	}
	return sum;
  }, 0);
console.log(sum2);
//30
let num3 = [13, 23, 33, 43, 53]; 
let three = num3.every(num => num.toString().includes('3'));
console.log(three); 
//31
let str4 = 'kebab-case';
let str5 = str4.replace('-', '_');
let str6 = str5.replace('kebab', 'snake');
console.log(str6);
//32
let str7 = str6.replace('snake_case', 'camelCase');
console.log(str7);
//33
let str8 = str6;
console.log(str8);
//34
let resu1 = [];
for (let i = 0; i <= 3; i++) {
  resu1.push([1, 2, 3]);
}
console.log(resu1);
//35
function digStr(str) {
	return [...str].every(char => char >= '0' && char <= '9');
}
console.log(digStr("123456")); 
console.log(digStr("12fdf")); 
//36
function digStr2(str) {
	return [...str].every(val => '02468'.includes(val));
}
console.log(digStr2("24680")); 
console.log(digStr2("2468a")); 
//37
function sumOfDig(num) {
	return num.toString()
			  .split('')
			  .map(Number)
			  .reduce((sum, digit) => sum + digit, 0);
}
function findNumber() {
	let result = [];
	for (let i = 1; i <= 1000; i++) {
	  if (sumOfDig(i) === 13) {
		result.push(i);
	  }
	}
	return result;
}
let numbe2 = findNumber();
console.log(numbe2);
//38
let ar = [1, 2, 3, 4, 5];
let res2 = ar.flatMap(item => [item, item]);
console.log(res2);
//39
function filterDivisors(arr, num) {
	return arr.filter(item => num % item === 0); 
}
let ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numb2 = 12;
let res3 = filterDivisors(ar1, numb2);
console.log(res3);
//40
let ar2 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
let res4 = ar2.flat(); 
console.log(res4);
console.log('Task 4. 1-10');
//1
function week(date) {
	const daysOfWeek = [
	  'Воскресенье', 
	  'Понедельник', 
	  'Вторник', 
	  'Среда', 
	  'Четверг', 
	  'Пятница', 
	  'Суббота'
	];
	
	const dayIndex = new Date(date).getDay(); 
	return daysOfWeek[dayIndex]; 
}
console.log(week('2024-12-14')); 
//2
function second(seconds) {
	const secondsInDay = 86400; 
	return Math.floor(seconds / secondsInDay); 
}
console.log(second(1300000)); 
//3
function truncateString(length, str) {
	return str.slice(0, length); 
}
console.log(truncateString(5, "Hello, world!")); 
//4
function zodiac(date) {
	const month = date.getMonth() + 1; 
	const day = date.getDate(); 
	if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Овен';
	if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Телец';
	if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Близнецы';
	if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Рак';
	if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Лев';
	if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Дева';
	if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Весы';
	if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Скорпион';
	if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Стрелец';
	if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Козерог';
	if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Водолей';
	if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Рыбы';
}
let date = new Date('2024-12-14');  
console.log(zodiac(date));  
//5
function sumOfDivisors(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
	  if (n % i === 0) {  
		sum += i;  
	  }
	}
	
	return sum;  
}
console.log(sumOfDivisors(6));  
//6
function sumOf(n) {
	return String(Math.abs(n)) 
	  .split('') 
	  .reduce((sum, digit) => sum + Number(digit), 0); 
  }
console.log(sumOf(123));  
//7
function isYear(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
	  return true; 
	} else {
	  return false;  
	}
}
console.log(isYear(2024)); 
console.log(isYear(1900)); 
//8
function last() {
	const currentYear = new Date().getFullYear();
	const startYear = currentYear - 100;  
  
	const leapYears = [];
	for (let year = startYear; year <= currentYear; year++) {
	  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		leapYears.push(year);  
	  }
	}
	return leapYears;
}
console.log(last());
//9
function days() {
	const currentDate = new Date(); 
	const currentMonth = currentDate.getMonth();  
	const currentYear = currentDate.getFullYear();  
	const nextMonth = new Date(currentYear, currentMonth + 1, 1);
	const timeDifference = nextMonth - currentDate;
	const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
	return daysRemaining;  
}
console.log(days());  
//10
function getDays() {
	const daysOfWeek = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	const currentDate = new Date();
	const currentDay = currentDate.getDay(); 
	const prevDay = (currentDay === 0) ? 6 : currentDay - 1;  
	const nextDay = (currentDay === 6) ? 0 : currentDay + 1;  
	return {
	  prev: daysOfWeek[prevDay],
	  curr: daysOfWeek[currentDay],
	  next: daysOfWeek[nextDay]
	};
}
console.log(getDays());  
//11
function removeDuplicates(arr) {
	return [...new Set(arr)];  
}
console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 1, 2])); 
//12
function removeDuplicatesMoreThanThree(arr) {
	const count = {};  
	arr.forEach(item => {
	  count[item] = (count[item] || 0) + 1;
	});
	return arr.filter(item => count[item] <= 3);
}
console.log(removeDuplicatesMoreThanThree([1, 2, 3, 4, 4, 5, 6, 1, 2, 4, 4, 4])); 
//13
function removeAdjacentDuplicates(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] !== arr[i - 1]) {
		result.push(arr[i]);
	  }
	}
	return result;
}
console.log(removeAdjacentDuplicates([1, 1, 2, 2, 3, 3, 3, 4, 4, 5])); 
//14
function getMinMax(arr) {
	return {
	  max: Math.max(...arr), 
	  min: Math.min(...arr) 
	};
}
console.log(getMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
//15
function countDivisors(num) {
	let count = 0;
	for (let i = 1; i <= num; i++) {
	  if (num % i === 0) {
		count++;  
	  }
	}
	return count;  
}
console.log(countDivisors(12));  
//16
function getDivisors(num) {
	const divisors = [];  
	for (let i = 1; i <= num; i++) {
	  if (num % i === 0) {
		divisors.push(i); 
	  }
	}
	return divisors; 
}
console.log(getDivisors(12));  
//17
function isPrime(num) {
	if (num <= 1) {
	  return false; 
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
	  if (num % i === 0) {
		return false;  
	  }
	}
	return true;  
}
console.log(isPrime(11));  
console.log(isPrime(15));  
//18
function removeEvenDigits(num) {
	const numStr = num.toString();
	const result = numStr.split('').filter(digit => parseInt(digit) % 2 !== 0).join('');
	return result ? parseInt(result) : 0;
}
console.log(removeEvenDigits(123456));  
//19
function generateRandomArray(N, min, max) {
	const result = [];
	for (let i = 0; i < N; i++) {
	  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	  result.push(randomNumber);
	}
	return result;
}
console.log(generateRandomArray(5, 1, 10)); 
//20
function secondLargest(arr) {
	const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
	if (uniqueArr.length > 1) {
	  return uniqueArr[1];
	}
	return null;
}
console.log(secondLargest([3, 5, 7, 5, 1])); 
//21
function generateRange(min, max) {
	const result = [];
	for (let i = min; i <= max; i++) {
	  result.push(i);
	}
	return result;
}
console.log(generateRange(3, 8)); 
//22
function generateRandomLetters(length) {
	const letters = [];
	for (let i = 0; i < length; i++) {
	  const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
	  letters.push(randomChar);
	}
	return letters;
}
console.log(generateRandomLetters(5));  
console.log(generateRandomLetters(10)); 
//23
function isValidDate(dateStr) {
	const [year, month, day] = dateStr.split('-').map(Number);
	const date = new Date(year, month - 1, day);
	return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}
console.log(isValidDate("2024-02-29")); 
console.log(isValidDate("2023-02-29"));  
//24
function generateRandomString(length) {
	let result = '';
	for (let i = 0; i < length; i++) {
	  const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	  result += randomChar;
	}
	return result;
}
console.log(generateRandomString(10));
//25
function getInitials(str) {
	return str
	  .split(' ')            
	  .map(word => word.charAt(0).toUpperCase()) 
	  .join('');                    
}
console.log(getInitials("hello world")); 
//26
function replaceWithDivisors(arr) {
	return arr.map(num => {
	  const divisors = [];
	  for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
		  divisors.push(i);
		}
	  }
	  return divisors;
	});
  }
console.log(replaceWithDivisors([6, 12, 15])); 
//27
function sortWordsInText(text) {
	return text
	  .split(' ')             
	  .sort()                 
	  .join(' ');             
}
console.log(sortWordsInText("banana apple cherry date"));
//28
function findCommonElements(arr1, arr2) {
	return arr1.filter(element => arr2.includes(element)); 
}
console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));
//29
function getNextElement(arr, element) {
	const index = arr.indexOf(element);
	if (index === -1) {
	  return null; 
	}
	return arr[(index + 1) % arr.length];
} 
let ar3 = [1, 2, 3, 4, 5];
console.log(getNextElement(ar3, 1)); 
//30
function getRandomElement(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length); 
	return arr[randomIndex];  
} 
let ar4 = [1, 2, 3, 4, 5];
console.log(getRandomElement(ar4));  
//31
function sumd(...numbers) {
	return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumd(1, 2, 3));
//32
function findMaxInSubarrays(arr) {
	return arr.map(subarray => Math.max(...subarray));
  }
  const numbe5 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(findMaxInSubarrays(numbe5));  
//33
function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}
const numbe6 = [1, 2, 3, 4, 5];
console.log(shuffleArray(numbe6));  
//34
function isPrime(num) {
	if (num <= 1) return false; 
	for (let i = 2; i <= Math.sqrt(num); i++) {  
	  if (num % i === 0) return false; 
	}
	return true;
}
  function getPrimeDivisors(num) {
	const primeDivisors = [];
	for (let i = 1; i <= num; i++) {
	  if (num % i === 0 && isPrime(i)) {  
		primeDivisors.push(i);
	  }
	}
	return primeDivisors;
}
console.log(getPrimeDivisors(28));  