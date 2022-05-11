const task = document.getElementById('task'); //выбираем input
const form = document.getElementById('enterTask'); //выбираем форму для ввода
const todoList = document.getElementById('out');


function logSubmit(e) {
    e.preventDefault(); 
    if (task.value.length > 0) {
        addTodo();   
    }
}

//функция добавления элемента списка
function addTodo() {
    var todo = task.value; //получаем значение из input
    task.value = ''; //очищаем поле ввода
    
    var counter = todoList.children.length+1;  //длина списка дел
    console.log(counter);
    
    var item = document.createElement('span');  //создаем wrapper для todo и кнопки удаления
    todoList.insertAdjacentElement('afterbegin', item);  //вставляем его в блок для вывода
    item.setAttribute('id', 'item_'+counter);


    var del = document.createElement('button');  //создаем кнопку удаления
    del.innerHTML = 'x'; //заполняем ее значением
    item.insertAdjacentElement('afterbegin', del); //вставляем ее в созданный wrapper
    
    var todoTask = document.createElement('p');  //создаем текстовое поле
    todoTask.innerHTML = todo;  //заполняем текстовое поле значением из поля для ввода
    item.insertAdjacentElement('afterbegin', todoTask);  //вставляем текстовое поле в блок вывода

    delTodo(del);
}

//функция удаления по нажатию на элемент
function delTodo(element) {
    element.addEventListener('click', (event) => {
        element.parentElement.remove();
        event.stopPropagation();
    })
}

todoList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'P') {
        ev.target.classList.toggle('crossed');
        ev.target.parentElement.classList.toggle('dye'); 
    }
    
}, false)


form.addEventListener('submit', logSubmit); //ловим событие отправки form