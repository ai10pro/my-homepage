

//section_bar
$(window).on('scroll load', function(){
    let scrollTop = $(window).scrollTop();
    let winH = $(window).height();
    let section_bar_pos = $('.section_bar').offset().top;
    let section_bar_now = (1 - (section_bar_pos - scrollTop) / winH) * 2 * 100;

    $('.section_bar').css('width', section_bar_now + '%');
})

//section_bar2
$(window).on('scroll load', function(){
    let scrollTop = $(window).scrollTop();
    let winH = $(window).height();
    let section_bar_pos = $('.section_bar2').offset().top;
    let section_bar_now = (1 - (section_bar_pos - scrollTop) / winH) * 2 * 100;

    $('.section_bar2').css('width', section_bar_now + '%');
})

//section_bar3
$(window).on('scroll load', function(){
    let scrollTop = $(window).scrollTop();
    let winH = $(window).height();
    let section_bar_pos = $('.section_bar3').offset().top;
    let section_bar_now = (1 - (section_bar_pos - scrollTop) / winH) * 2 * 100;

    $('.section_bar3').css('width', section_bar_now + '%');
})

//section_bar4
$(window).on('scroll load', function(){
    let scrollTop = $(window).scrollTop();
    let winH = $(window).height();
    let section_bar_pos = $('.section_bar4').offset().top;
    let section_bar_now = (1 - (section_bar_pos - scrollTop) / winH) * 2 * 100;

    $('.section_bar4').css('width', section_bar_now + '%');
})


AOS.init({
    easing: 'ease-out-back',
    duration: 1000,
});
