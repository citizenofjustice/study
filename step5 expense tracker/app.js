const expenseName = document.getElementById('name');
const expenseDate = document.getElementById('date');
const expenseAmount = document.getElementById('amount');
const form = document.getElementById('textFields');
const expenseTable = document.getElementById('resultTable');
const tableTitles = document.querySelector('.titleRow');


function logSubmit(e) {
    e.preventDefault(); 
    addExpense();
}

//функция изменения формата даты (можно улучшить чтобы возвращался тип date)
function formatDate(x) {
    var parts = x.split("-");
    var ddMmYyyy = new String(parts[2]+'.'+parts[1]+'.'+parts[0]);
    return(ddMmYyyy);
}

function addExpense() {
    var table = expenseTable.lastChild.children.length;
    console.log(table);


    // ready(table);
    // emptyMsg.parentNode.remove();
    var newRow = expenseTable.insertRow(-1);
    var column1 = newRow.insertCell(0);
    var column2 = newRow.insertCell(1);
    var column3 = newRow.insertCell(2);
    column1.setAttribute('class', 'nameColumn');
    column2.setAttribute('class', 'dateColumn');
    column3.setAttribute('class', 'amountColumn');
    
    column1.innerHTML = expenseName.value;
    column2.innerHTML = new String (formatDate(expenseDate.value));
    column3.innerHTML = expenseAmount.value;


    var del = document.createElement('span');  //создаем кнопку удаления
    del.innerHTML = '<i class="material-symbols-outlined">delete</i>'; //заполняем ее значением
    del.setAttribute('class', 'material-symbols-outlined');
    newRow.insertAdjacentElement('beforeend', del)
    // var row = document.createElement('tr');
    // row.setAttribute('id', 'row'+rowCounter);

    // var column1 = document.createElement('td');
    // var column2 = document.createElement('td');
    // var column3 = document.createElement('td');
    // column1.setAttribute('class', 'nameColumn');
    // column2.setAttribute('class', 'dateColumn');
    // column3.setAttribute('class', 'amountColumn');

    // expenseTable.insertAdjacentElement('beforeend', row);
    // row.insertCell

    // expenseName.value = column1;

}

function ready() {
    if (tableTitles.parentNode.childElementCount == 1) {
        var longRow = expenseTable.insertRow(-1);
        var emptyMsg = longRow.insertCell(0);
        emptyMsg.setAttribute('colspan', '3');
        emptyMsg.innerHTML = '<p class="isCentered">В данный момент добавленных расходов нет, введите показатели выше и добавьте их в таблицу</p>';
    }
    
}

expenseTable.addEventListener("DOMContentLoaded", ready());
form.addEventListener('submit', logSubmit); //ловим событие отправки form