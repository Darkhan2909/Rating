// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $(".reviews-stars button").click(function(){
        let ratingValue=$(this).data("rate");
         $(".reviews-stars input").val(ratingValue);
          $(".reviews-stars button").each(function(){
           if($(this).data("rate")<=ratingValue){
              $(this).addClass("active")
            }else{
              $(this).removeClass("active")
            }
       });
      });
});
