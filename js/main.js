$(document).ready(function() {

	// Menú Movil
	$("#menu-movil ul li:last-child").append("<li><a id=" + "menu-movil-cerrar" + ">Cerrar Menú</a></li>");

	$("a#menu-movil-trigger").click(function() {
		$("#menu-movil").slideToggle("fast");
	});

	$("a#menu-movil-cerrar").click(function() {
		$("#menu-movil").slideToggle("fast");
	});

	// Tamaño de fuentes en posts
	$(".fontsize a").click(function() {

		var fsize = $(this).attr('data-size');

		$(".fontsize li").removeClass('current');

		$(this).parent().addClass('current');

		$('.post .texto .contenido p').css('fontSize', fsize + 'px');

	});
});