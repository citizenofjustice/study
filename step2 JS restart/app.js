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
function greet(name) {
    console.log('Привет - ' + name)
}
greet('Ия')

const arrow = (name) => {
    console.log('Привет - ' + name)
}
arrow('Андрей')