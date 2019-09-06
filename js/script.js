$('.header__btn').on('click', function(){
    $('.overlay').css('display','block');
    $('.booking').css('display','block');
});

$('.booking__close').on('click', function(){
    $('.overlay').css('display','none');
    $('.booking').css('display','none');
});
$('.content__video').on('click', function(){
    $('.content__youtube').css('display','block');
    $('.content__video').css('display','none');
});
$('.gallery__link').on('click', function(){
    $('.gallery__invisible').css('display','block');
    $('.gallery__link').css('display','none');
});
$('.gallery__link--invisible').on('click', function(){
    $('.gallery__invisible').css('display','none');
    $('.gallery__link').css('display','block');
});
$('.aboutme__link').on('click', function(){
    $('.aboutme__invisible').css('display','block');
    $('.aboutme__link').css('display','none');
});
$('.aboutme__link--invisible').on('click', function(){
    $('.aboutme__invisible').css('display','none');
    $('.aboutme__link').css('display','block');
});
$('.aboutme__link1').on('click', function(){
    $('.aboutme__invisible1').css('display','block');
    $('.aboutme__link1').css('display','none');
});
$('.aboutme__link--invisible1').on('click', function(){
    $('.aboutme__invisible1').css('display','none');
    $('.aboutme__link1').css('display','block');
});

$('.aboutme__profession-link').on('click', function(){
    $('.aboutme__photo--invisible').css('display','block');
    $('.aboutme__profession-link').css('display','none');
});
$('.aboutme__profession-close').on('click', function(){
    $('.aboutme__photo--invisible').css('display','none');
    $('.aboutme__profession-link').css('display','block');
});

$('.feedback__link').on('click', function(){
    $('.feedback__invisible').css('display','block');
    $('.feedback__link').css('display','none');
});
$('.feedback__link--close').on('click', function(){
    $('.feedback__invisible').css('display','none');
    $('.feedback__link').css('display','block');
});

$('.map__link').on('click', function(){
    $('.map__invisible').css('display','block');
    $('.map__link').css('display','none');
});
$('.map__link--invisible').on('click', function(){
    $('.map__invisible').css('display','none');
    $('.map__link').css('display','block');
});

function agreeForm(f) {
    // Если поставлен флажок, снимаем блокирование кнопки
    if (f.agree.checked) f.submit.disabled = 0
    // В противном случае вновь блокируем кнопку
    else f.submit.disabled = 1
}