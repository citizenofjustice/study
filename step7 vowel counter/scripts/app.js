//объявление полей ввода, вывода, radioButton
const textInput = $("textarea.text");
const radioB = "input:radio[name='choice']";
//создаем невидимое поле для вывода
$('.output').append($('<textarea></textarea>', { class: 'result', readonly: 'readonly', style: 'display: none' }));

//выполнение по загрузке страницы
$(document).ready(function(){

    //динамическое текстовое поле
    function elastic(element) {
        element.on('input', function(){
            this.style.height = '1px';
            this.style.height = (this.scrollHeight + 6) + 'px'; 
        });
        
    }
    elastic(textInput);

    //функция для передачи текста
    $("button.button").click(function(x){
        //текст из текстбокса
        
        let textOutput = $("textarea.result");
        textOutput.show();
        
        console.log(text);
        //проверка на наличеие введенных символов, если есть то приступаем к подсчету
        if (textInput.val().trim().length < 1) {
            textOutput.show();
            textOutput.val('Введите какие-либо симовлы помимо пробелов, табуляци и переноса строки.');
        } else {
        let text = textInput.val() + '! ';
        // textOutput.val('');

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


        
        //функция подсчета
        function checkAndCount(statement, ...regExpN) {
            //функция для определения для сверки типов данных
            function analyseStr(e) {
                if (e === consonantsEn) {return "согласных на английском языке равно ";}
                if (e === consonantsRu) {return " и согласных на русском языке равно ";}
                if (e === vowelsEn) {return "гласных на английском языке равно ";}
                if (e === vowelsRu) {return " и гласных на русском языке равно ";}
                if (e === letters) {return "букв равно ";}
                if (e === symbols) {return "символов равно ";}
                if (e === specialCharacters) {return "спецсимволов равно ";}
                if (e === words) {return "слов равно ";}
                if (e === sentence) {return "предложений равно ";}
            }

            //если выбран соответствующий radio
            if (statement) {
                x.preventDefault();
                let outputStr = '';
                //разбор аргументов функции подсчета (а именно regExp выражений)
                for (let regExp of regExpN) {
                    let matchedStr = text.match(regExp);
                    let smt = analyseStr(regExp);
                    //проверка на наличие совпадений введенного текста с выражение regExp
                    if (matchedStr != null) {
                        outputStr += smt + matchedStr.length ;
                    } else { outputStr += smt + '0 '}
                }
                //выводим текст в поле вывода
                textOutput.val("В введенном вами тексте количество " + outputStr);
            }
        }

        //вызов функциий для подсчета
        checkAndCount($("#consonants").is(":checked"), consonantsEn, consonantsRu);
        checkAndCount($("#vowels").is(":checked"), vowelsEn, vowelsRu);
        checkAndCount($("#letters").is(":checked"), letters); 
        checkAndCount($("#symbols").is(":checked"), symbols);
        checkAndCount($("#specialCharacters").is(":checked"), specialCharacters);
        checkAndCount($("#words").is(":checked"), words);
        checkAndCount($("#sentence").is(":checked"), sentence);
        
        //возврат фокуса в текстовое поле
        textInput.focus();
        }
    })
});



