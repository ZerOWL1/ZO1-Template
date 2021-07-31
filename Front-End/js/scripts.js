//SCRIPTS DECLARE HERE
var i = 0;
var txt = 'WELCOME TO ZEROWL1 TEMPLATE';
var speed = 50;

window.onload = function typing(e) {
    if (i < txt.length) {
        document.getElementById("type").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}