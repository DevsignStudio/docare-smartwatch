
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back")
	try {
//		tizen.application.getCurrentApplication().
		
		var $body = $("body");
		
		if ($body.hasClass("index")) {
			tizen.application.getCurrentApplication().exit();
		} else {
			window.history.back();
		}
	    
	} catch (ignore) {
	}
    });
    
   //Heart Rate Monitor sensor function 
   tizen.humanactivitymonitor.start("HRM", onchangedCB);
   function onchangedCB(hrmInfo) {
	   $("#heartRatePage").html(hrmInfo.heartRate + '<strong>bpm</strong> <small>resting</small>');
   }
   
   //
//   function getPedometerData(pedometerInfo) {
//	var pData = {
//	 
//     walkStep: pedometerInfo.cumulativeWalkStepCount,
//	
//	 };
//	   
//	pedometerData = pData;
//	  
//	return pData;
//	  
//   }
//	  
//	function getData() {
//	 
//	return pedometerData;
//	 
//	}
	
//   tizen.humanactivitymonitor.setAccumulativePedometerListener(oCB);
   tizen.humanactivitymonitor.start("PEDOMETER", onCB);
   function onCB(pedometerInfo)
   {
	  //pedometerData = getPedometerData(pedometerInfo);
      $("#pedometerData").html(pedometerInfo.cumulativeWalkStepCount + '<strong>/1000</strong> <small>steps</small>');
      
   }

  
   
};