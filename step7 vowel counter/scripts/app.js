$(document).ready(function(){

    //функция для передачи текста
    $("button.button").click(function(x){
        // if ($("input:not(:empty)")) {
        //     $("button").preventDefault();
        //     // console.log('go on');
        // }
        
        // console.log(text);
        
        var text = $("textarea.text").val();
        var words = text.split(" ");
        var sentence = text.split(/\. + \! + \? /g); //+[\! ]+[\? ]
        console.log(sentence);
        
        if ($("#symbols").is(":checked")) {
            $("textarea.result").val("машина насчитала " + text.length + " символов");
        }
        
        if ($("#words").is(":checked")) {
            $("textarea.result").val("машина насчитала " + words.length + " слов");
        }
        
        if ($("#sentence").is(":checked")) {
            x.preventDefault();
            $("textarea.result").val("машина насчитала " + sentence.length + " предложений");
        }
        
        

    })

 });

