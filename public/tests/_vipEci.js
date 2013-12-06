/*global should, exports, describe, mocha, it, jquery, expect, example, beforeEach, mocha */


//jQuery(document).ready(function($){

(function(){

    "use strict";
    function quietMode(on, debuggerStatement){
        //turns off debugger statements for completed tasks.
        if( on !== true ){
            debuggerer(debuggerStatement);
        }
    }
    function debuggerer(thingToLog){
        if(thingToLog){
	        jQuery(document).ready(function($){
		        $("output").append(thingToLog);
	        });
            console.log("\n >>>>>>>>>>>>>>>>>" +  thingToLog + "<<<<<<<<<<<<<<<<<  \n");
        } else {
            console.log("\n >>>>>>>>>>>>>>>>>DUDE YOU MESSED UP YOUR DEBUGGERER STATEMENT. TURN YOUR LIFE AROUND.<<<<<<<<<<<<<<<<<  \n");
        }
    }
    var quietModeIsOn = false;


    describe('testing if', function(){
       it("exists", function(){
	       quietMode(quietModeIsOn, "swag");
	       expect().fail();
       });
    });
	})();
//});













var  bNow = new Date()
	,   bNum = bNow.getTime(),   savedID = 0
	,   savedQTY = 0
	,   timeOutEvent
	,   immediateEvent
	,   bNumItems = 0
	,   lastUpdateTime = 0
	,   now
	,   currentTime = 0
	,   elapsedMs = 0
	,   nItemsPurchased = 0
	,   bQtyFldDirty = 0
	,   bEventScheduled = 0
	,   bShelfVisible = 0
	,   bOnBlur = 1
	,   bReviewOrderShelf = 0
	,   no
	,   yes
	,   args = {
		toolbar : no
		,   location : no
		,   directories : no
		,   status : no
		,   menubar : no
		,   resizeable : no
		,   copyhistory : no
		,   scrollbars : yes
		,   width : 375
		,   height : 400
		,   top : 50
		,   left : 300
	}
	,   Coupon = function(argumentsObject){
		this.args = argumentsObject;
		function listArguments( argObject){
			for ( var i in argObject ){
				//alert("i = " + i + " argObj[i] = " + argObject[i]);

			}
			alert("derp");
			console.log("herp");
		}
		this.listArgs = listArguments(argumentsObject);
	}
function vip(newLoc) {
	window.open(newLoc,'','toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,copyhistory=no,scrollbars=yes, width=375,height=400,top=50,left=300');
}
function shopCoupon(cpnSet, cpnNo, cpnKey )
{
	var newLoc = '/processShowCouponShelf.jhtml?CPNSET=' + cpnSet;
	newLoc += "&CPNNO=" + cpnNo;
	newLoc += "&CPNKEY=" + cpnKey;
	newLoc += "&event=VIPCoupon";
	bNum = bNow.getTime();
	newLoc += "&NUM1=" + bNum;

	var options = 'resizable=yes,toolbar=no,directories=no,status=no,scrollbars=yes,menubar=no,width=750,height=550';

	var remote = window.open( newLoc, 'PromotionSavings', options);

	if ( remote != null ) {
		remote.focus();
	}
}
