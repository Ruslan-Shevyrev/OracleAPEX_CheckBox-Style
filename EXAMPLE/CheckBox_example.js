$( document ).ready(function() {

	$('input[type="radio"]').click(function(){

	if ($(this).val() == 0){
		console.log($(this).prop('name')+' NO');
	} else {
		console.log($(this).prop('name')+' YES');
    };
});
	
});

