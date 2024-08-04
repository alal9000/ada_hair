(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $('a[href="#home1"]').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    // Active link switching
    function setActiveLink() {
        var currentScrollPos = $(window).scrollTop();
        $('.nav-link').each(function () {
            var section = $($(this).attr('href'));
            if (section.length) {
                var sectionOffset = section.offset().top - 80; // Adjust offset for navbar height
                if (currentScrollPos >= sectionOffset && currentScrollPos < sectionOffset + section.outerHeight()) {
                    $('.nav-link').removeClass('active');
                    $(this).addClass('active');
                }
            }
        });
    }

    $(document).ready(function () {
        // Set initial active link
        setActiveLink();

        // Update active link on scroll
        $(window).on('scroll', function () {
            setActiveLink();
        });

        // Update active link on click
        $('.nav-link').on('click', function (e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);

            $('html, body').animate({
                'scrollTop': $target.offset().top - 80 // Adjust offset for navbar height
            }, 500, 'swing', function () {
                window.location.hash = target;
                setActiveLink(); // Update active link after scroll
            });
        });

        // slider
        $("#image-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    });

})(jQuery);
