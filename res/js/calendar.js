jQuery(function(){
    $('#txtNgayDen').datepicker({ dateFormat: "yy-mm-dd"}).datepicker("setDate", new Date());
    $(window).scroll(function(){
      $('#txtNgayDen').datepicker('hide');
      $('#txtNgayDen').blur();
    });
    $(window).resize(function() {
      $('#txtNgayDen').datepicker('hide');
      $('#txtNgayDen').blur();
    });
})
