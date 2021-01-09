$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if(valor == 'todos'){
            $('.cont-work').show('1000');
        }else{
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });
    let nosotros = $('#nosotros').offset().top,
        productos = $('#productos').offset().top,
        servicios = $('#servicios').offset().top;

    window.addEventListener('resize', function(){
        let nosotros = $('#nosotros').offset().top,
            productos = $('#productos').offset().top,
            servicios = $('#servicios').offset().top;
    });
    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },400);
    });
    $('#enlace-nosotros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nosotros
        },450);
    });
    $('#enlace-productos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: productos + 130
        },450);
    });
    $('#enlace-servicios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios
        },450);
    });
});