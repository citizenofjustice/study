// const num = 42; //целое число
// const float = 42.42; //десятичное число
// const pow = 10e3;
// console.log(pow);
// console.log('Максимальный int', Number.MAX_SAFE_INTEGER);
// console.log('Math.pow', Math.pow(2, 53)-1);
// console.log('Минимальный int', Number.MIN_SAFE_INTEGER);
// console.log('Максимальный значение', Number.MAX_VALUE);
// console.log('Минимальное значение', Number.MIN_VALUE);
// console.log('+ бесконечность', Number.POSITIVE_INFINITY, '2/0', 2/0);
// const weird = 0/'string'
// console.log('NaN', weird) //Not a number
// console.log('weird', Number.isNaN(weird))
// console.log('42 это NaN?', Number.isNaN(42))
// console.log('бесконечноть имеет финальное значение?', Number.isFinite(Infinity))
// console.log('42 конечное число?', Number.isFinite(42))

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number.parseInt(stringFloat) + 2)
// console.log(+stringInt + 2)
// console.log(+stringFloat + 2)
// console.log(Number.parseFloat(stringFloat) + 2)

// console.log(0.4 + 0.2)  //0.6
// console.log((4/10) + (2/10))  //0.6
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))  //0.6


    //BigInt
// console.log(typeof 6467831689454784564684651658n)  // n в конце значит BigInt
// console.log(6467831689454784564684651658n - 646783168945478456468465165n)
// console.log(5n / BigInt(2))  // =2.5n Но получится 2n так как это bigINT

    //Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(parseFloat(Math.PI.toFixed(2)))
// console.log(Math.sqrt(25))  //квадратный корень корень
// console.log(Math.pow(2, 5))  //возведение в степень
// console.log(Math.abs(-42))  //модуль числа
// console.log(Math.max(12, 54, 669, 1, -845))  //поиск максимального
// console.log(Math.min(12, 54, 669, 1, -845))  //поиск минимального
// console.log(Math.floor(4.9))  //округление в меньшую сторону
// console.log(Math.ceil(4.9))  //округление в большую сторону
// console.log('4.9 ', Math.round(4.9), '  4.2   ', Math.round(4.2), '  4.5   ', Math.round(4.5))  //если больше или равно .5 то округляет в большую сторону
// console.log(Math.trunc(4.9))  //возврат целой части числа
// console.log(Math.random())
    
    //Использование Math
// function getRandomBetween(min, max) {
//     let rng = Math.floor(Math.random() * (max - min + 1) + min)
//     return rng
// }

// console.log(getRandomBetween(0, 10))