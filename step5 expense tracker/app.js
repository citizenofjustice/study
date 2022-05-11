const name = document.getElementsByClassName('name');
const date = document.getElementsByClassName('date');
const amount = document.getElementsByClassName('amount');

function logSubmit(e) {
    e.preventDefault(); 
    addExpense();
}

function addExpense() {
    
}

form.addEventListener('submit', logSubmit); //ловим событие отправки form