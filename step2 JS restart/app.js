    //1 переменные
// const lastName = 'Krasnov';
// const firsName = 'Andrey';
// const age = 26
// const isProgrammer = true; //boolean

    //2 ввод/вывод данных
// console.log('Age of ' + firsName + ', is ' + age);
// alert('Age of ' + firsName + ', is ' + age);
// const lastName = prompt('Введите вашу фамилию');
// console.log(lastName);

    //3 математические операции
// let currentYear = 2022;
// const birthYear = 1996;
// const age = currentYear - birthYear;
// console.log(age)


    //4 типы данных
// const isProgrammer = true;
// const firstName = 'Andrey';
// const age = 26
// let x = 
// console.log(typeof isProgrammer);
// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof x);
// console.log(null);

    //5 приоритет операторов
// const fullAge = 26;
// const birthYear = 1996;
// const currentYear = 2022;

// const isFullAge = (currentYear - birthYear) >= fullAge; // > < >= <= это операторы сравнений
// console.log(isFullAge);

    //6 условные операторы
// let points = prompt('Введите баллы полученные в тесте по английскому:');
// typeof points == Number;
// let grade;
// if (points < 35) {
//     grade = 'не удовлетворительно'
//     console.log('Ваша оценка за экзамен: ' + grade);
// } else if (points <= 50) {
//     grade = 'удовлетворительно'
//     console.log('Ваша оценка за экзамен: ' + grade);
// } else if (points <= 75) {
//     grade = 'хорошо'
//     console.log('Ваша оценка за экзамен: ' + grade);
// } else if (points <= 100) {
//     grade = 'отлично'
//     console.log('Ваша оценка за экзамен: ' + grade);
// } else {
//     console.log('Ошибка. Вы ввели некорректное значение. Введие число набранных баллов в тесте (от 0 до 100).')
// }

    //условия с типом boolean
// let isReady = true;
// if (isReady) {
//     console.log('Готово');
// } else {
//     console.log('Не готово');
// }
// isReady = false;
//     //тернарное выражение ~ эквивалент условия выше
// isReady ? console.log('Готово') : console.log('Не готово')

    //7 булевая логика
    // && (логическое И), || (логическое ИЛИ), ! (логическое НЕ)
// console.log(true && true); // true, т.к. оба true
// console.log(false && true); // false, т.к. есть хотя бы один false

// console.log(false || true);  // true, т.к. есть хотя бы один true
// console.log(false || false); // false, т.к. оба

// console.log(!true); // НЕtrue = false
// console.log(!!true); // НЕНЕtrue - двойное отрицание = true

    //8 функции
// function calculateYear(year) {
//     return(2022 - year);
// }
// const yearsGoneBy = calculateYear(1996);
// console.log(yearsGoneBy)


// function logInfoAbout(fullName, year) {
//     let Age = calculateYear(year);
//     if (Age > 0) {
//         console.log(fullName + 'c вашего рождения проло ' + Age + ' лет.')
//     }
//     else {
//         console.log('Этот человек находится в будущем')
//     }
// }
// logInfoAbout('Краснов Андрей ', 1996);
// logInfoAbout('Семенова Ия ', 1999);
// logInfoAbout('Краснова Нажежда ', 1968);
// logInfoAbout('Краснова Нажежда ', 2968);

    //9 массивы
// const cars = ['mazda', 'renault', 'suzuki']; //Корректный вариант
// //const cars = new Array['mazda', 'renault', 'suzuki']; // более полный вариант
// console.log(cars);
// console.log(cars.length);
// console.log(cars[2]);
// cars[0]='porshe';
// cars[3]='mazda';
// console.log(cars);

    //10 итерация массивов - циклы
// const cars = ['porshe', 'mazda', 'renault', 'suzuki']; //Корректный вариант
// for (let i = 0; i < cars.length; i++) {
//     console.log(i);
//     console.log(cars[i]);
// }
// for (let car of cars) {
//     console.log(car);
// }

    //11 объекты
const person = {
    firstName: 'Andrey',
    lastName: 'Krasnov',
    year: 1996,
    languages: ['RU', 'EN', 'UA', 'DE'],
    hasFiance: true,
    greet: function() {
        console.log('greet')
    }
}

console.log(person.year);
person.greet()