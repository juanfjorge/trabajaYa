const mensajes= document.getElementById("msjs");
const crearSvc = document.getElementById("crearSvc");
const administarServicios = document.getElementById("administarServicios");
const rese = document.getElementById("resenias");
document.querySelector("#btnradio1").addEventListener("click", function () {   
    mensajes.style.display = "none";
    crearSvc.style.display="block";
    administarServicios.style.display= "none";
    rese.style.display= "none";
    
});

document.querySelector("#btnradio2").addEventListener("click", function () {   
    mensajes.style.display = "grid";
    crearSvc.style.display="none";
    administarServicios.style.display= "none";
    rese.style.display= "none";
});
document.querySelector("#btnradio3").addEventListener("click", function () {   
    administarServicios.style.display= "block";
    mensajes.style.display = "none";
    rese.style.display="none";
    crearSvc.style.display="none";
});
document.querySelector("#btnradio4").addEventListener("click", function () {   
    administarServicios.style.display= "none";
    mensajes.style.display = "none";
    rese.style.display="flex";
    rese.style.justifyContent="center";
    rese.style.flexDirection="column";
    rese.style.alignItems="center";
    crearSvc.style.display="none";
});


document.querySelector('.btn-warning').addEventListener('click', function () {
    const vistaPrevia =document.getElementById('vistaPrevia');
    const formulario = document.getElementsByClassName('formulario')[0];

    vistaPrevia.style.display = "none";
    formulario.style.display = "block";
});



document.getElementById("btnSiguiente").addEventListener('click', function () {
    // Obtener valores del formulario
    const titulo = document.getElementById('inputAddress2').value;
    const ciudad = document.getElementById('inputCity').value;
    const descripcion = document.getElementById('exampleFormControlTextarea1').value;
    const servicio = document.getElementById('inputState').value;
    const imagenInput = document.getElementById('formFileSm');
    const vistaPrevia =document.getElementById('vistaPrevia');
    const formulario = document.getElementsByClassName('formulario')[0];

    // Seleccionar elementos de vista previa
    const cardTitulo = document.querySelector('.contenido h6');
    const cardNombre = document.querySelector('.contenido h4');
    const cardDescripcion = document.querySelector('.contenido .descripcion p');
    const cardCiudad = document.querySelector('.contenido p strong');
    const cardUbicacion = document.querySelector('.contenido p.mb-1.mt-3');
    const cardImagen = document.querySelector('.imagen img');
    
    // Actualizar contenido
    cardTitulo.textContent = servicio;
    cardNombre.textContent = titulo;
    cardDescripcion.textContent = descripcion;
    vistaPrevia.style.display = "block";
    formulario.style.display = "none";
    cardUbicacion.innerHTML = `<strong>Ubicación:</strong> ${ciudad}`;
    
    // Mostrar imagen seleccionada
    const file = imagenInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            cardImagen.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
                  