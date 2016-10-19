$(document).ready(function(){
    
    $(".splash-gallery a").flipLightBox({
    	type: "image",
        direction: "rl",
        speed: "1.2s",
        timingfunction: "ease",
        marginLeft: "10px",
        marginTop: "50px",
        fixedContentPos: false,
        hideOriginal: true,
        flipCount: 1,
        modal: false,
        closeOnContentClick: true,
        backgroundAnimating: true,
        backgroundColor: "rgba(11,11,11,0.8)",
        closeButton: {
        	enable: true,
        	position: 3
        },
        gallery:{
            enable: true,
        },

        when:{
        	opening: function(flb){
        		//before open event
        	},
        	opened: function(flb){
        		//after open event
        	},
        	closing: function(flb){
        		//before clsoe event
        	},
        	closed: function(flb){
        		//after close event
        	}
        }
    })


    $(".run-code-image").on("click", function(){
        $(this).hide();
        $(this).next().show();
        $(".image-example").flipLightBox({
            type: "image"
        });
        return false;
    })

    $(".run-code-html").on("click", function(){
        $(this).hide();
        $(this).next().show();
        $(".html-example").flipLightBox({
            type: "html"
        });
        return false;
    })

    $(".example-single a").flipLightBox({
        gallery: {
            enable: false
        }
    });

    $(".example-gallery a").flipLightBox({
        gallery: {
            enable: true
        }
    });

    $(".example-events a").flipLightBox({
        gallery: {
            enable: false
        },
        when:{
            opening: function(flb){
                //before open event
                alert("opening event");
            },
            opened: function(flb){
                //after open event
                alert("opened event");
            },
            closing: function(flb){
                //before clsoe event
                alert("closing event");
            },
            closed: function(flb){
                //after close event
                alert("closed event");
            }
        }
    });

    $(".example-closebutton a").flipLightBox({
        type: "html",
        modal: true,
        fixedContentPos: true,
        marginTop: "40px",
        closeOnContentClick: false,
        closeButton:{
            enable: false
        },
        gallery: {
            enable: false
        },
        when: {
            opening: function(flb){
                $(".my-closebutton", flb.backEl).on("click", {flb: flb}, close);
            }
        }
    });

    function close(e){
        e.data.flb.close();
    }

 //    $(".flb-html").flipLightBox({
 //    	type: "html",
 //        direction: "rl",
 //        speed: "1.1s",
 //        hideOriginal: true,
 //        marginLeft: '8px',
 //        marginTop: '100px',
 //        fixedContentPos: false,
 //        flipCount: 1,
 //        backgroundColor: 'rgba(51,51,51,0.6)',
 //        backgroundAnimating: false,
 //        modal: true,
 //        closeOnContentClick: false,
 //        closeButton:{
 //            enable: false,
 //            position: 3
 //        },
 //        gallery:{
 //        	enable: false
 //        },
 //        when:{
 //   			getBacksideHtml: function(){
 //   				var html = 
 //                '<div class="dialog-preview"><div id="folioItemPreview-dialog"><div class="title"><div class="close-button"></div></div><div class="clear"></div><div class="main"><div class="left"><img id="folio-thumb" class="folio-thumb" width="180" height="250" src="http://edge.adobe-dcfs.com/ddp/issueServer/issues/39c5a4f6-08d0-4a65-9080-01895cbda4cb/libraryPreview/portrait"><div class="smallspacer"></div><div class="des"><div class="magazine-title"></div><div class="publication-date"></div><div class="minispacer"></div><div class="purchase-state">$9.99</div><div class="smallspacer"></div><div id="buy-button" class="action-button buy-button">Buy Issue</div></div></div>' +
 //                                '<div class="right pageswipe-container folio-preview">' +
 //                                    '<div data-role="page" class="page" >' +
 //                                        '<img src="http://store.commarts.com/content/adobedps/app/images/preview/393.png" width="100%" style="-webkit-transform: translate3d(0px, 100px, 0px);"></div></div>' +
 //                                        '<div class="clear"></div></div></div>';
 //   				return html;
 //   			},
 //   			getBacksideWidth: function(){
 //   				return 964;
 //   			},
 //   			getBacksideHeight: function(){
 //   				return 631;
 //   			},

 //            opening: function(flb)
 //            {
 //            	console.log("beforeOpen event: ");

 //            	$(".close-button", flb.backEl).on("click", {flb: flb}, close);
                
 //                $(".right", flb.backEl).pageSwipe({
	// 				 swipeX: false,
	// 		         getContainerHeight: function () {
	// 		            return 594;
	// 		         },
	// 		         getContainerWidth: function(){
	// 		            return 724;
	// 		         },
	// 			});
                
 //            },
 //            opened: function(flb){
 //                console.log("open event: ");
                
        		
 //            },
 //            closing: function(flb)
 //            {
 //                console.log("beforeClose event: ");
 //            },
 //            closed: function(flb)
 //            {
 //            	$(".close-button", flb.backEl).off("click", close);
 //                console.log("close event: ");
 //            }
 //        }
 //    })

	// function close(e){
	// 	e.data.flb.close();
	// }

})