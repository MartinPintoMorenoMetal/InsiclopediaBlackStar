$(document).ready(

    function reloj() {
        monemtoActual = new Date()
        segundo = monemtoActual.getSeconds()
        minuto = monemtoActual.getMinutes()
        hora = monemtoActual.getHours()
        document.form_reloj.reloj.value = hora + ':' + minuto + ':' + segundo

        setTimeout(reloj, 1000)
    }

)