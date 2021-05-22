console.log('Тест');

/*var audio = new Audio('new_brawl_stars.mp3');
function play() {
    var audio = new Audio('new_brawl_stars.mp3');
    audio.play();
};
audio.play();
*/
// document.getElementById('new_brawl_stars.mp3').play();

document.querySelector('body').addEventListener('click', function() {
    var audio = new Audio('https://pmp3.ru/uploads/music/russian/2020/10/unnv_kateeechi_-_bez_datyi.mp3');
    audio.play();
    document.querySelector('.text').style.visibility='hidden';
});
