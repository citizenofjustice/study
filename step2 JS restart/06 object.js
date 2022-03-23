const person = {
    name: 'Andrey',
    age: 26,
    isProgrammer: true,
    'complex_key': 'Complex value',
    ['key_' + (1+3)]: 'computed key',
    languages: ['ru', 'en', 'ua'],
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log('this typeOf', this)
        console.info('information about: ', this.name)
    }
}

// console.log(person.name)
// console.log(person['age'])
// console.log(person['complex_key'])
// console.log(person['key_4'])
// person.greet()

// delete person['key_4']
// person.age++
// person.languages.push('de')
// console.log(person)

// const {name, age: personAge, languages} = person
// console.log(name, personAge, languages)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key)
//         console.log('value:', person[key])
//     }
// }

// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log('key', key)
//     console.log('value', person[key])
// })

// context
// person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach( key => {
            console.log(`"${key}": ${this[key]}`)
        })
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('---------- Start ----------')
        }
        Object.keys(this).forEach( (key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('--------------------')
            }
        })
        if (bottom) {
            console.log('---------- End ----------')
        }
    }
}

// logger.keys(person)
// logger.keysAndValues.call(logger)
// logger.keysAndValues.call(person)
// logger.keysAndValues.call({a: 1, b: 2, c: 5})
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)

// logger.withParams.call(person, true, true, true)b
logger.withParams.apply(person, [true, true, true])