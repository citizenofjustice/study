const expenseName = document.getElementsByClassName('name');
const expenseDate = document.getElementsByClassName('date');
const amount = document.getElementsByClassName('amount');
const form = document.getElementsByClassName('textFields');

function logSubmit(e) {
    e.preventDefault(); 
    if (task.value.length > 0) {
        addExpense()
    }
}

function addExpense() {
    console.log(expenseName.value);
    console.log(expenseDate.value);
    console.log(expenseAmount.value);

}

form.addEventListener('submit', logSubmit); //ловим событие отправки form