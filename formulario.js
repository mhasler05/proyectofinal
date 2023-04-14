$(document).ready(function() {
    $("#formu").validate(
        {
            rules: {
                nombre: {
                    required: true,
                    minlength: 3,
                },
                apellido: {
                   required: true,
            
                },
                email: {
                   required: true,
                   email: true
                },
                telefono: {
                    requiered: true,
                    
                }
           },
           messages: {
                nombre: {
                    required: "Este campo es requerido",
                    minlength: "Debe tener al menos 3 letras"
                },
                apellido: {
                    required: "Este campo es requerido",
    
                },
                email: {
                    email: "El email no tiene el formato requerido"
                },
                telefono: {
                    requiered: "Este campo es requerido",
                }
           }
        }
    )
  });

  $(document).ready(function() {
    // Selecciona todos los campos de entrada con la clase "solo-numeros"
    $("#telefono").on("input", function() {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  });
  
var campo1=$("#nombre");
var campo2=$("#apellido");
var campo3=$("#email");
var miBoton=("#botonGuardar")  
  
  $(document).ready(function() {
    $("#botonGuardar").click(function(){
        
        
        if (campo1.val() != "" && campo2.val() != "" && campo3.val() != "") {
                alert("Su formulario fue enviado con exito");
              } else {
               alert("Complete los campos faltantes")
              }}
     
            
            )

    });
