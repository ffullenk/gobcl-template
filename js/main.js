$(document).ready(function() {

	// Menú Movil
	$("#menu-movil ul li:last-child").append("<li><a id=" + "menu-movil-cerrar" + ">Cerrar Menú</a></li>");

	$("a#menu-movil-trigger").click(function() {
		$("#menu-movil").slideToggle("fast");
	});

	$("a#menu-movil-cerrar").click(function() {
		$("#menu-movil").slideToggle("fast");
	});
	
});