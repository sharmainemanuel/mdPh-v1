var vLat=0, vLong=0;
var map;
var imageBounds = {north: 0, south: 0, east: 0, west: 0};
var vImageURL;
var arrFacility=[], arrLat=[], arrLon=[], arrMaxTemp=[];
var aAP=[], aBP=[], aABP=[], aOP=[];
var aAN=[], aBN=[], aABN=[], aON=[];

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
        url: "http://gcccs.org/mdph/bloodinfo.php",
        async: false,
        success: function(myData){
          for(var i = 0; i< myData.length; i++){
          arrFacility.push(myData[i].location);
          arrLat.push(myData[i].lat);
          arrLon.push(myData[i].lon);
          aAP.push(myData[i].AP);
          aBP.push(myData[i].BP);
          aABP.push(myData[i].ABP);
          aOP.push(myData[i].OP);
          aAN.push(myData[i].AN);
          aBN.push(myData[i].BN);
          aABN.push(myData[i].ABN);
          aON.push(myData[i].ON);

}
        }
      });
      google.maps.event.addDomListener(window, 'load',initialize(vLat, vLong, 14));
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
      icon: 'img/bloodbank.png'
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i){
    return function(){
      infowindow.setContent("<p>"+arrFacility[i]+"<br />Number of Available Blood Bags<br /><table border='1'><tr><td><a href='' onclick='gotoAp()'><img style='width:20%' src='img/ap.png'></a>"+aAP[i]+"</td><td><a href='' onclick='gotoBp()'><img style='width:20%' src='img/bp.png'>"+aBP[i]+"</td><td><a href='' onclick='gotoAp()'><img style='width:20%' src='img/abp.png'></a>"+aABP[i]+"</td><td><a href='' onclick='gotoAp()'><img style='width:20%' src='img/op.png'></a>"+aOP[i]+"</td></tr>"+
        "<tr><td><a href='' onclick='gotoAp()'><img style='width:20%' src='img/an.png'></a>"+aAN[i]+"</td><td><img style='width:20%' src='img/bn.png'>"+aBN[i]+"</td><td><img style='width:20%' src='img/abn.png'>"+aABN[i]+"</td><td><img style='width:20%' src='img/on.png'>"+aON[i]+"</td></tr></table></p>");
      infowindow.open(map, marker);
    }
  })(marker, i));
  }
}

function gotoAp(){
  localStorage.setItem("blood", "ap");
	window.location = 'blood_availability.html';
}
function gotoBp(){
  localStorage.setItem("blood", "bp");
	window.location = 'blood_availability.html';
}