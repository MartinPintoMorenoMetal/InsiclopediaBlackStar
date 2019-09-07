var COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba',
    '#ffffff'
];

$(document).ready(
    function ramdom() {
        numero = Math.floor((Math.random() * 10) + 1)
            //document.body.style.background = COLORS[numero]
        document.getElementById("cuadrado").style.background = COLORS[numero]
        setTimeout(ramdom, 1000)
    }
)