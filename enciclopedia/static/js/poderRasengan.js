let pelota = document.getElementById("div");
let velocidad = 50;
let mTop = 0;
let mLeft = 0;

document, addEventListener(
    "keydown",
    function(tecla_pulsada) {

        //https://www.youtube.com/watch?v=TgtKzeBXeeQ
        switch (tecla_pulsada.keyCode) {
            case 39:
                //Mover Deecha
                mLeft += velocidad;
                break;
            case 37:
                //Mover Izuierda
                mLeft -= velocidad;
                break;
            case 38:
                //Mover Arriba
                mTop -= velocidad;
                break;
            case 40:
                //Mover Abajo
                mTop += velocidad;
                break;
            default:
                //alert("ERROR");
                break;
        }

        if (tecla_pulsada.keyCode == 39 || tecla_pulsada.keyCode == 37) {
            pelota.style.marginLeft = mLeft + "px";
        } else if (tecla_pulsada.keyCode == 38 || tecla_pulsada.keyCode == 40) {
            pelota.style.marginTop = mTop + "px";
        }
    }
);