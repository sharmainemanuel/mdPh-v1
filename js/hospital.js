var vLat=0, vLong=0;
var map;
var radarOverlay;
var imageBounds = {north: 0, south: 0, east: 0, west: 0};
var vImageURL;
var arrFacility=[], arrLat=[], arrLon=[], arrMaxTemp=[];
var vDateIssued;

$(document).ready(function()
{
    //var scrheight = screen.height - (screen.height * .5);
    document.getElementById('map-canvas').style.width="100%";
    document.getElementById('map-canvas').style.height="100%"; //scrheight + "px";
    if (!navigator.geolocation) 
    {
      console.log("error in getting location");
    } else {
      // Asia 43.685831, 87.331157
      vLat =14.828035; vLong =120.27817;
      
      
      $.ajax({
        type: "GET",
          url: "http://gcccs.org/mdph/getapi.php",
         async: false,
        success: function(myData){
         console.log(myData);
          for(var i = 0; i< 15; i++){
          arrFacility.push(myData.items[i]["Health Facility Name"]);
          arrLat.push(myData.items[i].Latitude);
          arrLon.push(myData.items[i].Longitude);}
        }
      });
      google.maps.event.addDomListener(window, 'load',initialize(vLat, vLong, 15));
    }
});


function initialize(vLat, vLong, vZoom)
{

  //var myMapStyle = setMyMapStyle();
  //var mapReference = new google.maps.StyledMapType(myMapStyle, {name: "Styled Map"});
  var mapOptions = 
    {
      zoom: vZoom,
      center: new google.maps.LatLng(vLat, vLong),
      //mapTypeId: google.maps.MapTypeId.HYBRID,
      disableDefaultUI: true,
      //mapTypeControlOptions: {
           // mapTypeIds: //[google.maps.MapTypeId.ROADMAP, "map_style"]}
    };
    var positionstring;
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
 // map.mapTypes.set("map_style", mapReference);
  //map.setMapTypeId("map_style");

  var infowindow = new google.maps.InfoWindow();
  var marker, i;

  for(i=0; i<arrFacility.length; i++)
  {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(arrLat[i], arrLon[i]),
      map:map,
      icon: 'img/hospital.png'
    });
console.log("im here");
    google.maps.event.addListener(marker, 'click', (function(marker, i){
    return function(){
      infowindow.setContent("<p>"+arrFacility[i]+"</p>");
      infowindow.open(map, marker);
    }
  })(marker, i));
  }
}