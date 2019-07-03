$('body').append('<button class="button-up" />');
$('.button-up').click(function(){
    $('html').animate({'scrollTop':0}, 1000);
});


