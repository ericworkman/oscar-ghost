let oscar = {
    animatedNav: false,
    tagMenu: true,
    tagKey: '#tagnav',
    requirePosts: false
};

if(oscar.animatedNav) {
    $('.nav').addClass('animated');
    $('.masthead').mouseenter(function(){
        $('.nav').slideToggle(200);
    }).mouseleave(function(){
        $('.nav').slideToggle(200);
    });
}

$('a[href^=http]').each(function(){
    if(this.href.indexOf(location.hostname) < 0) {
        $(this).attr({target: '_blank'});
    }
});

