
    $('.test-slider').slick({
        dots: true,
        arrows: false
    });

    // smooth scroll
    $("[data-scroll").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset =$(elementId).offset().top

    $('html, body').animate ({
        scrollTop: elementOffset
    }, 700)
});


    // navButton
    let nav =$('#nav')
    let navButton =$('#navButton')

    navButton.on('click', function(event){
        event.preventDefault();

        nav.toggleClass('show')
    });


    // Fixed header
    let header = $(".header");
    let intro = $("#intro");
    let introH = intro.height();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }