    //массивы
const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Maxim', budget: 1800}
]
console.log(cars)
const fib = [1, 1, 2, 3, 5, 8, 13]

//функция
function addItemToEnd() {
}

// метод
// cars.push('Renault')
// console.log('добавили в массив элемент', cars)
// cars.shift()
// console.log('убираем первый элемент массива', cars)
// cars.unshift('Volga')
// console.log('добавляем первым элементом массива', cars)

// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

console.log(cars.reverse())


// Задача 1
// const text = 'Привет, мы изучаем ЧС'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

// let findedPerson
// for (const person of people) {
//     console.log(person)
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log('поиск через for', findedPerson)


// const index = cars.indexOf('BMW')
// console.log(index)

// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })
// console.log(people[index])

// const person = people.find(function(person) {
//     return person.budget === 3500
// })
// console.log(person)

// const person = people.find(person => person.budget === 3500)  // сокращенная фукция
// console.log(person)

// console.log(cars.includes('Mazda')) //boolean

// const upperCaseCars = cars.map(car => {  //возведение содержимого сожержимого массива в верхний регистр
//     return car.toUpperCase(cars)
// })
// console.log(upperCaseCars)
// console.log(cars)

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// const pow2Fib = fib.map(pow2) //возвести в квадрат элементы массива
// console.log(pow2Fib)
// const sqrtFib = pow2Fib.map(sqrt) //квадратный корень элементов массива
// console.log(sqrtFib)

// const filteredNumbers = pow2Fib.filter(num => num > 20)  //элементы массива > 20
// console.log(filteredNumbers)

// const allBudget = people
//     .filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//     acc += person.budget
//     return acc
// }, 0)
// console.log(allBudget)