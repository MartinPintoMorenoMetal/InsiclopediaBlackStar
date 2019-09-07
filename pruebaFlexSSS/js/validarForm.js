//jquery
$(document).ready(function() {
    $('#fecha').val(new Date().toDateInputValue());
    document.getElementById('fecha').defaultValue = new Date().toDateInputValue();
    $(function() {
        $("contacto").validate({
            rules: {
                nombre: {
                    required: true,
                    nombre: true
                },

                email: {
                    required: true,
                    email: true
                },

                apellidos: {
                    required: true,
                    apellidos: true
                },

                usuario: {
                    required: true,
                    usuario: true
                },
            },
            messages: {
                nombre: {
                    required: 'Ingresa tu nombre ',
                    minlength: 'Largo insuficiente'
                },
                email: {
                    required: 'Ingresa un correo electronico',
                    email: 'Formato de correo no válido'
                },
                apellidos: {
                    required: 'Ingresa tus apellidos ',
                    minlength: 'Largo insuficiente'
                },
                usuario: {
                    required: 'Ingresa nombre de usuario',
                    minlength: 'Largo insuficiente'
                },
            }
        });
    });


    $(function() {
        $('.btn-enviar').on('click', function() {

            var nombre = $('nombre').val();
            if (nombre == null || nombre.length == 0) {
                alert('ERROR: El campo nombre no debe ir vacío ' + nombre);
                $('#nombre').addClass('error');
                $('#nombre').removeClass('exito');
            } else {
                $('#nombre').removeClass('error');
                $('#nombre').addClass('exito');
            }

            var email = $('email').val();
            if (email == null || email.length == 0) {
                alert('ERROR: El campo email no debe ir vacío ' + email);
                $('#email').addClass('error');
                $('#email').removeClass('exito');
            } else {
                $('#email').removeClass('error');
                $('#email').addClass('exito');
            }

            var apellidos = $('apellidos').val();
            if (apellidos == null || apellidos.length == 0) {
                alert('ERROR: El campo apellidos no debe ir vacío ' + apellidos);
                $('#apellidos').addClass('error');
                $('#apellidos').removeClass('exito');
            } else {
                $('#apellidos').removeClass('error');
                $('#apellidos').addClass('exito');
            }

            var usuario = $('usuario').val();
            if (usuario == null || usuario.length == 0) {
                alert('ERROR: El campo usuario no debe ir vacío ' + usuario);
                $('#usuario').addClass('error');
                $('#usuario').removeClass('exito');
            } else {
                $('#usuario').removeClass('error');
                $('#usuario').addClass('exito');
            }
        })
    });


    // funciones de validaciones para el nombre
    function validarNombre() {
        var nombre = document.getElementById("nombre").value;
        var txtNombre = document.getElementById("nombre");
        // Texto obligatorio
        if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
            alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
            txtNombre.classList.add('error');
        } else {
            txtNombre.classList.remove('error');
        }
    }

    // funciones de validaciones para el email
    function validarCorreo() {

        var email = document.getElementById("email").value;
        var txtEmail = document.getElementById("email");

        //Test correo
        if (email == null || email.length == 0 || !(/\S+@\S+\.\S+/.test(email))) {
            alert('ERROR: Debe escribir un email válido');
            txtEmail.classList.add('error');
        } else {
            txtEmail.classList.remove('error');
        }
    }

    // funciones de validaciones para el apellido
    function validarApellido() {
        var apellidos = document.getElementById("apellidos").value;
        var txtApellidos = document.getElementById("apellidos");

        // Texto obligatorio
        if (apellidos == null || apellidos.length == 0 || /^\s+$/.test(apellidos)) {
            alert('ERROR: El campo Apellido no debe ir vacío o lleno de solamente espacios en blanco');
            txtApellidos.classList.add('error');
        } else {
            txtApellidos.classList.remove('error');
        }
    }

    // funciones de validaciones para el usuario
    function validarUsuario() {
        var usuario = document.getElementById("usuario").value;
        var txtUsuario = document.getElementById("usuario");

        // Texto obligatorio
        if (usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)) {
            alert('ERROR: El campo usuario no debe ir vacío o lleno de solamente espacios en blanco');
            txtUsuario.classList.add('error');
        } else {
            txtUsuario.classList.remove('error');
        }
    }

});



$(function() {
    $('#nombre').on('blur', function() {
        var nombre = $('#nombre').val();

        if (nombre == null || nombre.length == 0) {
            alert('ERROR: El campo nombre no debe ir vacío' + nombre);
            $('#nombre').addClass('error');
            $('#nombre').removeClass('exito');
        } else {
            $('#nombre').removeClass('error');
            $('#nombre').addClass('exito');
        }
    })
});

$(function() {
    $('#email').on('blur', function() {
        var email = $('#email').val();

        if (email == null || email.length == 0) {
            alert('ERROR: El campo email no debe ir vacío' + email);
            $('#email').addClass('error');
            $('#email').removeClass('exito');
        } else {
            $('#email').removeClass('error');
            $('#email').addClass('exito');
        }
    })
});

$(function() {
    $('#apellidos').on('blur', function() {
        var apellidos = $('#apellidos').val();

        if (apellidos == null || apellidos.length == 0) {
            alert('ERROR: El campo apellidos no debe ir vacío' + apellidos);
            $('#apellidos').addClass('error');
            $('#apellidos').removeClass('exito');
        } else {
            $('#apellidos').removeClass('error');
            $('#apellidos').addClass('exito');
        }
    })
});


$(function() {
    $('#usuario').on('blur', function() {
        var usuario = $('#usuario').val();

        if (usuario == null || usuario.length == 0) {
            alert('ERROR: El campo usuario no debe ir vacío' + usuario);
            $('#usuario').addClass('error');
            $('#usuario').removeClass('exito');
        } else {
            $('#usuario').removeClass('error');
            $('#usuario').addClass('exito');
        }
    })
});

function validarFormulario() {
    validarNombre()
    validarApellido()
    validarCorreo()
    validarUsuario()
};