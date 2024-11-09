document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();
            if (name === "") {
                alert("Por favor, ingresa tu nombre.");
                return;
            }
            if (email === "" || !validateEmail(email)) {
                alert("Por favor, ingresa un correo electrónico válido.");
                return;
            }
            if (message === "") {
                alert("Por favor, ingresa tu pregunta.");
                return;
            }
            alert("Formulario enviado con éxito.");
            contactForm.reset();
        });
    }

    var searchForm = document.querySelector('.search-bar form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var query = searchForm.querySelector('input[type="text"]').value.trim().toLowerCase();
            switch (query) {
                case "inicio":
                    window.location.href = "index.html";
                    break;
                case "sobre nosotros":
                case "sobrenosotros":
                    window.location.href = "about_us.html";
                    break;
                case "contacto":
                    window.location.href = "contacto.html";
                    break;
                case "meditacion":
                case "meditación":
                    window.location.href = "meditation.html";
                    break;
                case "yoga":
                    window.location.href = "yoga.html";
                    break;
                case "ejercicio":
                    window.location.href = "excersice.html";
                    break;
                case "alimentacion":
                case "alimentación":
                    window.location.href = "feeding.html";
                    break;
                case "nofap":
                    window.location.href = "nofap.html";
                    break;
                case "wimhof":
                    window.location.href = "wimhof.html";
                    break;
                default:
                    alert("No se encontró la página para la búsqueda: " + query);
                    break;
            }
        });
    }

    var images = document.querySelectorAll('.imagen, .imagen-medio');
    images.forEach(function(image) {
        image.style.borderRadius = '8px';
        image.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        image.style.transition = 'transform 0.3s ease, rotate 0.3s ease';

        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.05) rotate(10deg)';
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1) rotate(0)';
        });

        var imageContainer = image.parentNode;
        imageContainer.style.position = 'relative';
        imageContainer.style.display = 'inline-block';
    });
});

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}