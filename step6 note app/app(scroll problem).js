const noteInput = document.getElementById('noteInput');
const noteGrid = document.querySelector('.noteGrid');
const form = document.querySelector('.noteText');
// const sourceHeight = getHeight(noteInput);


function elastic(element) {
    element.style.height = '5px';
    element.style.height = (element.scrollHeight)+"px";
    var sourceHeight = getHeight(element);
    var currentHeight = element.style.height;
    console.log(sourceHeight);
    // var oY = sourceHeight.toString();
    // console.log(oY);
    console.log(currentHeight != sourceHeight);
    console.log(currentHeight);
    console.log(sourceHeight);
    console.log(typeof(currentHeight));
    console.log(typeof(sourceHeight));
    
    
    if (currentHeight === sourceHeight) {
        element.style.overflowY = "hidden";
    }// else element.style.overflowY = "scroll"; 
}

function getHeight(e) {
    return e.style.height;
}

function addNote() {
    //создаем общий блок для заголовка и текста
    var newNote = document.createElement('div');
    newNote.setAttribute('class', 'tmpDiv');
    noteGrid.insertAdjacentElement('beforeend', newNote);

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
    newButton.innerHTML = 'Просмотреть';
}

function logSubmit(x) {
    x.preventDefault(); 
    addNote();
}

// function empty() {
//     if (tableTitles.nextElementSibling === null) {
//         longRow = expenseTable.insertRow(-1);
//         longRow.setAttribute('class', 'longRow');
//         var emptyMsg = longRow.insertCell(0);
//         emptyMsg.setAttribute('colspan', '3');
//         emptyMsg.innerHTML = '<p class="isCentered">В данный момент добавленных расходов нет, введите показатели выше и добавьте их в таблицу</p>';
//     }
// }
// document.addEventListener("DOMContentLoaded", getHeight(noteInput));
document.addEventListener('DOMContentLoaded', elastic(noteInput));
form.addEventListener('submit', logSubmit);