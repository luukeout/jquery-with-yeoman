"use strict";

$('.button-1').click(function() {
	$('.hero-unit').hide().fadeIn(1000);
});

$('.button-2').click(function() {
	$( ".animate-me" ).animate({ "left": "+=50px" }, "slow" );
});

$('.button-3').click(function() {
	$('.unit-3').children('p').toggle();
});

