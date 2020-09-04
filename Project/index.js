// A function is called on the screen scroll
window.onscroll = function() {myFunction()};
var count = 0 ;
function myFunction() {
    if (window.pageYOffset != undefined) 
    { 
        scrolled = pageYOffset; 
    }
    else 
    { 
        var y_axis ;
        y_axis = document.documentElement.scrollLeft || document.body.scrollTop || 0;
        scrolled =  y_axis; 
        // Checking the height of the scroller
    } 
    if (scrolled > 870) 
    {
        
        if(count == 0)
        {
            myMove();
            // Call the function only once
            count++;
        }
        function myMove() {
            var elem = document.querySelector(".img2");   
            var pos = 0 ;
            var hid ;
            var wid ;
            var post ;
            var id = setInterval(frame, 5);
            function frame() {
              if (pos == 400) {
                clearInterval(id);
              } else {
                // We are simultaneously decreasing the height and the width of the picture and also moving it in between the laptop skin
                pos++; 
                hid = 949 - pos ;
                elem.style.height = hid + "px";
                wid = 1519 - (1.625*pos) ;
                elem.style.width = wid + "px"; 
                if(pos < 321){
                    elem.style.left = pos ;
                    post = pos * 4.577151 ;
                    elem.style.top = post ;
                }
              }
            }
          }

    }
}      
