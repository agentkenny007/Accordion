var accordion = $('.accordion'), slide = accordion.find('li');

slide.on("click", function(){
    if ($(this).hasClass('active') == false) $('.active').removeClass('active');
    $(this).toggleClass('active');
});
