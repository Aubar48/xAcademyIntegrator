// Función para el menú hamburguesa
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
}

// Función para actualizar la fecha y hora
function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    datetimeElement.textContent = `${date} ${time}`;

    // Programar la próxima actualización
    requestAnimationFrame(updateDateTime);
}

// Llamar a la función inmediatamente para inicializar el valor
updateDateTime();


// Función para cambiar el modo claro/oscuro
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector("body");
    const switches = document.querySelectorAll(".switch input[type='checkbox']");

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

// Función para cambiar el título de la página si es "Home"
function changeTitleIfHome() {
    if (document.title === "Home") {
        let alertShow = false;
        setInterval(() => {
            document.title = alertShow ? "Home" : "xAcademy";
            alertShow = !alertShow;
        }, 1000);
    }
}

// Llamar a la función inmediatamente cuando se carga el DOM
document.addEventListener('DOMContentLoaded', changeTitleIfHome);

