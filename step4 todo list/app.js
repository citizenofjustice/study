const task = document.getElementById('task'); //выбираем input
const form = document.getElementById('enterTask'); //выбираем форму для ввода
const todoList = document.getElementById('out');
var currentItem = 1;
function logSubmit(e) {
    e.preventDefault(); 
    if (task.value.length > 0) {
        addTodo();   
    }
}

function addTodo() {
    var todo = task.value; //получаем значение из input
    task.value = ''; //очищаем поле ввода
    
    for (let i=0; i < 10; i++) {
        currentItem = currentItem + 1;
        var item = document.createElement('span');  //создаем wrapper для todo и кнопки удаления
        todoList.insertAdjacentElement('afterbegin', item);  //вставляем его в блок для вывода
        item.id = 'item'+currentItem;
        console.log(item.id);

        var del = document.createElement('button');  //создаем кнопку удаления
        del.innerHTML = 'x'; //заполняем ее значением
        item.insertAdjacentElement('afterbegin', del); //вставляем ее в созданный wrapper
        
        var todoTask = document.createElement('p');  //создаем текстовое поле
        todoTask.innerHTML = todo + ' ';  //заполняем текстовое поле значением из поля для ввода
        item.insertAdjacentElement('afterbegin', todoTask);  //вставляем текстовое поле в блок вывода
    }
    // function delTodo() {
    //     var parent = item.parentNode;
    // }
}


form.addEventListener('submit', logSubmit); //ловим событие отправки form