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
                    minlength: "Debe tener al menos 3 letras",
                },
                apellido: {
                    required: "Este campo es requerido",
    
                },
                email: {
                    email: "El email no tiene el formato requerido",
                },
                telefono: {
                    requiered: "Este campo es requerido",
                }
           }
        }
    )
  });

  $(document).ready(function() {
    $("#telefono").on("input", function() {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  });
$(document).ready(function() {
    $("#nombre").on("input", function() {
      this.value = this.value.replace(/[^a-zA-Z]/g, '');
    });
  });

  $(document).ready(function() {
    $("#apellido").on("input", function() {
      this.value = this.value.replace(/[^a-zA-Z]/g, '');
    });
  });
    


var campo1=$("#nombre");
var campo2=$("#apellido");
var campo3=$("#email");
var campo4=$("#telefono"); 
  
  $(document).ready(function() {
    $("#botonGuardar").click(function(){
        
        
        if (campo1.val() != "" && campo2.val() != "" && campo3.val() != "" && campo4.val() != "") {
                alert("Su formulario fue enviado con exito");
              } else {
               alert("Complete los campos faltantes")
              }}
     
            
            )

    });
document.addEventListener("DOMContentLoaded", () => {
        const $boton = document.querySelector("#botonPDF");
        $boton.addEventListener("click", () => {
            const $elementoParaConvertir = document.body; 
            html2pdf()
                .set({
                    margin: 1,
                    filename: 'documento.pdf',
                    image: {
                        type: 'jpeg',
                        quality: 0.98,
                    },
                    html2canvas: {
                        scale: 3, 
                        letterRendering: true,
                    },
                    jsPDF: {
                        unit: "in",
                        format: "a3",
                        orientation: "portrait",
                    }
                })
                .from($elementoParaConvertir)
                .save()
                .catch(err => console.log(err));
        });
    });

    var campo1=$("#nombre");
    var campo2=$("#apellido");
    var campo3=$("#email");
    var miBoton=("#botonGuardar")  

    
        function verificarCampos() {
            if (campo1.val() != "" && campo2.val() != "" && campo3.val() != "") {
              miBoton.prop("disabled", false);
            } else {
              miBoton.prop("disabled", true);
            }
          };
    
          verificarCampos();
