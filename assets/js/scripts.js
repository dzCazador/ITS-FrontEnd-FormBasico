function ImprimirDatosConsola(event) {
    const form = document.getElementById('registro');
    //Valido Campos Obligatorios
    if (form.checkValidity()) {
        // Evitar que el formulario se envíe
        event.preventDefault(); 

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const contrasenia = document.getElementById('contrasenia').value;
        const equipo = document.getElementById('equipo').options[document.getElementById('equipo').selectedIndex].text;

        const formData = {
            nombre: nombre,
            apellido: apellido,
            equipo: equipo,
            email: email,
            contrasenia: contrasenia
        };

        // Imprimir el objeto JSON en la consola
        console.log(formData);
    }
}

function cambioEquipo(equipo){
    document.getElementById('info').innerHTML=(equipo=='boca'?'Murió en Madrid':'');
}


function LimpiarDatos() {
    event.preventDefault();
    // Selecciona el formulario
    const form = document.querySelector('form');
    
    // Reinicia todos los campos del formulario
    form.reset();
}

  // Function to populate the select element
  function cargarEquipo(jsonData) {
    const selectElement = document.getElementById('equipo');
    jsonData.teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team.value;
        option.textContent = team.label;
        selectElement.appendChild(option);
    });
}

// Fetch the JSON data from the external file
fetch('/assets/docs/teams.json')
    .then(response => response.json())
    .then(data => {
        cargarEquipo(data);
    })
    .catch(error => {
        console.error('Error al Cargar Equipos:', error);
    });