jQuery(function(){
  var toggleAffix = function(affixElement, wrapper, scrollElement) {
    if (scrollElement.scrollTop() >= wrapper.offset().top){
        affixElement.addClass("affix");
        $('#myNavbar').removeClass("bg-transparent");
        $('#myNavbar').addClass("bg-dark");
    }
    else {
        affixElement.removeClass("affix");
        $('#myNavbar').removeClass("bg-dark");
        $('#myNavbar').addClass("bg-transparent");
    }
  };
  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, wrapper, $(this));
    });
    // init
    toggleAffix(ele, wrapper, $(window));
  });
});