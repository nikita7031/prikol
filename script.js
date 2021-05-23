console.log('Тест');

/*var audio = new Audio('music.mp3');
function play() {
    var audio = new Audio('music.mp3');
    audio.play();
};
audio.play();
*/
// document.getElementById('music.mp3').play();
let play=0;

document.querySelector('body').addEventListener('click', function() {
    if(play==0) {
        var audio = new Audio('https://song.cofemuzik.pro/play/333230303032323032348e37313533323131b0300700/6362470a847bb194eb9eddf75098f6ab/%D0%B1%D1%80%D0%B0%D0%B2%D0%BB%20%D1%81%D1%82%D0%B0%D1%80%D1%81%20-%20%D0%AD%D1%82%D0%BE%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B1%D1%80%D0%B0%D0%B2%D0%BB%20%D1%81%D1%82%D0%B0%D1%80%D1%81.mp3');
    audio.play();
    document.querySelector('.text').style.visibility='hidden';
    play=1
    }
});
