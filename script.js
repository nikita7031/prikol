console.log('Тест');

function autoplay(){
    var r =confirm("Здрасте");
    if (r == true) {
        // document.getElementById("new_brawl_stars.mp3").play();
        var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
        audio.play();
    }
};

autoplay();
/*var audio = new Audio('new_brawl_stars.mp3');

function play() {
    var audio = new Audio('new_brawl_stars.mp3');
    audio.play();
};

audio.play();
*/
// document.getElementById('new_brawl_stars.mp3').play();


document.querySelector('body').addEventListener('click', function() {
    var audio = new Audio('new_brawl_stars.mp3');
        audio.play();
});