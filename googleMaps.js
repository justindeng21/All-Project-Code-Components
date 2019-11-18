var CU_Boulder_Bounds = {
    north: 40.020,
    south: 39.999,
    west: -105.320,
    east:  -105.210,
  };
  var event1 = '<div id="content">'+
              '<div id="event1Notice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Event1</h1>'+
              '<div id="bodyContent">'+
              '<p> Event 1 is ...</p>'+
              '</div>'+
              '</div>';
  var boulder = {lat:40.015,lng:-105.270};
  var map;
  function initMap(){
    var options={
      zoom:13,
      center:boulder,
      restriction: {
      latLngBounds: CU_Boulder_Bounds,
      strictBounds: false,
      },
    }
   map = new google.maps.Map(document.getElementById('map'),options);
   var infowindow = new google.maps.InfoWindow({content: event1
   });
   var marker = new google.maps.Marker({
     position: boulder,
     map : map,
     title : 'Event1',
     icon : '/js_files/fireEmoji.png'
   });
   marker.addListener('click', function(){
     infowindow.open(map,marker);
   });
  }