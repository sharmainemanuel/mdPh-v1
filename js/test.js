
var txtsrch=document.getElementById('med').value;

function medsearch(){
  var txtsrch=document.getElementById('med').value;
   $.ajax({
       type: "GET",
       url: "http://gcccs.org/mdph/getmeds.php?med="+txtsrch,
       async: false,
        success: function(myData){
		//	console.log(myData);
			for(i=0; i<5; i++){

       	//	$(".inner").append("<div class=nd2-card><div class=card-title><img class=card-avatar src=//lorempixel.com/200/200/people/9/><h3 class=card-primary-title>"+myData['search result'][i].BRAND+"</h3><h5 class=card-subtitle></h5></div><div class=card-action><div class='row between-xs'><div class=col-xs-8><div class=box2></div></div><div class='col-xs-4 align-right'><div class=box><a href=#book class='ui-btn ui-btn-raised clr-primary ui-btn-inline' onclick='reserve();'	>Book</a></div></div></div></div></div>");
		$(".inner").append("<li>"+myData['search result'][i].BRAND+"</li>");
		  
			}
        }
      });
}

