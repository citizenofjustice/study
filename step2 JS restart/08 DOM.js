//DOM

//alert('1') = window.alert('1')

const heading = document.getElementById('hello')


// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
const heading2 = document.querySelector('h2') // querySelector возвращает всегда один элемент
console.log(heading2);
// console.dir(heading2)

const heading3 = heading2.nextElementSibling
console.log(heading3);

const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading4 = h2List[h2List.length - 1]
console.log(heading4)

setTimeout( () => {
    addStylesTo(heading, 'JavaScript... ', 'orange', '3rem')
}, 1000)
setTimeout( () => {
    addStylesTo(heading2, 'нуууу ', 'yellow', '1rem')
}, 1500)

const link = heading4.querySelector('a')
link.addEventListener('click', () => {
    event.preventDefault()
    console.log('ive got the click', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})
setTimeout( () => {
    addStylesTo(link, 'держиииись)', 'white', '3rem')
}, 2000)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'pink'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    //falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/ru/docs/Web/Events
heading.onclick = () => {
    if (heading.style.color === 'orange') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else { 
        heading.style.color = 'orange'
        heading.style.backgroundColor = 'pink'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'orange') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else { 
        heading2.style.color = 'orange'
        heading2.style.backgroundColor = 'pink'
    }
})