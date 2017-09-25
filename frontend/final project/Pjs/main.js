// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /*====================================
    Main Navigation Stick to Top when Scroll
    ======================================*/
    function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      if (window_top > div_top) {
          $('#tf-menu').addClass('stick');
      } else {
          $('#tf-menu').removeClass('stick');
      }
  }

  $(function () {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
  });

    
 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        return false;
      }
    }
  });
});

 


}());
  
  // var latlng = new google.maps.LatLng(43.662549,-79.3937336);
  // var latlng1 = new google.maps.LatLng(43.662549,-79.3937336);
  //  var myOptions =
  //   {
  //       zoom: 15,
  //       center: latlng,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   var myOptions1 =
  //   {
  //       zoom: 15,
  //       center: latlng1,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  //   var map1 = new google.maps.Map(document.getElementById("map_canvas1"), myOptions1);
  //   google.maps.event.addListener(map, 'click', function(event) {
  //     placeMarker(event.latLng);
  //   });
  //   google.maps.event.addListener(map1, 'click', function(event) {
  //     placeMarker1(event.latLng);
  //   });
  //   function placeMarker(location) {
  //     var marker = new google.maps.Marker({
  //       position: location, 
  //       map: map,
  //       draggable: true,
  //       animation: google.maps.Animation.DROP
  //     });
  //   }
  //   function placeMarker1(location) {
  //     var marker1 = new google.maps.Marker({
  //       position: location, 
  //       map: map1,
  //       draggable: true,
  //       animation: google.maps.Animation.DROP
  //     });
  //   }
}
main();