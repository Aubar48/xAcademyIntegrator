function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
}

function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    datetimeElement.textContent = `${date} ${time}`;
}

// Actualizar la fecha y la hora cada segundo
setInterval(updateDateTime, 1000);

// Llamar a la función inmediatamente para inicializar el valor
updateDateTime();


// Obtener el estado del modo del almacenamiento local o configurar el modo claro por defecto
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector("body");
    const switches = document.querySelectorAll("#modo");

    // Sincronizar el estado del modo en todos los interruptores
    switches.forEach(switchElement => {
        switchElement.checked = localStorage.getItem('modo') === 'noche';
        switchElement.addEventListener("change", cambiarModo);
    });

    function cambiarModo() {
        const modoActual = localStorage.getItem('modo');
        if (modoActual === 'dia') {
            body.classList.add("noche");
            localStorage.setItem('modo', 'noche');
        } else {
            body.classList.remove("noche");
            localStorage.setItem('modo', 'dia');
        }
        // Sincronizar el estado del interruptor en todos los elementos
        switches.forEach(switchElement => {
            switchElement.checked = localStorage.getItem('modo') === 'noche';
        });
    }

    // Inicializar el estado del modo
    if (localStorage.getItem('modo') === 'noche') {
        body.classList.add('noche');
    } else {
        body.classList.remove('noche');
    }
});


// Cambiar el título de la página si es "Home"
let alertShow = false;

if (document.title === "Home") {
    setInterval(() => {
        document.title = alertShow ? "Home" : "xAcademy";
        alertShow = !alertShow;
    }, 1000);
}


