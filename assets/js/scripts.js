function ImprimirDatosConsola(event) {
    // Evitar que el formulario se envíe
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const equipo = document.getElementById('equipo').options[document.getElementById('equipo').selectedIndex].text;

    // Imprimir los valores en la consola
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Dirección: " + direccion);
    console.log("Hincha de: " + equipo);
}


function LimpiarDatos() {
    event.preventDefault();
    // Selecciona el formulario
    const form = document.querySelector('form');
    
    // Reinicia todos los campos del formulario
    form.reset();
}