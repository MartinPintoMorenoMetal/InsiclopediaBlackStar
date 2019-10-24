var n = 0;
document.getElementById("cuadrado").style.background = 'red';

$(document).ready(
    function atraer() {
        if (n == 60) {
            n = n - 5
        } else {
            n = n + 5
        }
        document.getElementById("cuadrado").style.marginLeft = n + 'px'
        document.getElementById("img2").style.transform = 'rotate(' + n + 'deg)'

        setTimeout(atraer, 1000)
    }

)