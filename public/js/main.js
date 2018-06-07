$('.part').hover (
  function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(50);
	}
)

$('.part1').hover (
	function() {
		$('.description1').html($(this).attr('description-data1'));
		$('.description1').fadeIn();
	},
	function() {
		$('.description1').fadeOut(50);
	}
)

$('.part2').hover (
	function() {
		$('.description2').html($(this).attr('description-data2'));
		$('.description2').fadeIn();
	},
	function() {
		$('.description2').fadeOut(50);
	}
)

$('.part3').hover (
	function() {
		$('.description3').html($(this).attr('description-data3'));
		$('.description3').fadeIn();
	},
	function() {
		$('.description3').fadeOut(50);
	}
)

$('.part4').hover (
	function() {
		$('.description4').html($(this).attr('description-data4'));
		$('.description4').fadeIn();
	},
	function() {
		$('.description4').fadeOut(50);
	}
)