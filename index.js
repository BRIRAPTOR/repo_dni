document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe automáticamente

    let dni = parseInt(document.getElementById('dni').value);
    let letraUsuario = document.getElementById('letra').value.toUpperCase();
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    // Validar si el campo de DNI está vacío
    if (!dni) {
        alert("Por favor, introduce un número de DNI.");
        return;
    }

    // Validar si el campo de letra está vacío
    if (!letraUsuario) {
        alert("Por favor, introduce una letra de DNI.");
        return;
    }

    // Validar si el número de DNI está dentro del rango permitido
    if (dni < 0 || dni > 99999999) {
        alert('El número proporcionado no es válido.');
        return;
    }

    // Validar si el usuario ha introducido solo una letra
    if (letraUsuario.length !== 1 || !/[A-Z]/.test(letraUsuario)) {
        alert('Por favor, introduce una única letra válida.');
        return;
    }

    // Calcular la letra correspondiente al número de DNI
    let letraCalculada = letras[dni % 23];

    // Comparar la letra calculada con la letra proporcionada por el usuario
    if (letraCalculada !== letraUsuario) {
        alert('La letra indicada no es correcta.');
    } else {
        alert('El número y la letra del DNI son correctos.');
    }
});