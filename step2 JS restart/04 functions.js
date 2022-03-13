    //1 функции
    //Function declaration - можно обращаться из любого места в коде
// function greet(name) {
//     console.log('Привет - ' + name)
// }
// greet('Ия')


    //Function expression - к функции можно обратиться только в случае если она используется только после ее объявления
//greet2('Владимир') // не работает т.к. функция еще не объявлена
// const greet2 = function greet2(name) {
//     console.log('Привет - ' + name)
// }
// greet2('Андрей')

// console.log(typeof greet) // позволяет проверить тип несмотря на то что такого типа данных как "функция" нет
// console.dir(greet)

    //2 Анонимные функции
// let counter = 0
// const interval = setInterval( function() {
//     if (counter===10) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)  //каждую 1000мс = 1 сек. выводит счетчик + 1


    //3 Стрелочные функции
// function greet(name) {
//     console.log('Привет - ' + name)
// }
// greet('Ия')

// const arrow = (name, age) => {
//     console.log('Привет - ' + name, age)
// }
// const arrow2 = (name) => console.log('Привет - ' + name)

// arrow('Андрей', 26)
// arrow2('Андрей2')

// const pow2 = (num) => num ** 2

// console.log(pow2(30))


    //4 Параметры по умолчанию
// const sum1 = (a, b) => a + b
// console.log('sum1 =', sum1(2)) // не хватает параметра в функии, поэтому результат NaN

// const sum2 = (a, b = 0) => a + b  //задаем параметру b значение по умолчанию 
// console.log('sum2 =', sum2(2))

// const sum3 = (a, b = a * 2) => a + b  //задаем параметру b значение по умолчанию 
// console.log('c параметром по умолчанию. sum3 =', sum3(2))
// console.log('с перезацписанным параметром b. sum3 =', sum3(2, 8))

// function sumAll(...all) {
//     console.log(all)
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1,2,3,4,5,6,7)
// console.log(res)


    //Замыкание
// function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName)
//     }
// }
// const logWithLastName = createMember('Андрей')
// console.log(logWithLastName(' Andrey'))
// console.log(logWithLastName(' Krasnov'))