window.onhashchange = function () { // Scrolling
	hash = location.hash.substring(1)
	switch (hash) {
		case 'about':
			document.querySelector('#about').scrollIntoView()
			break
		case 'experience':
			document.querySelector('#experience').scrollIntoView()
			break
		case 'education':
			document.querySelector('#education').scrollIntoView()
			break
		case 'skills':
			document.querySelector('#skills').scrollIntoView()
			break
		case 'interests':
			document.querySelector('#interests').scrollIntoView()
			break
		case 'awards':
			document.querySelector('#awards').scrollIntoView()
			break
		default:
			break
	}
}

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function () {
	$('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
	target: '#sideNav'
});
