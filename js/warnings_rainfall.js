
	
	function getData(){
	
	document.getElementById('inner').html = '	<img id="imgLoader" src="img/ballRing.gif" class="loading">';
		var divisionResult = document.getElementById('div').value;
		$.ajax
({
  type: "GET",
  url: "http://iligtas.ph/agaptest/rainfall_warning.php",
  async: false,
  success: function (result2){
		for(j=0; j<=result2.result.length; j++){
			for(i=0; i<=result2.result.length;i++){
				var division = result2.result[i][j].Division;
				var Warning_Number = result2.result[i][j].Warning_Number;
				var Weather_System = result2.result[i][j].Weather_System;
				
				var Yellow_Area = result2.result[i][j].Yellow_Area;
				var Orange_Area = result2.result[i][j].Orange_Area;
				var Red_Area = result2.result[i][j].Red_Area;
				
				var Yellow_Impact = result2.result[i][j].Yellow_Impact;
				var Orange_Impact = result2.result[i][j].Orange_Impact;
				var Red_Impact = result2.result[i][j].Red_Impact;

				var time = result2.result[i][j].Issued_Time;
				var day = result2.result[i][j].Day;
				var month = result2.result[i][j].Month;
				var year = result2.result[i][j].Year;
				var issued_at = time + " " +day+" " +month+ " " +year;
				
			
				
				
				
				if(division == divisionResult){
			
						if (Orange_Area == " "){
				var orange= "<li class='ui-li-static ui-body-inherit ui-li-has-thumb'> <img src=img/neworange.png>  <h2>"+Orange_Area+"</h2><p>"+Orange_Impact+"</p>  </li>";	
var yellow = "<li class='ui-li-static ui-body-inherit ui-li-has-thumb'> <img src=img/newyellow.png> <h2>"+Yellow_Area+"</h2>	<p>"+Yellow_Impact+"</p> </li> ";			
				}
				
		
				else{
				
					 var orange = "";
				}		if (Red_Area == " "){
				var Red_Area= "<li class='ui-li-static ui-body-inherit ui-li-has-thumb'> <img src=img/newred.png><h2>"+Red_Area+"</h2><p>"+Red_Impact+"</p>  </li>";			
				}
				
		
				else{
				
					 var red = "";
				}

							if (Yellow_Area != " "){
				var yellow= "<li class='ui-li-static ui-body-inherit ui-li-has-thumb'> <img src=img/newyellow.png> <h2>"+Yellow_Area+"</h2>	<p>"+Yellow_Impact+"</p> </li> ";			
				}
				
		
				else{
				
					 var yellow = "";
				}
					
		
					document.getElementById('inner').innerHTML = 
					"<ul data-role=listview data-inset=false data-icon=false data-divider-theme=b class=ui-listview> <li class='ui-li-static ui-body-inherit ui-first-child'> Warning Number: "+Warning_Number+" </li> <li class='ui-li-static ui-body-inherit'> Weather System: "+Weather_System+" </li> "+yellow+orange+red+"</ul>" ;
						setTimeout(function(){
						$('#imgLoader').fadeOut();
											console.log(Warning_Number);
			 }, 1000);	
				}
			
				
			}
		}
	}
});

	
}