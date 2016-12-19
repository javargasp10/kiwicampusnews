   
   $(document).ready(function()
   {
      var Carousel1Opts =
      {
         delay: 3000,
         duration: 500,
         easing: 'linear',
         mode: 'forward-circular',
         direction: '',
         scalemode: 1,
         pagination: true,
         pagination_img_default: 'images/page_default.png',
         pagination_img_active: 'images/page_active.png',
         start: 0
      };
      $("#Carousel1").carousel(Carousel1Opts);
      $("#Carousel1_back a").click(function()
      {
         $('#Carousel1').carousel('prev');
      });
      $("#Carousel1_next a").click(function()
      {
         $('#Carousel1').carousel('next');
      });
      $("#Carousel1").on('activate', function(event, index)
      {
         switch(index)
         {
            case 0:
               ShowObject('', 1);
               break;
         }
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top }, 500, 'easeOutCubic');
      });
   });
   