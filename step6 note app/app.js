const noteInput = document.getElementById('noteInput');
const noteGrid = document.querySelector('.noteGrid');
// const tmpDiv = document.querySelector('.tmpDiv');
const form = document.querySelector('.noteText');


function elastic(element) {
    element.style.height = '5px';
    element.style.height = (element.scrollHeight)+"px";
    var currentHeight = element.style.height;   
    if (currentHeight == '54px') {
        element.style.overflowY = "hidden";
    } else element.style.overflowY = "scroll"; 
}

function showfullNote(x) {
    var textParent = x.parentElement;
    var text = textParent.parentNode;
    var popupNote = text.querySelector('.overflow-ellipsis').innerHTML;
    console.log(popupNote);
    
    var back = document.body.style;
    back.backgroundColor = '#c0c0c0';
    back.opacity = '0.5';
    back.
}

function addNote() {
    if (noteGrid.parentElement.firstElementChild != noteGrid) {
        noteGrid.parentElement.firstElementChild.remove()
    }
    //создаем общий блок для заголовка и текста
    var newNote = document.createElement('div');
    newNote.setAttribute('class', 'tmpDiv');
    noteGrid.insertAdjacentElement('beforeend', newNote);
    noteGrid.style.padding = '20px';

    //создаем заголовок
    var newP = document.createElement('p');
    newNote.insertAdjacentElement('beforeend', newP);
    newP.style.textAlign = 'center';
    newP.innerHTML = 'Заметка №'+noteGrid.childElementCount;    
    
    //создаем блок для текста
    var newDiv = document.createElement('div');
    newNote.insertAdjacentElement('beforeend', newDiv);
    
    //создаем тег текста и заполняем его значением
    var shortNote = document.createElement('p');
    shortNote.setAttribute('class', 'overflow-ellipsis');
    newDiv.insertAdjacentElement('beforeend', shortNote);
    shortNote.innerHTML = noteInput.value;
    
    var buttonDiv = document.createElement('div');
    newNote.insertAdjacentElement('beforeend', buttonDiv);
    buttonDiv.setAttribute('class', 'isCentered');

    //создаем кнопку
    var newButton = document.createElement('button');
    buttonDiv.insertAdjacentElement('beforeend', newButton);
    newButton.setAttribute('class', 'popupButton');
    newButton.setAttribute('onclick', 'showfullNote(this)');
    newButton.innerHTML = 'Просмотреть';

    noteInput.value = '';
    noteInput.focus();
}

function logSubmit(x) {
    x.preventDefault(); 
    addNote();
}

function empty() {
    if (noteGrid.nextElementSibling === null) {
        var emptyMsg = document.createElement('p');
        emptyMsg.setAttribute('class', 'emptyMsg');
        noteGrid.insertAdjacentElement('beforebegin', emptyMsg);
        emptyMsg.innerHTML = 'Добавленные заметки отсутствуют, вы можете ввести их через поле выше...';
    }
}

document.addEventListener('DOMContentLoaded', elastic(noteInput));
form.addEventListener('submit', logSubmit, empty());
noteGrid.addEventListener('onclick', showfullNote(this));