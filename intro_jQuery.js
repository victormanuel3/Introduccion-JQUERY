//1.1. Al clicar sobre #setBlueColor estableix el div #divMobil amb color de fons blau.
function clickSetBlueColor() {
    $("#divMobil").css({"background-color":"blue"})
}
$("#setBlueColor").click(clickSetBlueColor);

//1.2. Quan el mouse entri sobre #setBlueColor estableix el div #divMobil amb color de fons groc.
function mouseEnterSetBlueColor(){
    $("#divMobil").css({"background-color":"yellow"})
}
$("#setBlueColor").mouseenter(mouseEnterSetBlueColor);

//1.3. Al clicar sobre #setInvisible torna com a invisible el div #divMobil amb la funció .fadeOut()
function invisibleDivMobil(){
    $("#divMobil").fadeOut();
}
$("#setInvisible").click(invisibleDivMobil);

//1.4. Al clicar sobre #setVisible torna com a visible el div #divMobil amb la funció .fadeIn()
function visibleDivMobil(){
    $("#divMobil").fadeIn();
}
$("#setVisible").click(visibleDivMobil);

//1.5. Al clicar sobre #toggleVisible torna com a visible/invisible el div #divMobil amb la funció .fadeToggle()
function visible_invisible() {
    $("#divMobil").fadeToggle();
}
$("#toggleVisible").click(visible_invisible);

//1.6. Al clicar sobre #incRight augmenta “50px” la distància a l’esquerre del element #divMobil amb 
//una transició de 1.5 segons
function aumento_distancia() {
    $("#divMobil").css({"margin-left":"50px","transition":"1.5s"});
}
$("#incRight").click(aumento_distancia);

//1.7. Al clicar sobre #incSize augmenta “50px” la altura i amplada del element #divMobil amb una 
//transició de 1.5 segons.
function aumento_altura_anchura() {
    $("#divMobil").css({"width":"+=50px","height":"+=50px","transition":"1.5s"})
}
$("#incSize").click(aumento_altura_anchura);

//1.8. Al clicar sobre #resetSize restableix la seva altura i amplada a 30px i 200px respectivament
function resetSize() {
    $("#divMobil").css({"width":"200px", "height":"30px"});
}
$("#resetSize").click(resetSize);

//------------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXERCICIS JQUERY DOM<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*2.1. Quan es cliqui sobre el div #addDiv : crea un DIV de la clase .addDiv dins #domNodes amb el 
text indicat en #dades.*/
function anadirDiv() {
    let textodades = $("#dades").val();
    let element = $("<div>"+textodades+"</div>");/*cual en vez de añadir el texto asi con jquery como puedo añadir texto con html?*/
    element.addClass("addDiv");
    $("#domNodes").append(element);
}
$("#addDiv").click(anadirDiv);

/*2.2. Quan es cliqui sobre el div #setContentPrev :
2.2.1. crea un DIV amb el text 'setContentPrev' de la clase setContentPrev dins #domNodes. 
Al clicar a sobre el DIV creat, demana a l’usuari un text i mostra’l dins l’element anterior.
*/
function anadirdiv_setContent() {
    let element = $("<div>setContentPrev</div>");
    element.addClass("setContentPrev");
    $("#domNodes").append(element);
    element.click(function(){
        //demana a l’usuari un text i mostra’l dins l’element anterior.
        let txt = prompt("Indica un text");
        element.prev().text(txt);
    })
}
$("#setContentPrev").click(anadirdiv_setContent);

/*2.3. Quan es cliqui sobre el div #delPrevNode :
2.3.1. crea un DIV amb el text 'Remove Preview' , de la clase delPrevNode dins #domNodes. 
Al clicar sobre el DIV creat elimina el node anterior a el node clicat i canvia el color de fons 
del DIV clicat a verd.*/
$("#delPrevNode").click(
    function(){
        let nuevoDiv = $("<div></div>");
        nuevoDiv.addClass("delPrevNode");
        nuevoDiv.html("Remove preview");
        $("#domNodes").append(nuevoDiv);
        nuevoDiv.click(function() {
            $(this).prev().remove();
        })
    }
)

//--------------------------------------------------------------------------------------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXERCICIS PUNTUABLES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*4.1. [0.5p] Informació emergent:
4.1.1. Al situar el ratolí sobre la imatge ( de dins .contentImg), el div # infoImg ocupi el 100% 
de la altura de la imatge amb una transició de 1 segon. Al treure el ratolí de sobre, el div 
#infoImg torni a ocupar el 30% de la imatge amb una transició de 1 segon.*/
$(".contentImg").mouseenter(diseñoEntrarinfoImg)
$("#infoImg").mouseleave(diseñoSalirinfoImg)

function diseñoEntrarinfoImg() {
    $("#infoImg").stop();
    $("#infoImg").animate({"height":"100%"}, 1000);
}
function diseñoSalirinfoImg() {
    $("#infoImg").stop();
    $("#infoImg").animate({"height":"30%"}, 1000);
}

/*4.2. [0.5p] Mostrar ocultar modal:
4.2.1. Al clicar sobre #mostraModal canvia el display de #fonsModal i #contingutModal perquè 
passi a ser del tipus “block.”*/
$("#mostraModal").click(function(){
    $("#fonsModal").css({"display":"block"})
    $("#contingutModal").css({"display":"block"})
})

/*4.2.2. Al clicar sobre #fonsModal oculta els elements #fonsModal i #contingutModal.*/
$("#fonsModal").click(function() {
    $(this).css({"display":"none"})
    $("#contingutModal").css({"display":"none"})
})

/*4.3. [1p] Moviment continu
4.3.1. Al clicar sobre #movimentContinu es mogui contínuament l'element #divMobil
d'esquerre a dreta alternant els colors entre taronja i verd.*/

let PrimerClick = false;

function movimientoDerecha() {
    $("#divMobil").css({"background-color":"orange"});
    $("#divMobil").animate({"left":"89%"},{
        duration:2000,
        complete:movimientoIzquierda
    } );
}
function movimientoIzquierda() {
    $("#divMobil").css({"background-color":"green"});
    $("#divMobil").animate({"left":"0"}, {
        duration:2000,
        complete:movimientoDerecha
    });
}

/*4.3.2. Al clicar per segona vegada sobre #movimentContinu s’aturi el moviment de l'element 
#divMobil d'esquerre a dreta amb la funció .stop() i es canviï de color a taronja
*/
$("#movimentContinu").click(function() {
    if (!PrimerClick) {
         movimientoDerecha(); 
         PrimerClick = true;
    }else{
        $("#divMobil").stop().css({"background-color":"orange"});
        PrimerClick = false;
    }
})
//------------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXERCICIS PUNTUABLES DOM<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*5.1. [1p] Quan es cliqui sobre el div # addAttr :
5.1.1. crea un DIV amb el text 'Add one Attribute' , de la clase addAttr dins #domNodes. 
Al clicar sobre el DIV creat es demana a l’usuari un nom d’atribut, un valor d’atribut,
estableixi als germans de l’element clicat ,l’atribut de nom i valor indicat.*/
$("#addAttr").click(function() {
    let nuevoDiv = $("<div></div>");
    nuevoDiv.html("Add one Attribute");
    nuevoDiv.addClass("addAttr");
    $("#domNodes").append(nuevoDiv);
    nuevoDiv.click(function(){
        let atributoNombre = prompt("Introduce el atributo nombre:");
        let atributoValor = prompt("Introduce el atributo value:")

        $(this).siblings().attr(atributoNombre, atributoValor);
    })
})

/*5.2. [1p] Quan es cliqui sobre el div #delNextNode:
5.2.1. crea un DIV amb el text 'Remove Next' , de la clase delNextNode dins #domNodes. 
Al clicar sobre el DIV creat elimina el node posterior a el node clicat i modifica la altura del 
node clicat a 75px amb una transició de 1.5 segons.
Només es pot clicar una única vegada sobre #delNextNode
*/
$("#delNextNode").one('click', function() {
    let nuevoDiv = $("<div></div>");
    nuevoDiv.html("Remove Next");
    nuevoDiv.addClass("delNextNode");
    $("#domNodes").append(nuevoDiv);
    
    nuevoDiv.click(function() {
        $(this).next().remove();
        $(this).css({"height":"75px"}, {"transition":"1.5s"})
    });
})

//------------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXERCICIS PUNTUABLES SLICK<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*
Crea un slider que mostri informació de quatre pel·lícules. 
6.1. [1.5p]De cada pel·lícula s’ha de mostrar:
6.1.1. Títol, imatge, director, gènere/s
6.1.2. Quan la web tingui més de 800px: ---
6.1.2.1. mostra tres pel·lícules a la vegada 
6.1.2.2. mou el slider cada dos segons. 
6.1.2.3. Mostra botons personalitzats per moure el slider de dreta a esquerre
6.1.2.4. No mostris els punts.
6.1.3. Quan la web tingui menys de 800 px ---
6.1.3.1. mostra una única pel·lícula a la vegada (la resta igual )
6.1.4. Quan la web tingui menys de 600 px:---
6.1.4.1. mostra una única pelicula
6.1.4.2. oculta els botons personalitzats per moure el slider, 
6.1.4.3. mostra els punts
*/
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<button>Prev</button>",
    nextArrow: "<button>Next</button>",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        }
      }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
        }
      }
    ]
  });
  
/* 6.2. [1.5p] Permet eliminar una pel·lícula del slider. */
$('.js-remove-slide').on('click', function() {
    $('.slider').slick('slickRemove', 0); // Eliminar la película del slider en la posición 0
});

/*[3p]Exercici Puntuable jQuery Validator
 [1.5p] Crea un formulari que permeti crear una nova pel·lícula i afegir-la al slider validant que:
7.1.1. Títol: entre 1 y 20 caràcters y/o números.
7.1.2. Director: entre 5 y 20 lletres (Sense números).
7.1.3. Imatge: s’ha de permetre escollir una imatge d’un llistat d’imatges disponibles.
7.1.4. Gènere: s’ha de permetre escollir un o varis generes marcant diferents checkboxs.
7.2. 1.5p] Un formulari que permeti afegir un nou gènere al formulari anterior validant que com 
mínim tingui entre 2 y 7 lletres
*/
$("#formulario").validate({
    focusCleanup:true,
    rules: {
        titulo:{
            required:true,
            rangelength: [1, 20]
        }, director: {
            required:true,
            rangelength: [5, 20],
            digits: false,
            pattern: /^[a-zA-Z\s]*$/ 
        }, genero: {
            required: true
        }
    },
    messages: {
        titulo:{
            required:"camp obligatori",
            rangelength:"<div class='error'>Debes introducir un titulo entre 1 y 20 caracteres.</div>"    
        }, director: {
            required:"camp obligatori",
            rangelength:"<div class='error'>El nombre del director debe estar entre 5 y 20 caracteres.</div>",
            pattern:"<div class='error'>Solo se permiten letras y espacios.</div>" 
        }, genero: {
            required:"camp obligatori"
        }
    }
});


$(".add-slide").click(function() {
    let titulo = $("input[name='titulo']").val();
    let director = $("input[name='director']").val();
    let imagen = $("select[name='imagen']").val();
    let generos = [];

    $("input[type=checkbox]:checked").each(function(){
        generos.push($(this).val());
    });

    let nuevoDiv = $('<div class="pelicula"></div>'); // Corregido: 'nouDiv' a 'nuevoDiv'
    nuevoDiv.append("<p>Título: "+ titulo +"</p>");
    nuevoDiv.append("<p>Director: "+ director +"</p>");
    nuevoDiv.append("<img src='"+ imagen +"' alt='portada'>");
    if (generos.length > 0) {
        nuevoDiv.append("<p>Géneros: " + generos.join(", ") + "</p>");
    }

    $(".slider").slick('slickAdd', nuevoDiv);
});







