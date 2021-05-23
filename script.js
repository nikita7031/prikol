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
        var audio = new Audio('https://rux.kilosound.org/get/music/20201203/upmusicme_Alexa_the_Fiends_-_JEto_novyjj_Bravl_stars_71832665.mp3');
    audio.play();
    document.querySelector('.text').style.visibility='hidden';
    play=1
    }
});
