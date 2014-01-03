$(function(){

	var $document = $(document);

	var sections = {
		introduction: $('#introduction'),
		customize: $('#customize'),
		documentation: $('#documentation')
	};
	var activeSection = sections.introduction;

	$('.change-section').click(function(e){
		var $target = $(e.currentTarget);
		var clickedSection = $target.data().section;

		if (!clickedSection || sections[clickedSection] === activeSection){
			return;
		}

		$('.change-section.active').removeClass('active');
		$target.addClass('active');

		activeSection.fadeOut(function(){
			$document.scrollTop(0);
			activeSection = sections[clickedSection];
			activeSection.fadeIn();
		});

		e.preventDefault();
	});

	// var $header = $('.main-header-container');
	// var $nav = $('.nav-container');

	// var start = $header.scrollTop();
	// var end = 70;

	// var scrolled;
	// var before = true;
	// var after = false;
	// $(document).scroll(function(e){
	// 	scrolled = $(document).scrollTop();

	// 	// change to header
	// 	if (after && scrolled < end) {
	// 		$nav.fadeOut();
	// 		$header.fadeIn();

	// 		// $header.toggleClass('hide');
	// 		// $nav.toggleClass('hide');
	// 		before = true;
	// 		after = false;
	// 	}

	// 	if (before && scrolled > end) {
	// 		$header.fadeOut();
	// 		$nav.fadeIn();

	// 		// $header.toggleClass('hide');
	// 		// $nav.toggleClass('hide');
	// 		before = false;
	// 		after = true;
	// 	}

	// });

});