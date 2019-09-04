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
