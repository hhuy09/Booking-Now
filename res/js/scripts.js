jQuery(function() {

  
    new WOW().init();

    /*
        Carousel
    */
    $('#carousel-partner').on('slide.bs.carousel', function(e) {

        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = 8;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $('#doitac').eq(i).appendTo('#carousel-doitac');
                } else {
                    $('#doitac').eq(0).appendTo('#carousel-doitac');
                }
            }
        }
    });

});