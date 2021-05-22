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
    var audio = new Audio('https://nmuzs.ru/uploads/music/2021/02/Bra_bravl_stars_Pesnya.mp3');
    audio.play();
    document.querySelector('.text').style.visibility='hidden';
});
