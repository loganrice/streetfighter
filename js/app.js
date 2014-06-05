var MOUSEOVERRYU = false

$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		HideAllExcept($('.ryu-ready'));
		MOUSEOVERRYU = true;
	})
	.mouseleave(function() {
		HideAllExcept($('.ryu-still'));
		MOUSEOVERRYU = false;
	})
	.mousedown(function(){
		playHadouken();
		HideAllExcept($('.ryu-throwing'));
		$('.hadouken').finish().show().animate(
		  {'left': '1000px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '435px');
		  }
		);
	})
	.mouseup(function() {
		HideAllExcept($('.ryu-ready'));
	})

	$(document).on("keydown", function(event) {
		if (event.which == 88) {
			HideAllExcept($('.ryu-cool'));
		}
	})
	.on("keyup", function() {
		if (MOUSEOVERRYU == true ) {
			HideAllExcept($('.ryu-ready'));
		} else {
			HideAllExcept($('.ryu-still'));
		}
	})
})

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function HideAllExcept(visible) {
	$('.ryu-pose').hide();
	visible.show();
}