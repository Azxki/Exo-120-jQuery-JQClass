$('#remplir').click(function () {
    $('.monCercle').css("background-color", "red");
    $('.monCarre').css("background-color", "red");
    $('.monCarre1').css("background-color", "red");
})

$('#vider').click(function () {
    $('.monCercle').css("background-color", "white");
    $('.monCarre').css("background-color", "white");
    $('.monCarre1').css("background-color", "white");
})

$('.monCercle').click(function () {
    $('.monCercle').toggleClass('red');
})

$('#monCarre').click(function () {
    $('#monCarre').toggleClass('red');
    $('#monCercle19').toggleClass('red');
    $('#monCercle').toggleClass('red');
    $('#monCercle1').toggleClass('red');
    $('#monCercle2').toggleClass('red');
})

$('#monCarre1').click(function () {
    $('#monCarre1').toggleClass('red');
    $('#monCercle15').toggleClass('red');
    $('#monCercle6').toggleClass('red');
    $('#monCercle11').toggleClass('red');
    $('#monCercle18').toggleClass('red');
})

$('#monCarre3').click(function () {
    $('#monCarre3').toggleClass('red');
    $('#monCercle13').toggleClass('red');
    $('#monCercle3').toggleClass('red');
    $('#monCercle7').toggleClass('red');
    $('#monCercle16').toggleClass('red');
})

$('#monCarre4').click(function () {
    $('#monCarre4').toggleClass('red');
    $('#monCercle9').toggleClass('red');
    $('#monCercle8').toggleClass('red');
    $('#monCercle5').toggleClass('red');
    $('#monCercle12').toggleClass('red');
})

$('#monCarre2').click(function () {
    $('#monCarre2').toggleClass('red');
    $('#monCercle').toggleClass('red');
    $('#monCercle6').toggleClass('red');
    $('#monCercle7').toggleClass('red');
    $('#monCercle8').toggleClass('red');
    $('#monCercle14').toggleClass('red');
    $('#monCercle4').toggleClass('red');
    $('#monCercle10').toggleClass('red');
    $('#monCercle17').toggleClass('red');
})