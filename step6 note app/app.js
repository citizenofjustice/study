const noteInput = document.getElementById('noteInput');
var sourceHeight = getHeight(noteInput);

document.addEventListener('DOMContentLoaded', elastic(noteInput));

function getHeight(e) {
    e.style.overflow = "hidden";
    return(e.style.height);
}

function elastic(element) {
    element.style.height = '50px';
    element.style.height = (element.scrollHeight)+"px";
    if (element.style.height != sourceHeight) {
        element.style.overflowY = "scroll";
    } else element.style.overflow = "hidden";
}