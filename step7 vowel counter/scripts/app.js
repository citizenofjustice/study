//выполнение по загрузке страницы
$(document).ready(function(){
    //объявление полей ввода, вывода, radioButton
    const textInput = $("textarea.text");
    const textOutput = $("textarea.result"); 
    const radioB = "input:radio[name='choice']";

    //добавляет всем radioButton класс filled если они заполнены
    $(radioB).find(":checked").addClass("filled");
    
    //функция выбора и отмены выбора radioButton
    $(radioB).click(function() {
        $(this).prop("checked", false);
        $(this).toggleClass("filled");
        
        if($(this).hasClass("filled")) {
            $(this).prop("checked", true);
            $(radioB).find(":checked").removeClass("filled");
        }
    });

    //функция для передачи текста
    $("button.button").click(function(x){
        //проверка на наличеие введенных символов, если есть то приступаем к подсчету
        if (textInput.val().trim().length < 1) {
            textOutput.val('Введите какие-либо симовлы помимо пробелов, табуляци и переноса строки');
        } else {
        
        //объекты для сравнений в RegExp
        var consonantsEn = /['bcdfghjklmnpqrstvwxyz']/gmui;
        var consonantsRu = /['бвгджзйклмнпрстфхцчшщ']/gmui;
        var vowelsEn = /['aeiouy']/gmui;
        var vowelsRu = /['аяуюоеёэиы']/gmui;
        var letters = /(\p{L})/gmu;
        var symbols = /\S/gm;
        var specialCharacters = /\p{Sm}|\p{P}/gmu;
        var words = /(\p{L}+)/gmu;
        var sentence = /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s/gm;

        //текст из текстбокса
        var text = textInput.val() + ' ';
        
        //функция подсчета
        function checkAndCount(statement, ...regExpN) {
            //функция для определения для сверки типов данных
            function analyseStr(e) {
                if (e === consonantsEn) {return " согласных на английском языке; ";}
                if (e === consonantsRu) {return " согласных на русском языке;";}
                if (e === vowelsEn) {return " гласных на английском языке; ";}
                if (e === vowelsRu) {return " гласных на русском языке;";}
                if (e === letters) {return " букв;";}
                if (e === symbols) {return " символов;";}
                if (e === specialCharacters) {return " спецсимволов;";}
                if (e === words) {return " слов;";}
                if (e === sentence) {return " предложений;";}
            }

            //если выбран соответствующий radio
            if (statement) {
                x.preventDefault();
                let outputStr = '';
                //разбор аргументов
                for (let regExp of regExpN) {
                    let matchedStr = text.match(regExp);
                    let smt = analyseStr(regExp);
                    if (matchedStr != null) {
                        outputStr += matchedStr.length + smt;
                    } else { outputStr += '0 ' + smt }
                }
                textOutput.val("В текстовое поле введено: " + outputStr);
            }
        }
        

        checkAndCount($("#consonants").is(":checked"), consonantsEn, consonantsRu);
        checkAndCount($("#vowels").is(":checked"), vowelsEn, vowelsRu);
        checkAndCount($("#letters").is(":checked"), letters); 
        checkAndCount($("#symbols").is(":checked"), symbols);
        checkAndCount($("#specialCharacters").is(":checked"), specialCharacters);
        checkAndCount($("#words").is(":checked"), words);
        checkAndCount($("#sentence").is(":checked"), sentence);
        
                
        textInput.focus();
        }
    })

 });

