
		function mostrarResumen() {
		
			var nombre = document.getElementById("nombre").value;
			var correo = document.getElementById("correo").value;
			var telefono = document.getElementById("telefono").value;
			var producto = document.getElementById("producto").value;
            var producto2 = document.getElementById("producto2").value;
            var producto3 = document.getElementById("producto3").value;
			var cantidad = document.getElementById("cantidad").value;
            var cantidad2 = document.getElementById("cantidad2").value;
            var cantidad3 = document.getElementById("cantidad3").value;
			var direccion = document.getElementById("direccion").value;
			var resumen = "<h2>Resumen del pedido</h2>";
			resumen += "<p><strong>Nombre:</strong> " + nombre + "</p>";
			resumen += "<p><strong>Correo electrónico:</strong> " + correo + "</p>";
			resumen += "<p><strong>Teléfono:</strong> " + telefono + "</p>";
			resumen += "<p><strong>Producto:</strong> " + producto + "</p>";
			resumen += "<p><strong>Cantidad:</strong> " + cantidad + "</p>";
            resumen += "<p><strong>Producto2:</strong> " + producto2 + "</p>";
			resumen += "<p><strong>Cantidad2:</strong> " + cantidad2 + "</p>";
            resumen += "<p><strong>Producto3:</strong> " + producto3 + "</p>";
			resumen += "<p><strong>Cantidad3:</strong> " + cantidad3 + "</p>";
			resumen += "<p><strong>Dirección de envío:</strong> " + direccion + "</p>";
			document.getElementById("resumen").innerHTML = resumen;
		};

        document.addEventListener("DOMContentLoaded", () => {
            const $boton2 = document.querySelector("#botonPDF");
            $boton2.addEventListener("click", () => {
                const $elementoParaConvertir2 = document.body; 
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
                    .from($elementoParaConvertir2)
                    .save()
                    .catch(err => console.log(err));
            });
        });

      