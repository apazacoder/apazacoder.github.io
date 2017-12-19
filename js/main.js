_navbar = $(".navbar-fixed-top");
$("a", _navbar).on('click', function (e) {
	e.preventDefault();

	var hash = this.hash;
	var alto = _navbar.height();

	$('html, body').animate({
		scrollTop: $(hash).offset().top - alto
	}, 300, function () {
		// se añade el hash al url pero no con window.location para evitar saltos
		return window.history.pushState(null, null, hash);
	});
});

var _boton_arriba = $(".boton-arriba");
_boton_arriba.fadeOut(0);
$(window).on("scroll", function (e) {
	if ($(this).scrollTop() >= 450) {
		_boton_arriba.fadeIn(500);
	} else {
		_boton_arriba.fadeOut(500);
	}
});

_boton_arriba.on('click', function (e) {
	e.preventDefault();

	var hash = this.hash;
	var alto = _navbar.height();

	$('html, body').animate({
		scrollTop: $(hash).offset().top - alto
	}, 300, function () {
		// se añade el hash al url pero no con window.location para evitar saltos
		return window.history.pushState(null, null, hash);
	});
});