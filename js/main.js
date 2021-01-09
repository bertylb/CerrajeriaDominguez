// DECLARAR VARIABLES
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado =  true;

// FUNCION MENUS PARA ASIGNAR QUE CLASE SE VA A MOSTRAR
function menus(){
    let desplazamiento_actual = window.pageYOffset;

    // SI HACEMOS SCROLL SE MOSTRARA LA CLASE NAV1 CON SUS CARACTERISTICAS
    if(desplazamiento_actual <= 180){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '0.4s';
        menu.style.top = '80px';
    }else{ //MIENTRAS NO HAGAMOS SCROLL SE MOSTRARA LA CLASE NAV2
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        menu.style.top = '60px';
    }
}
// SI EL MENU ESTA ABIERTO
// CUANDO EL USUARIO TOQUE EN CUALQUIER SITIO QUE NO SEA EN EL BOTON
// O EN LA BARRA SUPERIOR
// EL MENU LATERAL SE VA A CERRAR 
window.addEventListener('click', function(e){
    if(cerrado === false){
        let open = document.querySelector('.lbl-menu');
        if(e.target !== open && e.target !== abrir){
            menu.style.width  = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
            abrir.checked = false;
        }
    }
})
// FUNCION PARA ABRIR Y CERRAR EL MENU LATERAL 
function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
        abrir.checked = false;
    }
}
// CUANDO LA PAGINA CARGUE SE VA AEJECUTAR LA FUNCION MENUS 
window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

// SI EL USUARIO HACE SCROLL SE EJECUTARA MENUS 
// Y TAMBIEN SE OCULTARA LA BARRA DE MENU LATERAL
window.addEventListener('scroll', function(e){
    menus();
    if(cerrado === false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width  = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
            abrir.checked = false;
        }
    }
})
// SI EL USUARIO HACE CLICK SE EJECUTARA LA FUNCION APERTURA 
abrir.addEventListener('click', function(){
    apertura();
})
// SI LA PAGINA SE REDIMENSIONA Y ES MAYOR A 700 PIXELES 
// AL MENU LATERAL SE LE QUITARAN LOS ESTILOS OVERFLOW Y WIDTH 
// ASI LA PAGINA NO SE DISTORCIONARA 
window.addEventListener('resize', function(){
    if(screen.width >= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
})

// LA FUNCION MENUS SE EJECUTARA SIEMPRE Y CUANDO LA PAGINA ESTE EN LA POSICION 0
// OSEA AL PRINCIPIO DE LA PAGINA.
// TAMBIEN SI LA PAGINA CARGA EN CUALQUIER POSICION 