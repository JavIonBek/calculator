$(document).ready(function () {
 	var isOperation = false;
 	var isEqual = false;
 	var displayVal = $('#Display').val();

	// Tugmani bosganda ekranga chiqarish
	$('.btn').on('click', function () {
		var btnValue = $(this).text();
	    if(btnValue == '+' || btnValue == '-' || btnValue == '/' || btnValue == '*') {
	    	isOperation = true;
	    	displayVal += btnValue;
	    	if(isEqual) {
	    		isEqual = false;
	    		displayVal = '';
	    	}
	    } else {
        displayVal += btnValue;
        $('#Display').val( $("#Display").val() + btnValue );
        if (isEqual) {
			    $('#Display').val('');
			    displayVal = '';
			    isEqual = false;
				}
	    }
	    isEqual = false;
	});

	// Natijani chiqarish
	$('#result').on('click', function () {
	    $('#Display').val( eval( displayVal ) ); 
	    isOperation = false;
	    isEqual = true;
	});	

	// Ekranni tozalash
	$('#clear').on('click', function () {
	    $('#Display').val('');
	    displayVal = '';
	    isOperation = false;
	    isEqual = false;
	});

});