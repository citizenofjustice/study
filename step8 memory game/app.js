const items =  $(".grid").children();
rngImg(items);
var counter = 0;
var prevImg;

function rngImg(e) {
    let images = ['images/Rectangle1.png', 'images/Rectangle2.png', 'images/Rectangle3.png', 'images/Rectangle4.png', 'images/Rectangle5.png', 'images/Rectangle6.png', 'images/Rectangle7.png', 'images/Rectangle8.png', 'images/Rectangle9.png', 'images/Rectangle10.png', 'images/Rectangle11.png', 'images/Rectangle12.png'];
    // console.log(images[images.length * Math.random() | 0]);
    for (let item of e) {
        // console.log(item);
        let image = '<img src="'+images[images.length * Math.random() | 0]+'">';
        $(item).append($(image));
        
    }
    $("img").hide();
}


$(".grid").children().click(function() {
    // console.log($(this).children());
    $(this).children().show();
    counter += 1;
    
    if (counter === 2) {
        console.log($(this).html());
        console.log(prevImg.html());
        setTimeout(function() {
            $(".grid").children().children().hide();
            counter = 0;
        }, 1000);

        if ($(this).html() == prevImg.html()) {
            $('.result').append($('<p>Поздравляю! Вы нашли пару!</p>'));
            prevImg = '';
        } else {
            prevImg = '';
        }
    } else if (counter === 1) {
        prevImg = $(this);
    }
})
