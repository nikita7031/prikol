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
        var audio = new Audio('./brawlsong.mp3');
    audio.play();
    document.querySelector('.text').style.visibility='hidden';
    play=1
    }
});
