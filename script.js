
 $('.flip-box').click(function() {
    $(this).find('.flip-box-inner').toggleClass('flipped');			
 });

 $('#select-team').change(function(){
 	window.location.href = $('#select-team').val();
 })
