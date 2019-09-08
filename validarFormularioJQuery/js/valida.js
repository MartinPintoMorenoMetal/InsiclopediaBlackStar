//jquery
$(function() {
    ("#contacto").validate({
        rules: {
            mail: {
                required: true,
                mail: true
            },

            nombre: {
                required: true,
                nombre: true
            }
        },
        messages: {
            mail: {
                required: 'Ingresa tu correo electrónico',
                mail: 'Formato de correo no válido'
            },
            nombre: {
                required: 'Ingresa tu nombre',
                minlength: 'Largo insuficiente'
            },

        }
    });
});

$(document).ready(function() {
    $("#contact-form").validate({
        event: "blur",
        rules: { 'name': "required", 'email': "required email", 'message': "required" },
        messages: { 'name': "Por favor, indica tu nombre", 'email': "Por favor, indica tu correo", 'message': "Por favor, dime algo!" },
        debug: true,
        errorElemen: "label",
        submitHandler: function(form) {
            $("#alert").show();
            $("#alert").html("<img src='images/ajax-loader.gif' style='vertical-align:middle;margin:0 10px 0 0' /><strong>Enviando mensaje...</strong>");
            setTimeout(function() {
                $('#alert').fadeOut('slow');
            }, 5000);
            $.ajax({
                type: "POST",
                url: "#",
                data: "name=" + escape($('#name').val()) + "&email=" + escape($('#email').val()) + "&message=" + escape($('#message').val()),
                success: function(msg) {
                    $("#alert").html(msg);
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";
                    setTimeout(function() {
                        $('#alert').fadeOut('slow');
                    }, 5000);

                }
            });
        }
    });
});


function validarFormulario() {
    jQuery.validator.messages.required = 'Esta campo es obligatorio.';
    jQuery.validator.messages.number = 'Esta campo debe ser numérico.';
    jQuery.validator.messages.email = 'El de correo es incorrecto.';
    $("#enviar").click(function() {
        var validado = $("#contacto").valid();
        if (validado) {
            alert('El formulario es correcto.');
        }
    });
}


$(function() {
    $('.boton').on('click', function() {
        var nombre = $('#nombre').val();

        if (nombre == null || nombre.length == 0) {
            alert('ERROR: El campo nombre no debe ir vacío' + nombre);
            $('#nombre').addClass('error');
            $('#nombre').removeClass('exito');
        } else {
            $('#nombre').removeClass('error');
            $('#nombre').addClass('exito');
        }

        var mail = $('#mail').val();

        if (mail == null || mail.length == 0) {
            alert('ERROR: El campo email no debe ir vacío');
            $('#mail').addClass('error');
            $('#mail').removeClass('exito');
        } else {
            $('#mail').removeClass('error');
            $('#mail').addClass('exito');
        }

    })
});

javaScript

function validarNombre() {

    var nombre = document.getElementById("nombre").value;
    var txtNombre = document.getElementById("nombre");

    //Test campo obligatorio
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
        txtNombre.classList.add('error');
    } else {
        txtNombre.classList.remove('error');
    }
}

function validarCorreo() {

    var correo = document.getElementById("mail").value;
    var txtCorreo = document.getElementById("mail");

    //Test correo
    if (correo == null || correo.length == 0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo))) {
        alert('ERROR: Debe escribir un correo válido');
        txtCorreo.classList.add('error');
    } else {
        txtCorreo.classList.remove('error');
    }
}


function validarFormulario() {
    validarNombre();
    validarCorreo();
}