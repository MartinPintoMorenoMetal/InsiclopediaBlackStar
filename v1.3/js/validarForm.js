//jquery
/*
$(function() {
    ("#contacto").validate({
        rules: {
            email: {
                required: true,
                email: true
            },

            nombre: {
                required: true,
                nombre: true
            },

            apellidos: {
                required: true,
                apellidos: true

            },
            usuario: {
                required: true,
                usuario: true

            },

            contraseña: {
                required: true,
                usuario: true

            },

        },
        messages: {
            email: {
                required: 'Ingresa tu correo electrónico',
                email: 'Formato de correo no válido'
            },
            nombre: {
                required: 'Ingresa tu nombre',
                minlength: 'Largo insuficiente'
            },
            apellidos: {
                required: 'Ingresa tu apellidos',
                minlength: 'Largo insuficiente'

            },
            usuario: {
                required: 'Ingresa tu usuario',
                minlength: 'Largo insuficiente'

            },
            contraseña: {
                required: 'Ingresa tu contraseña',
                minlength: 'Largo insuficiente'

            },
        }
    });
});
*/
$(document).ready(function() {
    $("#contact-form").validate({
        event: "blur",
        rules: { 'nombre': "required", 'email': "required email", 'apellidos': "required", 'usuario': "required", 'contraseña': "required" },
        messages: { 'nombre': "Por favor, indica tu nombre", 'email': "Por favor, indica tu correo", 'apellidos': "Por favor, indica tus apellidos", 'usuario': "Por favor, indica tu nombre de usuario", 'contraseña': "Por favor, indica tu contraseña de usuario" },
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
                data: "nombre=" + escape($('#nombre').val()) + "&email=" + escape($('#email').val()) + "&apellidos=" + escape($('#apellidos').val()) + "&usuario=" + escape($('#usuario').val()),
                success: function(msg) {
                    $("#alert").html(msg);
                    document.getElementById("nombre").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("apellidos").value = "";
                    document.getElementById("usuario").value = "";
                    document.getElementById("contraseña").value = "";
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
    jQuery.validator.messages.contraseña = 'La contraseña es incorrecto.';
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

        var email = $('#mail').val();

        if (email == null || email.length == 0) {
            alert('ERROR: El campo email no debe ir vacío' + email);
            $('#email').addClass('error');
            $('#email').removeClass('exito');
        } else {
            $('#email').removeClass('error');
            $('#email').addClass('exito');
        }

        var apellidos = $('#apellidos').val();

        if (apellidos == null || apellidos.length == 0) {
            alert('ERROR: El campo apellidos no debe ir vacío' + apellidos);
            $('#apellidos').addClass('error');
            $('#apellidos').removeClass('exito');
        } else {
            $('#apellidos').removeClass('error');
            $('#apellidos').addClass('exito');
        }

        var usuario = $('#usuario').val();

        if (usuario == null || usuario.length == 0) {
            alert('ERROR: El campo usuario no debe ir vacío' + usuario);
            $('#usuario').addClass('error');
            $('#usuario').removeClass('exito');
        } else {
            $('#usuario').removeClass('error');
            $('#usuario').addClass('exito');
        }

        var contraseña = $('#contraseña').val();

        if (contraseña == null || contraseña.length == 0) {
            alert('ERROR: El campo contraseña no debe ir vacío' + contraseña);
            $('#contraseña').addClass('error');
            $('#contraseña').removeClass('exito');
        } else {
            $('#contraseña').removeClass('error');
            $('#contraseña').addClass('exito');
        }

    })
});

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

    var correo = document.getElementById("email").value;
    var txtCorreo = document.getElementById("email");

    //Test correo
    if (correo == null || correo.length == 0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo))) {
        alert('ERROR: Debe escribir un correo válido');
        txtCorreo.classList.add('error');
    } else {
        txtCorreo.classList.remove('error');
    }
}

function validarApellidos() {

    var apellidos = document.getElementById("apellidos").value;
    var txtApellidos = document.getElementById("apellidos");

    //Test campo obligatorio
    if (apellidos == null || apellidos.length == 0 || /^\s+$/.test(apellidos)) {
        alert('ERROR: El campo apellidos no debe ir vacío o lleno de solamente espacios en blanco');
        txtApellidos.classList.add('error');
    } else {
        txtApellidos.classList.remove('error');
    }
}

function validarUsuario() {

    var usuario = document.getElementById("usuario").value;
    var txtUsuario = document.getElementById("usuario");

    //Test campo obligatorio
    if (usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)) {
        alert('ERROR: El campo usuario no debe ir vacío o lleno de solamente espacios en blanco');
        txtUsuario.classList.add('error');
    } else {
        txtUsuario.classList.remove('error');
    }
}

function validarContraseña() {

    var contraseña = document.getElementById("contraseña").value;
    var pswContraseña = document.getElementById("contraseña");

    //Test campo obligatorio
    if (contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña)) {
        alert('ERROR: El campo contraseña no debe ir vacío o lleno de solamente espacios en blanco');
        pswContraseña.classList.add('error');
    } else {
        pswContraseña.classList.remove('error');
    }
}


function validarFormulario() {
    validarNombre();
    validarCorreo();
    validarApellidos();
    validarUsuario();
    validarContraseña();
}