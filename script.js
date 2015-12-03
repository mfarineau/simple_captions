/**
 *@file
 * When a class "caption" is applied to an image, this grabs the alt-text for the image and inserts it into a new <div> placed below the image with a class "caption-text-[float]". The width, left-margin, right-margin, bottom-margin, float, and clear properties of the image are passed into the caption-text <div> as well. 
 **/

jQuery(document).ready(function($){
	
	$('.caption').each(function(i, obj) {
		$(obj).after( "<div class='caption-text-" + $(obj).css('float') + "' style='clear:both;float:" + $(obj).css('float') + ";margin-top:0px;margin-left:" + $(obj).css('marginLeft') + ";margin-right:" + $(obj).css('marginRight') + ";margin-bottom:" + $(obj).css('marginTop') + ";width:"+ ($(obj).width()-10) +"px;'>" + $(obj).attr('alt') + "</div>" );
	});
	
});
