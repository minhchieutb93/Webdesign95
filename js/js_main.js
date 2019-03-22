$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 80) {
        $('.wrap_head').addClass('sticky');
        
    } else {
        $('.wrap_head').removeClass('sticky');
       
    }
});
// $(document).ready(function(){

//    $("#commnet").click(function(){
//       $(this).parent().find(".input_sub").show();
//    });

//    tab(".play_content_item",".tab_play a");
// });


// function show_menu(){

//   if($(".menu_mobile").hasClass("active")){
//     $(".menu_mobile").removeClass("active");
//   }else{
//     $(".menu_mobile").addClass("active");
//   }
// }

// function tab(content_tab, item_tab){
// 	$(content_tab).hide();
// 	$(content_tab+":first").show(); 
// 	$(item_tab).click(function() {
// 		$(item_tab).removeClass("active");
// 		$(this).addClass("active");
// 		$(content_tab).hide();
// 		var activeTab = $(this).attr("rel"); 
// 		$("#"+activeTab).fadeIn(); 
// 	});
// }

$(document).ready(function() {

  $("#owl-demo").owlCarousel({
    navigation : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true,
    autoPlay : true,
  });

  $("#owl-demo2").owlCarousel({
    items : 3,
    autoPlay : true,
    stopOnHover : true,
    lazyLoad : true,
    navigation : false
  }); 

  $("#owl-demo3").owlCarousel({
    items : 1,
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true,
    pagination: false,
    autoPlay : true,
  });

});

// var widthPage = screen.width;
// if(widthPage > 995){
//   $(window).scroll(function (e) {
//     var homeHeight = 0;
//     if($(".text_iden")){
//       homeHeight   = $(".text_iden").offset().top;
//     }
//     var topLeft      = $('.content_box_left').offset().top;
//     var scrollPos    = $(window).scrollTop();
    
//     var heightLeft   = $('.content_box_left').height();
//     var heightRight  = $('.content_box_right').height(heightLeft);
    
//     var heightParent = $('.pos_right').height();
//     var TopFooter    = $('.footer').offset().top;
//     if(homeHeight > 0){
//       TopFooter = homeHeight;
//     }
//       if(scrollPos > TopFooter - heightParent ) {
//           $('.pos_right').addClass("ab");
//           $('.pos_right').removeClass("fixed");
//           $('.pos_right').css({"bottom": 0} );
//       }
//       else if(scrollPos > topLeft ){
//           $('.pos_right').addClass("fixed");
//           $('.pos_right').removeClass("ab");

//       }else{
//           $('.pos_right').removeClass("fixed");
//           $('.pos_right').removeClass("ab");
//       }
//   });
// }
