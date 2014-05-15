"use strict";

$('.button-1').click(function() {
	$('.unit-1').hide().fadeIn(1000);
});

$('.button-2').click(function() {
	$( ".animate-me" ).animate({ "left": "+=50px" }, "slow" );
});

$('.button-3').click(function() {
	$('.toggle').toggle();
});

$('.button-4').click(function() {
	$( ".findMe-2" ).children().css( "color", "blue" );
	
});

$('.button-5').click(function() {
	$( '.replaceMe' ).replaceWith("<h1>New Div</h1>");
	
});
