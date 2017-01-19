$(document).ready(function(){

   $.getJSON("slide.json",  function(data) {

        $.each(data, function() {
            setInterval(test,4000)
            var i = -1
                function test(){
                    i += 1
                        if(i === 4) {
                            i =0
                        }
                        
                    $("img").attr('src',(data.pictures[i].url)).fadeIn(800).delay(2000).fadeOut(900).delay(300);                
                }
            console.log()
        });
    });

});