$(document).ready(function() {
    $('.timeline-row').each( function(i){
            
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},1500);
                
        }
        
    }); 
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.timeline-row').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});