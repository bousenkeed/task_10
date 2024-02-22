// 1. Стрелочные функции
// Преобразуйте обычную функцию в стрелочную функцию.

const greet = name => console.log(`Hello, ${name}!`);
greet('Andrey');

// Используйте стрелочную функцию в методе массива (const numbers = [1, 2, 3, 4] )map 
// для преобразования массива чисел в массив их квадратов. 
const numbers = [1, 2, 3, 4]
const powerOfNumbers = numbers.map((num) => num * num);

// Создайте стрелочную функцию без аргументов, которая возвращает строку "Hello, World!".
const logFunc = () => console.log("Hello, World!");

// 2. Функции с аргументом по умолчанию
// Напишите функцию с аргументом по умолчанию, которая принимает имя и приветствует человека. 
// Если имя не передано, используйте "Гость".

const helloFunc = (name = 'Гость') => console.log(`Привет, ${name}!`);

// Создайте функцию для вычисления стоимости заказа с учетом скидки.
// Скидка должна быть аргументом по умолчанию.

const discountFunc = (price, discount = 20) => price - (price * discount / 100);

// Разработайте функцию для подсчета объема цилиндра с аргументом по умолчанию 
// для высоты (Сама формула расчета Math.PI * radius * radius * height).

const calcOfCylinderVolume = (radius, height = 10) => Math.PI * radius * radius * height;

// 3. Функции с неопределённым числом аргументов
// Создайте функцию, которая принимает неопределенное количество чисел и возвращает их сумму. 
// Используйте метод reduce()

const calcNums = (...nums) => {
    const sum = nums.reduce((accumulator, num) => accumulator + num, 0);
    return sum;
};

// Напишите функцию для объединения нескольких строк в одну с использованием разделителя, 
// который также передается в функцию.
function stringConcatenation(separation, ...strings) {
    return strings.join(separation);
};

// Функция для нахождения максимального числа из произвольного количества аргументов. 
// Метод  Math.max()

const maxNum = (...nums) => Math.max(...nums);

//  Функция для создания объекта, где каждый аргумент представляет собой пару ключ-значение. 
// Метод Object.fromEntries

function createObject (...paras) {
    return Object.fromEntries(paras);
}
console.log(createObject(['ключ1', 'значение1'], ['ключ2', 'значение2']));

// 4. Object.keys, Object.values, Object.entries
// Используйте Object.keys для получения списка всех ключей объекта и выведите его в консоль.  
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));

// С помощью Object.values создайте массив всех значений свойств объекта.
const valuesArray = Object.values(obj);

// Используйте Object.entries для итерации по объекту и вывода пар ключ-значение.

console.log(Object.entries(obj));


// Напишите функцию, которая принимает объект и возвращает объект, где ключи и значения 
// поменяны местами, используя Object.entries и Object.fromEntries

function change (object) {
    const newObject = Object.fromEntries(Object.entries(object).map((el) => el.reverse()));
    return newObject;
};