function agregar(){

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-info',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Esta seguro de agregar?',
    type: 'success',
    showCancelButton: true,
    confirmButtonText : 'Si',
  
    cancelButtonText: 'No',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      swalWithBootstrapButtons.fire(
        'Agregado'
         )  
       document.crudF.submit();
        } else if (
      /* Read more about handling disissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado'
      )
      window.location.replace('../'); 
    }
  
  })}
  
  function editar(nombre){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-info',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Esta seguro de modificar?',
      text:'No se podra recuperar el registro',
      type: 'success',
      showCancelButton: true,
      confirmButtonText : 'Si',
    
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Modificado'
           )  
         document.crudF.submit();
          } else if (
        /* Read more about handling disissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado'
        )
        window.location.replace('../../'); 
        
        
      }
    
    })}

    
    
  
  function borrar(id){
  
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-info',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Esta seguro de eliminar al no.' +id +'?',
    text:'No se podra recuperar el registro',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText : 'Si',
    cancelButtonText: 'No',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      swalWithBootstrapButtons.fire(
        'Eliminado',
        'success'
         )  
      
         location.href="crud/delete/"+id;
    } else if (
      /* Read more about handling disissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        '',
        'error'
      )
    }
  })}
  