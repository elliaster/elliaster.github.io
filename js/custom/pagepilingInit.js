$(document).ready(function() {
	/* Plugin intialization */
	$('#pagepiling').pagepiling({
		menu: '#menu',
		anchors: ['index', 'labs', 'projects', 'aboutme'],
		sectionsColor: ['#fff', '#A6C0FF', '#fff'],
		navigation: {
			'position': 'right',
			'tooltips': ['Home', 'Labs', 'Projects', 'About Me']
		},
		afterRender: function(){
			$('#pp-nav').addClass('custom');
		},
		afterLoad: function(anchorLink, index){
			if(index>1){
				$('#pp-nav').removeClass('custom');
			}else{
				$('#pp-nav').addClass('custom');
			}
		}
	});

	/* Internal use of the demo website */
	$('#showExamples').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('#examplesList').toggle();
	});

	$('html').click(function(){
		$('#examplesList').hide();
	});

	$('.arrow').click(function () {
		$.fn.pagepiling.moveSectionDown();
	});
	$('.arrowUp').click(function () {
		$.fn.pagepiling.moveTo(1);
	});

});
