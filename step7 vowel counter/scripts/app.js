$(document).ready(function(){

    //функция для передачи текста
    $("button.button").click(function(){
        var text = $("textarea.text").val();
        // return text
        $("textarea.result").append(text);
        
    })

    //функция подсчета символов
 });