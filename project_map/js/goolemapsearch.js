var map; //will be used foor map object
var map_marker=[]; //will be used to mark points on map for that search result
var geocodejs; //will be used to have human readable location results


var CU_Boulder_Bounds = { //bounds of cu boulder
north: 40.020,
south: 39.999,
west: -105.320,
east:  -105.210,
};

var boulder = {lat:40.015,lng:-105.270};//will be used for starting refrance location


function initmap(){
  var options={
  zoom:13,
  center:boulder,
  restriction: {
  latLngBounds: CU_Boulder_Bounds,
  strictBounds: false,
  }
 }
 var bounds_auto=new 
 google.maps.LatLngBounds(new google.maps.LatLng(40.020,-105.320),
 new google.maps.LatLng(39.999,-105.210));
 var optinoauto={
  componentRestrictions: {country: "us"},
   //bounds: bounds_auto,
   //strictBounds: true
}
	//var init_lat=$(.'longitude_result').val() //get the lat result and set to our initia
	//var 
	map = new google.maps.Map(document.getElementById('map'),options); //set the map
	geocodejs=new google.maps.Geocoder();
	var input=document.getElementById('search_location'); //auto complete
	var autocomplete=new google.maps.places.Autocomplete(input,optinoauto);
	//document.getElementById('search_button').addEventListener("click",findlat_alt());

}
var address
var lat
var lng
//document.getElementById('search_button').second.addEventListener("click",findlat_alt());
function findlat_alt(){
	address=""
	lat=""
	alt=""
	const button_search=document.getElementById('search_button');
	
		button_search.addEventListener('click',delete_marker());
	
	
	//var location='777 broadway'
	//console.log(location)
   var location = document.getElementById('search_location').value;
   console.log(location);
   var params ={
      address:location,
      key:'AIzaSyCLX8GxL_S3NmXNLcQdXtcvTkhjmeBhivk'
    }
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{params})
    .then(function(response){
    	console.log(response);
    	address=response.data.results[0].formatted_address;
    	lat=response.data.results[0].geometry.location.lat;
    	lng=response.data.results[0].geometry.location.lng;
    	make_marker(lat,lng);
    	//console.log(lat)
    	//console.log(lng)
    	//console.log(address)
    	//$('#addres_result_id').html(response.data.results[0].formatted_address);
    	document.getElementById('addres_result_id').innerHTML=address;
    	document.getElementById("latitude_result_id").innerHTML=lat;
    	document.getElementById('longitude_result_id').innerHTML=lng;
    })
    .catch(function(error){
    	console.log(error);
    });
}

function make_marker(lat1,lng1){
	var temp_location_loc={lat:lat1,lng:lng1}
	var temp_location = new google.maps.Marker({
		position: temp_location_loc,
		map: map
	}); 
	map_marker.push(temp_location)
}
function delete_marker(lat2,lng2){
	var i;
	for(i=0; i<map_marker.length; i++){
		map_marker[i].setMap(null);
	}
	
}
    
