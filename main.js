var accordion = $('.accordion'), slide = accordion.find('li');

slide.on("click", function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
});
