$(document).ready(function(){
    
    const textInput = $("textarea.text");
    const textOutput = $("textarea.result");

    //функция для передачи текста
    $("button.button").click(function(x){
        if (textInput.val().trim().length < 1) {
            alert('Введите какие-либо симовлы помимо пробелов, табуляци и переноса строки');
        } else {
        
        //объекты для сравнений в RegExp
        var consonantsEn = /['bcdfghjklmnpqrstvwxyz']/gmui;
        var consonantsRu = /['бвгджзйклмнпрстфхцчшщ']/gmui;
        var vowelsEn = /['aeiouy']/gmui;
        var vowelsRu = /['аяуюоеёэиы']/gmui;
        
        //текст из текстбокса
        var text = textInput.val() + ' ';
        
        function count(e, str) {
            x.preventDefault();
            if (e != null) {
                console.log(e);
                textOutput.val("В текстовое поле введено " + e + str);
            } else {console.log('asdasdasdasd');}
        }

        // подсчет согласных
        if ($("#consonants").is(":checked")) {
            let en = text.match(consonantsEn);
            let ru = text.match(consonantsRu);
            if (en === null) {
                en = 0;
            } else en = en.length;
            if (ru === null) {
                ru = 0;
            } else ru = ru.length;
            x.preventDefault();
            textOutput.val("В текстовое поле введено " + en + " согласных на английском языке и " + ru + " на русском языке");
        }
        // подсчет гласных
        if ($("#vowels").is(":checked")) {
            let en = text.match(vowelsEn);
            let ru = text.match(vowelsRu);
            if (en === null) {
                en = 0;
            } else en = en.length;
            if (ru === null) {
                ru = 0;
            } else ru = ru.length;
            x.preventDefault();
            textOutput.val("В текстовое поле введено " + en + " гласных на английском языке и " + ru + " на русском языке");
        }
        
        //подсчет букв
        if ($("#letters").is(":checked")) {
            let letters = text.match(/(\p{L})/gmu);
            count(letters.length, " букв");
        }
        
        //подсчет символов
        if ($("#symbols").is(":checked")) {
            let symbols = text.match(/\S/gm);
            count(symbols.length, " символов");
        }
        
        //подсчет спецсимволов
        if ($("#specialCharacters").is(":checked")) {
            let specialCharacters = text.match(/\p{Sm}|\p{P}/gmu);
            count(specialCharacters.length, " спецсимволов");
        }
        
        //подсчет слов
        if ($("#words").is(":checked")) {
            let words = text.match(/(\p{L}+)/gmu);
            count(words.length, " слов");
        }
        
        //подсчет предложений
        if ($("#sentence").is(":checked")) {
            let sentence = text.match(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s/gm);
            count(sentence.length, " предложений");
        }
                
        textInput.focus();
        }
    })

 });

