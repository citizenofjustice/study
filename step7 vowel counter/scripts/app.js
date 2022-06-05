$(document).ready(function(){

    //функция для передачи текста
    $("button.button").click(function(x){
        // if ($("input:not(:empty)")) {
        //     $("button").preventDefault();
        //     // console.log('go on');
        // }
        
        // console.log(text);
        
        var consonantsEn = /['bcdfghjklmnpqrstvwxyz']/gmu;
        var consonantsRu = /['бвгджзйклмнпрстфхцчшщ']/gmu;
        var vowelsEn = /['aeiouy']/gmu;
        var vowelsRu = /['аяуюоеёэиы']/gmu;
        
        //текст из текстбокса
        var text = $("textarea.text").val() + ' ';
        // var consonants = ;
        
        var letters = text.match(/(\p{L})/gmu);
        var symbols = text.match(/\S/gm);
        var specialCharacters = text.match(/\p{Sm}|\p{P}/gmu);
        var words = text.match(/(\p{L}+)/gmu);
        var sentence = text.match(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s/gm);

        // подсчет согласных
        if ($("#consonants").is(":checked")) {
            var en = text.match(consonantsEn);
            var ru = text.match(consonantsRu);
            if (en === null) {
                en = 0;
            } else en = en.length;
            if (ru === null) {
                ru = 0;
            } else ru = ru.length;
            x.preventDefault();
            $("textarea.result").val("машина насчитала " + en + " согласных на английском языке и " + ru + " на русском языке");
        }
        
        // подсчет гласных
        if ($("#vowels").is(":checked")) {
            var en = text.match(vowelsEn);
            var ru = text.match(vowelsRu);
            if (en === null) {
                en = 0;
            } else en = en.length;
            if (ru === null) {
                ru = 0;
            } else ru = ru.length;
            x.preventDefault();
            $("textarea.result").val("машина насчитала " + en + " гласных на английском языке и " + ru + " на русском языке");
        }
        
        //подсчет букв
        if ($("#letters").is(":checked")) {
            x.preventDefault();
            $("textarea.result").val("машина насчитала " + letters.length + " букв");
        }
        
        //подсчет символов
        if ($("#symbols").is(":checked")) {
            x.preventDefault();
            $("textarea.result").val("машина насчитала " + symbols.length + " символов");
        }
        
        //подсчет спецсимволов
        if ($("#specialCharacters").is(":checked")) {
            x.preventDefault();
            $("textarea.result").val("машина насчитала " + specialCharacters.length + " спецсимволов");
        }
        
        //подсчет слов
        if ($("#words").is(":checked")) {
            x.preventDefault();
            $("textarea.result").val("машина насчитала " + words.length + " слов");
        }
        
        //подсчет предложений
        if ($("#sentence").is(":checked")) {
            x.preventDefault();
            $("textarea.result").val("машина насчитала " + sentence.length + " предложений");
        }
        
        

    })

 });

