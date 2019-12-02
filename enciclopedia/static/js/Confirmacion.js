function Confirmaralerta(id) {
    Swal.fire({
        title: 'seguro?',
        text: "no podras recuperar",
        icon: 'Atencion',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          //redirifir a la ruta de eliminar
          window.location.href = "eliminar_post/"+id+"/";
        }
      })
}
