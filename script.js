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
        var audio = new Audio('https://pmp3.ru/uploads/music/russian/2020/10/unnv_kateeechi_-_bez_datyi.mp3');
    audio.play();
    document.querySelector('.text').style.visibility='hidden';
    play=1
    }
});